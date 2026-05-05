const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const skipDirs = new Set([".git", ".vuepress", "node_modules", ".github", "scripts"]);
const requiredTopLevelReadmes = [
  "architecture",
  "bigdata",
  "container-platform",
  "language",
  "micro-service",
  "operation",
  "personal",
  "safety",
  "source-analysis",
];

function walkMarkdownFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walkMarkdownFiles(path.join(dir, entry.name), files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(path.join(dir, entry.name));
  }
  return files;
}

function toTitleCase(input) {
  return input
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function ensureTopLevelReadmes() {
  const created = [];
  for (const dir of requiredTopLevelReadmes) {
    const filePath = path.join(repoRoot, dir, "README.md");
    if (fs.existsSync(filePath)) continue;
    const title = toTitleCase(dir);
    const content = `# ${title}\n\n> ${title} 主题目录。\n`;
    fs.writeFileSync(filePath, content, "utf8");
    created.push(filePath);
  }
  return created;
}

function deriveTitle(filePath, content) {
  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) return headingMatch[1].trim();
  const rel = path.relative(repoRoot, filePath).replace(/\\/g, "/");
  if (rel === "README.md") return "茉莉的个人博客";
  if (path.basename(filePath) === "README.md") return toTitleCase(path.basename(path.dirname(filePath)));
  return toTitleCase(path.basename(filePath, ".md"));
}

function hasFrontmatter(content) {
  return content.startsWith("---\n");
}

function ensureNonEmptyBody(content, title) {
  const frontmatterEnd = content.indexOf("\n---\n", 4);
  if (frontmatterEnd < 0) return content;
  const body = content.slice(frontmatterEnd + 5).trim();
  if (body.length > 0) return content;
  return `${content.trim()}\n\n# ${title}\n\n> 待补充内容。\n`;
}

function normalizeMarkdown(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const title = deriveTitle(filePath, original);
  const rel = path.relative(repoRoot, filePath).replace(/\\/g, "/");
  const section = rel.includes("/") ? rel.split("/")[0] : "home";
  let next = original;

  if (!hasFrontmatter(original)) {
    const description = `${title} - ${section} 相关文章`;
    const frontmatter = [
      "---",
      `title: ${title}`,
      "date: 2026-05-06",
      `description: ${description}`,
      "tags:",
      `  - ${section}`,
      "---",
      "",
    ].join("\n");
    next = `${frontmatter}${original}`.replace(/\n{3,}/g, "\n\n");
  }
  next = ensureNonEmptyBody(next, title);
  if (next === original) return false;
  fs.writeFileSync(filePath, next, "utf8");
  return true;
}

function main() {
  const createdReadmes = ensureTopLevelReadmes();
  const markdownFiles = walkMarkdownFiles(repoRoot, []);
  const changed = [];
  for (const file of markdownFiles) {
    if (normalizeMarkdown(file)) changed.push(file);
  }
  console.log(`Created README files: ${createdReadmes.length}`);
  console.log(`Updated markdown files with frontmatter: ${changed.length}`);
}

main();
