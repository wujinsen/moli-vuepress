---
title: 茉莉的个人博客
date: 2026-05-06
description: 茉莉的个人博客 - home 相关文章
tags:
  - home
---

<center>
<img src='./logo.jpg' >
</center>

[中文](#中文) · [English](#english) · [日本語](#日本語)

## 中文

这是 **Moli（茉莉）** 的个人站点仓库，基于 **VuePress v1** 构建，支持 **中文 / English / 日本語** 三套内容镜像目录：

- 中文：`/`（仓库根目录 Markdown）
- English：`/en/`
- 日本語：`/ja/`

### 本地开发

```bash
npm install
npm run dev
```

### 常用脚本

```bash
npm run docs:check
npm run build
npm run docs:i18n:init
npm run docs:i18n:sync-fallback
npm run docs:i18n:translate
npm run docs:i18n:polish
```

说明：`docs:i18n:translate` 依赖本机 Python 环境与 `deep-translator`（建议用仓库内 `.venv` 安装依赖后再执行）。

### 许可证

本仓库使用 **ISC License**，详见仓库根目录的 `LICENSE` 文件。

## English

This repo is **Moli’s** personal site, built with **VuePress v1**, with mirrored content for **Chinese / English / Japanese**:

- Chinese: `/` (Markdown at repo root)
- English: `/en/`
- Japanese: `/ja/`

### Local development

```bash
npm install
npm run dev
```

### Useful scripts

```bash
npm run docs:check
npm run build
npm run docs:i18n:init
npm run docs:i18n:sync-fallback
npm run docs:i18n:translate
npm run docs:i18n:polish
```

Note: `docs:i18n:translate` requires Python + `deep-translator` (a local `.venv` is recommended).

### License

**ISC License** — see `LICENSE`.

## 日本語

このリポジトリは **Moli（茉莉）** の個人サイトで、**VuePress v1** を使い、**中国語 / 英語 / 日本語** のミラー構成です：

- 中国語：`/`（リポジトリ直下の Markdown）
- 英語：`/en/`
- 日本語：`/ja/`

### ローカル開発

```bash
npm install
npm run dev
```

### よく使うスクリプト

```bash
npm run docs:check
npm run build
npm run docs:i18n:init
npm run docs:i18n:sync-fallback
npm run docs:i18n:translate
npm run docs:i18n:polish
```

補足：`docs:i18n:translate` は Python と `deep-translator` が必要です（ローカルの `.venv` 推奨）。

### ライセンス

**ISC License** — 詳細は `LICENSE` を参照してください。
