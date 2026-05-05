#!/usr/bin/env python3
import re
from pathlib import Path

from deep_translator import GoogleTranslator

REPO_ROOT = Path(__file__).resolve().parent.parent
LOCALES = {
    "en": {"lang": "en-US", "target": "en"},
    "ja": {"lang": "ja-JP", "target": "ja"},
}
SKIP_DIRS = {".git", ".github", ".vuepress", "node_modules", "scripts", ".venv", "en", "ja"}


def list_source_markdown():
    result = []
    for path in REPO_ROOT.rglob("*.md"):
        rel = path.relative_to(REPO_ROOT)
        if any(part in SKIP_DIRS for part in rel.parts):
            continue
        result.append(path)
    return result


def split_frontmatter(content: str):
    if not content.startswith("---\n"):
        return {}, content
    end = content.find("\n---\n", 4)
    if end < 0:
        return {}, content
    raw = content[4:end].splitlines()
    body = content[end + 5 :]
    fm = {}
    for line in raw:
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        fm[k.strip()] = v.strip()
    return fm, body


def rewrite_relative_asset_links(source_rel_path: str, body: str):
    # Keep relative asset paths as-is so VuePress can resolve them per markdown file.
    # Absolute site paths in <img src="/..."> can break HTML asset resolution in some setups.
    return body


def translate_line(line: str, translator: GoogleTranslator):
    s = line.rstrip("\n")
    if not s.strip():
        return line
    if s.lstrip().startswith("```"):
        return line
    if s.lstrip().startswith("![]("):
        return line
    if re.match(r"^\s*[-*]\s+\[.*\]\(.*\)\s*$", s):
        return line
    if not re.search(r"[\u4e00-\u9fff]", s):
        return line
    # Keep HTML tags unchanged while translating surrounding text.
    tag_pattern = re.compile(r"<[^>]+>")
    tags = []
    def _tag_repl(match):
        tags.append(match.group(0))
        return f"__HTML_TAG_{len(tags)-1}__"
    masked = tag_pattern.sub(_tag_repl, s)
    try:
        out = translator.translate(masked)
    except Exception:
        out = masked
    if not out:
        out = masked
    for idx, tag in enumerate(tags):
        out = out.replace(f"__HTML_TAG_{idx}__", tag)
    return out + ("\n" if line.endswith("\n") else "")


def translate_body(body: str, target: str):
    translator = GoogleTranslator(source="zh-CN", target=target)
    out_lines = []
    in_code = False
    for line in body.splitlines(True):
        if line.lstrip().startswith("```"):
            in_code = not in_code
            out_lines.append(line)
            continue
        if in_code:
            out_lines.append(line)
            continue
        out_lines.append(translate_line(line, translator))
    return "".join(out_lines)


def write_locale_file(source_path: Path, locale_key: str, locale_meta: dict):
    rel = source_path.relative_to(REPO_ROOT)
    target_path = REPO_ROOT / locale_key / rel
    target_path.parent.mkdir(parents=True, exist_ok=True)

    source_content = source_path.read_text(encoding="utf-8")
    fm, body = split_frontmatter(source_content)
    title = fm.get("title", source_path.stem)
    desc = fm.get("description", title)

    tr = GoogleTranslator(source="zh-CN", target=locale_meta["target"])
    try:
        tr_title = tr.translate(title)
    except Exception:
        tr_title = title
    if not tr_title:
        tr_title = title
    try:
        tr_desc = tr.translate(desc)
    except Exception:
        tr_desc = desc
    if not tr_desc:
        tr_desc = desc
    tr_body = rewrite_relative_asset_links(str(rel), translate_body(body, locale_meta["target"]))

    content = (
        "---\n"
        f"lang: {locale_meta['lang']}\n"
        f"title: {tr_title}\n"
        "date: 2026-05-06\n"
        f"description: {tr_desc}\n"
        "translationPending: false\n"
        "tags:\n"
        f"  - {locale_key}\n"
        "---\n\n"
        f"{tr_body.strip()}\n"
    )
    target_path.write_text(content, encoding="utf-8")


def main():
    files = list_source_markdown()
    total = len(files) * len(LOCALES)
    done = 0
    for src in files:
        for key, meta in LOCALES.items():
            write_locale_file(src, key, meta)
            done += 1
            print(f"[{done}/{total}] translated {src.relative_to(REPO_ROOT)} -> {key}")
    print(f"Translated docs for locales: {', '.join(LOCALES.keys())}; source files: {len(files)}")


if __name__ == "__main__":
    main()
