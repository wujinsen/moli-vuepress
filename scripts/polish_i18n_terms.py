#!/usr/bin/env python3
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent


def walk_markdown(root: Path):
    for path in root.rglob("*.md"):
        yield path


def polish_en(text: str) -> str:
    replacements = [
        (r"SpringCloud", "Spring Cloud"),
        (r"springcloud", "Spring Cloud"),
        (r"Spring Cloud微服务", "Spring Cloud microservices"),
        (r"单体项目", "Monolithic project"),
        (r"单体", "Monolithic"),
        (r"Single project", "Monolithic project"),
        (r"Jasmine Management System", "Moli Management System"),
        (r"Jasmine management system", "Moli Management System"),
        (r"微服务", "microservices"),
        (r"微信公众号", "WeChat Official Account"),
        (r"公众号", "Official Account"),
        (r"茉莉管理系统", "Moli Management System"),
        (r"Moli Management System", "Moli Management System"),
        (r"技术分享", "tech sharing"),
    ]
    for pattern, repl in replacements:
        text = re.sub(pattern, repl, text)
    return text


def polish_ja(text: str) -> str:
    replacements = [
        (r"SpringCloud", "Spring Cloud"),
        (r"springcloud", "Spring Cloud"),
        (r"Spring Cloud微服务", "Spring Cloud マイクロサービス"),
        (r"单体项目", "モノリシック プロジェクト"),
        (r"单体", "モノリシック"),
        (r"単一プロジェクト", "モノリシック プロジェクト"),
        (r"Jasmine 管理システム", "モリ管理システム"),
        (r"ジャスミン管理システム", "モリ管理システム"),
        (r"微服务", "マイクロサービス"),
        (r"微信公众号", "WeChat 公式アカウント"),
        (r"公众号", "公式アカウント"),
        (r"茉莉管理系统", "モリ管理システム"),
        (r"技术分享", "技術共有"),
        (r"個の個人プロジェクト", "個人プロジェクト"),
    ]
    for pattern, repl in replacements:
        text = re.sub(pattern, repl, text)
    return text


def fix_heading_spacing(text: str) -> str:
    lines = text.splitlines(True)
    fixed = []
    for line in lines:
        if re.match(r"^#\S", line):
            line = re.sub(r"^(#+)([^\s#])", r"\1 \2", line)
        fixed.append(line)
    return "".join(fixed)


def process_file(path: Path, polisher):
    original = path.read_text(encoding="utf-8")
    if not original.startswith("---\n"):
        return False
    end = original.find("\n---\n", 4)
    if end < 0:
        return False
    header = original[: end + 5]
    body = original[end + 5 :]
    new_body = fix_heading_spacing(polisher(body))
    if new_body == body:
        return False
    path.write_text(header + new_body, encoding="utf-8")
    return True


def main():
    updated = 0
    en_root = REPO_ROOT / "en"
    ja_root = REPO_ROOT / "ja"
    for locale_root, polisher in ((en_root, polish_en), (ja_root, polish_ja)):
        if not locale_root.exists():
            continue
        for md in walk_markdown(locale_root):
            if process_file(md, polisher):
                updated += 1
    print(f"Polished locale markdown files: {updated}")


if __name__ == "__main__":
    main()
