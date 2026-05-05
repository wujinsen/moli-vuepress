const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const locales = [
  { key: "en", lang: "en-US" },
  { key: "ja", lang: "ja-JP" },
];
const placeholderPattern = /(TODO:\s*Translate from|Translation is pending for|translationPending:\s*true)/;

function walkMarkdownFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkMarkdownFiles(fullPath, files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(fullPath);
  }
  return files;
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return { title: null, body: content };
  const end = content.indexOf("\n---\n", 4);
  if (end < 0) return { title: null, body: content };
  const header = content.slice(4, end);
  const body = content.slice(end + 5).trim();
  const titleLine = header.split("\n").find((line) => line.startsWith("title:"));
  const title = titleLine ? titleLine.replace("title:", "").trim() : null;
  return { title, body };
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

function buildDoc(locale, sourceRelPath, sourceTitle, sourceBody) {
  const title = sourceTitle || path.basename(sourceRelPath, ".md");
  const safeBody =
    sourceBody && sourceBody.length > 0
      ? rewriteRelativeAssetLinks(sourceRelPath, sourceBody)
      : "> (empty source body)";
  return [
    "---",
    `lang: ${locale.lang}`,
    `title: ${title}`,
    "date: 2026-05-06",
    `description: ${title}`,
    "translationPending: true",
    "tags:",
    `  - ${locale.key}`,
    "---",
    "",
    `# ${title}`,
    "",
    `> Source: \`/${sourceRelPath.replace(/\\/g, "/")}\``,
    "",
    safeBody,
    "",
  ].join("\n");
}

function main() {
  let updated = 0;
  for (const locale of locales) {
    const localeRoot = path.join(repoRoot, locale.key);
    if (!fs.existsSync(localeRoot)) continue;
    const localeFiles = walkMarkdownFiles(localeRoot, []);
    for (const localeFile of localeFiles) {
      const content = fs.readFileSync(localeFile, "utf8");
      placeholderPattern.lastIndex = 0;
      const shouldUpdate =
        placeholderPattern.test(content) ||
        content.includes("translationPending: true");
      if (!shouldUpdate) continue;
      const relFromLocale = path.relative(localeRoot, localeFile);
      const sourcePath = path.join(repoRoot, relFromLocale);
      if (!fs.existsSync(sourcePath)) continue;
      const source = fs.readFileSync(sourcePath, "utf8");
      const { title, body } = parseFrontmatter(source);
      fs.writeFileSync(localeFile, buildDoc(locale, relFromLocale, title, body), "utf8");
      updated += 1;
    }
  }
  console.log(`Updated locale placeholder docs with fallback content: ${updated}`);
}

main();
