---
lang: ja-JP
title: 合流デプロイメント
date: 2026-05-06
description: Confluence 導入 - 運用関連記事
translationPending: false
tags:
  - ja
---

# confluence の展開

1. ダウンロードして解凍します。

 atlassian-confluence-7.13.0.tar.gz

/opt/atlassian-confluence-7.13.0

confluence を開始します: /opt/atlassian-confluence-7.13.0/bin/start-confluence.sh

2. 構成を変更する

- 2.1:

構成ファイルを変更します: /opt/atlassian-confluence-7.13.0/confluence/WEB-INF/classes/confluence-init.properties

 confluence.home=/opt/confluence-home-7.13.0/

- 2.2 mysql8 ドライバーを追加します。

/opt/atlassian-confluence-7.13.0/confluence/WEB-INF/lib/

3. pojie

4.pojieが完了したら再起動します
