---
lang: ja-JP
title: クラウドサーバーウイルス
date: 2026-05-06
description: クラウドサーバーウイルス - アーキテクチャ関連記事
translationPending: false
tags:
  - ja
---

# クラウドサーバーウイルス

サーバー内のトロイの木馬ウイルスを記録する - kdevtmpfsi kthreadd
これはマイニング ウイルスで、docker redis を通じて侵入しました。最初にパスワードを設定しないと潜在的な危険があります。
パスワードを設定し、ポートのマッピングを行う必要があります。デフォルトのホストポートを愚かに使用しないでください~

1. まず、対応するトロイの木馬ファイルを削除します。

sudo find / -name kdevtmpfsi*
sudo rm -rf ...

2. デーモンプロセスのファイルを削除します。

sudo find / -name kinsing*
sudo rm -rf ...

3. プロセスを強制終了します

ps -aux | grep kinsing

sudo kill -9 PID

ps -aux | grep kdevtmpfsi

sudo kill -9 PID

4. netstat -ltnp コマンドを使用して、奇妙な英数字のリスニング ポートがないか確認し、プロセスを強制終了します。

ls -l /proc/30902/exe

スケジュールされたタスクには問題は見つかりませんでした。
でもチェックできるよ
crontab -l
crontab -e はスケジュールされたタスクを削除します

/etc/rc.local と /etc/init.d も確認してください
最後に、セキュリティを確保するためにクラウド サーバーのパスワードを変更します。

- 中毒の考えられる原因:

クラックされたバージョンの confluence を使用して、複数のバージョンの confluence をクラックしようとしましたが、やはりハッキングされてしまいました。
パスワードが単純すぎます。 mysql、redis、jenkins、gitlab など、サーバー上のさまざまなソフトウェアのパスワードは単純すぎるため、簡単にハッキングされる可能性があります。
外部に公開されているポート番号が多すぎます。ファイアウォールをオンにして、使用されているポート番号のみを開きます。
