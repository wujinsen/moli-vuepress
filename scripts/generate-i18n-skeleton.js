const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const locales = [
  { key: "en", lang: "en-US" },
  { key: "ja", lang: "ja-JP" },
];
const skipDirs = new Set([".git", ".github", ".vuepress", "node_modules", "scripts", "en", "ja"]);

function walkMarkdownFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walkMarkdownFiles(fullPath, files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(fullPath);
  }
  return files;
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return { body: content, title: null };
  const end = content.indexOf("\n---\n", 4);
  if (end < 0) return { body: content, title: null };
  const header = content.slice(4, end);
  const body = content.slice(end + 5).trim();
  const titleLine = header.split("\n").find((line) => line.startsWith("title:"));
  const title = titleLine ? titleLine.replace("title:", "").trim() : null;
  return { body, title };
}

function toPosix(p) {
  return p.replace(/\\/g, "/");
}

function rewriteRelativeAssetLinks(sourceRelPath, body) {
  const sourceDir = toPosix(path.posix.dirname(toPosix(sourceRelPath)));
  const normalize = (raw) => {
    if (!raw || raw.startsWith("/") || raw.startsWith("#") || /^[a-z]+:\/\//i.test(raw)) return raw;
    if (!raw.startsWith("./") && !raw.startsWith("../")) return raw;
    const resolved = path.posix.normalize(path.posix.join("/", sourceDir, raw));
    return resolved;
  };

  let next = body.replace(/(!?\[[^\]]*\]\()([^)]+)(\))/g, (m, p1, link, p3) => `${p1}${normalize(link)}${p3}`);
  next = next.replace(/(src=["'])([^"']+)(["'])/g, (m, p1, link, p3) => `${p1}${normalize(link)}${p3}`);
  return next;
}

function defaultTitleFromPath(relPath) {
  if (relPath === "README.md") return "Home";
  const base = path.basename(relPath, ".md");
  if (base === "README") return path.basename(path.dirname(relPath));
  return base;
}

function buildLocaleDoc({ locale, relPath, title, sourcePath, sourceBody }) {
  const fallbackTitle = defaultTitleFromPath(relPath);
  const displayTitle = title || fallbackTitle;
  const fallbackBody =
    sourceBody && sourceBody.trim().length > 0
      ? rewriteRelativeAssetLinks(relPath, sourceBody.trim())
      : "> (empty source body)";
  return [
    "---",
    `lang: ${locale.lang}`,
    `title: ${displayTitle}`,
    "date: 2026-05-06",
    `description: ${displayTitle}`,
    "translationPending: true",
    "tags:",
    `  - ${locale.key}`,
    "---",
    "",
    `# ${displayTitle}`,
    "",
    `> Source: \`/${sourcePath.replace(/\\/g, "/")}\``,
    "",
    fallbackBody,
    "",
  ].join("\n");
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function main() {
  const mdFiles = walkMarkdownFiles(repoRoot, []);
  let created = 0;
  for (const sourceFile of mdFiles) {
    const relPath = path.relative(repoRoot, sourceFile);
    const source = fs.readFileSync(sourceFile, "utf8");
    const { title, body } = parseFrontmatter(source);
    for (const locale of locales) {
      const target = path.join(repoRoot, locale.key, relPath);
      if (fs.existsSync(target)) continue;
      ensureDir(target);
      fs.writeFileSync(
        target,
        buildLocaleDoc({ locale, relPath, title, sourcePath: relPath, sourceBody: body }),
        "utf8"
      );
      created += 1;
    }
  }
  console.log(`Created locale skeleton docs: ${created}`);
}

main();
