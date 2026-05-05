---
lang: ja-JP
title: ミニオ展開
date: 2026-05-06
description: minio導入 - 操作関連記事
translationPending: false
tags:
  - ja
---

# ミニオデプロイメント

1. Linux minioをダウンロードする
http://dl.minio.org.cn/server/minio/release/linux-amd64/minio

2.スタート
chmod +x minio
./minio server /opt/software/minio

3. コンソールに入る
http://192.168.2.12:9000
RootUser: minioadmin
RootPass: minioadmin

4.オプション:

- Linux サーバー開発コンソール ポート 9001
./minio server ./minioData  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001
nohup ./minio server /opt/minio/minioData  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001 &

- 環境変数を設定し、アカウントのパスワードをカスタマイズする

export MINIO_ACCESS_KEY=minioadmin

export MINIO_SECRET_KEY=minioadmin

5. minio を起動します。

 nohup ./minio server ./mnt/data  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001 &

192.168.2.12:9000 ログインページ
