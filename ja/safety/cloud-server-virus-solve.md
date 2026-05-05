---
lang: ja-JP
title: クラウドサーバーポイズニングの解決策
date: 2026-05-06
description: クラウドサーバーポイズニングの解決策 - 安全関連記事
translationPending: false
tags:
  - ja
---

# クラウドサーバーポイズニングの解決策

- マイニング ウイルスに感染していることの最も明らかな症状は、CPU 速度の高さです。

今日のサーバー kdevtmpfsi (もちろんキンシングなど) にトロイの木馬ウイルスを記録します。

1. ウイルスを見つけて、ウイルスが存在するディレクトリを削除します。

sudo find / -name kdevtmpfsi*
sudo find / -name kinsing*
sudo rm -rf ...

プロセスを強制終了する
ps -aux | grep kdevtmpfsi
ps -aux | grep kinsing
sudo kill -9 PID

スケジュールされたタスクには問題は見つかりませんでした。
でもチェックできるよ
crontab -l
sudo crontab -l でルートアカウントのスケジュールされたタスクを表示します
crontab -e はスケジュールされたタスクを削除します

12
/etc/rc.local と /etc/init.d も確認してください
最後に、セキュリティを確保するために、Tencent Cloud サーバーのパスワードを変更することをお勧めします。

netstat -ltnp コマンドを使用して、奇妙なリスニング ポートがないか確認し、プロセスを強制終了します。

ls -l /proc/30902/exe

perf top -s comm,pid,symbol プロセスの表示
ls -l /proc/30902/exe ウイルスが存在するディレクトリを表示します。

上記の手順を数回繰り返します

##
