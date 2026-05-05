---
lang: ja-JP
title: gitlab のデプロイメント
date: 2026-05-06
description: gitlab デプロイメント - 操作関連の記事
translationPending: false
tags:
  - ja
---

# gitlabdeployment

1. gitlab をダウンロードし、依存関係をインストールします。
gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm
yum install -y curl policycoreutils-python openssh-server
rpm -ivh gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm #gitlab のインストール
2. 構成を変更します。
vim /etc/gitlab/gitlab.rb #設定ファイルの編集
external_url 'http://192.168.1.21' #自分の IP アドレスに変更します
gitlab ポートを変更します。
2.1.vim /etc/gitlab/gitlab.rb
unicorn['port'] = 9090
nginx['listen_port'] = 9099

2.2.vim /var/opt/gitlab/gitlab-rails/etc/unicorn.rb
listen “127.0.0.1:9090”, :tcp_nopush => true
デフォルトの gitlab nginx Web サービスのポート 80 を変更する

2.3.vim /var/opt/gitlab/nginx/conf/gitlab-http.conf
listen *:9099;

3.スタート

gitlab-ctl reconfigure は設定をリロードします
gitlab-ctl 開始 開始

アドレス: http://121.89.243.115:8204
