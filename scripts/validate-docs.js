const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const config = require(path.join(repoRoot, ".vuepress", "config.js"));

function flattenSidebarItems(items, acc = []) {
  for (const item of items) {
    if (typeof item === "string") {
      acc.push(item);
      continue;
    }
    if (item.path) acc.push(item.path);
    if (Array.isArray(item.children)) flattenSidebarItems(item.children, acc);
  }
  return acc;
}

function resolveMarkdownPath(vuepressPath) {
  const cleaned = vuepressPath.replace(/^\//, "").replace(/\/$/, "");
  if (!cleaned) return path.join(repoRoot, "README.md");
  const candidates = [
    path.join(repoRoot, `${cleaned}.md`),
    path.join(repoRoot, cleaned, "README.md"),
  ];
  return candidates.find((c) => fs.existsSync(c)) || candidates[0];
}

function collectMarkdownFiles(dir, files = []) {
  const skipDirs = new Set([".git", ".vuepress", "node_modules", ".github", "scripts"]);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      collectMarkdownFiles(path.join(dir, entry.name), files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(path.join(dir, entry.name));
  }
  return files;
}

function checkFrontmatter(content) {
  if (!content.startsWith("---\n")) return false;
  const end = content.indexOf("\n---\n", 4);
  if (end < 0) return false;
  const block = content.slice(0, end + 5);
  return /title:\s+.+/.test(block) && /date:\s+.+/.test(block) && /description:\s+.+/.test(block);
}

function checkInternalLinks(filePath, content) {
  const issues = [];
  const markdownLinkPattern = /\[[^\]]+\]\((\/[^)\s#]+)(?:#[^)]+)?\)/g;
  let match;
  while ((match = markdownLinkPattern.exec(content)) !== null) {
    const target = match[1];
    const fullPath = resolveMarkdownPath(target);
    if (!fs.existsSync(fullPath)) {
      issues.push(`Broken link "${target}" in ${path.relative(repoRoot, filePath)}`);
    }
  }
  return issues;
}

function main() {
  const errors = [];
  const sidebarPaths = flattenSidebarItems(config.themeConfig.sidebar || []);
  for (const p of sidebarPaths) {
    const target = resolveMarkdownPath(p);
    if (!fs.existsSync(target)) errors.push(`Missing sidebar target: ${p}`);
  }

  const markdownFiles = collectMarkdownFiles(repoRoot, []);
  for (const filePath of markdownFiles) {
    const content = fs.readFileSync(filePath, "utf8");
    if (!checkFrontmatter(content)) {
      errors.push(`Missing/invalid frontmatter: ${path.relative(repoRoot, filePath)}`);
    }
    errors.push(...checkInternalLinks(filePath, content));
  }

  if (errors.length > 0) {
    console.error("Documentation checks failed:");
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }
  console.log("Documentation checks passed.");
}

main();
