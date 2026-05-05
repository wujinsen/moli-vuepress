---
lang: ja-JP
title: Jenkins 導入チュートリアル
date: 2026-05-06
description: Jenkins 導入チュートリアル - 操作関連記事
translationPending: false
tags:
  - ja
---

# Jenkins 導入チュートリアル

マシンIP: 121.89.243.115 ユーザー: 開発

### 1. Jenkins をインストールする

````

wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key

yum install -y jenkins --nogpgcheck   注: --nogpgcheck 跳过公钥检查

````

### 2. ポート番号を変更し、jenkins ユーザー権限を変更します。

vi /etc/sysconfig/jenkins
8080 を見つけて、対応するポート番号に変更します。

jenkins ユーザー権限を変更します。
```
sudo vim /etc/sysconfig/jenkins
JENKINS_USER="root"
sudo chown -R root:root /usr/lib/jenkins
```
起動する：
```
service jenkins start/stop/restart
```

### 3. ログインページ

初期パスワード:
```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
aa0910dc2d9a405fac2f6155b3e64197

### 4.中国語

![](/operation/install-software/img/jenkins/img_1.png)

中国語プラグイン

### 5. 各種プラグインをインストールする

プラグインをインストールします (インストールプロセスが失敗する可能性があります。もう一度数回試してください)

Git パラメータ (パラメータ化されたビルドでプロジェクト ブランチを動的に取得するために使用されます)

汎用 Webhook トリガー (Webhook によって渡されたパラメーターを解析するために使用されます)

GitLab (ビルド結果を GitLab にプッシュするため)

### 6.jenkins で Git を設定する

マシン上の元の git をアンインストールし、git を再インストールします
![](/operation/install-software/img/jenkins/img_2.png)

### 7. Jenkins がプロジェクトを作成し、git を構成します
git ウェアハウスは、gitlab であってもローカル git であっても普遍的です。

- gitlab:

マシン (Jenkins が配置されているマシン) の公開キーをプロジェクトに追加し、マシン上で git clone を実行します。パスワードなしでプロジェクトをチェックアウトできますか?
- git ローカル リポジトリ:

git init はローカルリポジトリを作成します
/opt/.ssh/ ディレクトリで、公開キーをauthorized_keys に追加し、マシン上で git clone して、パスワードなしでプロジェクトをチェックアウトできるかどうかを確認します。

### 8.Jenkins はグローバル認証情報を構成します。

![](/operation/install-software/img/jenkins/img.png)

構成する秘密キーを使用した SSH ユーザー名方法を選択します

username: develop

Private Key: /opt/.ssh/id_rsa

gitlab<-->jenkins<--> はサーバーに接続できます

### 9.maven 設定と設定プラグイン

- 9.1 jenkins は Maven 構成を追加します

![](/operation/install-software/img/jenkins/img_3.png)

- 9.2 config プラグインをダウンロードし、maven settings.xml ファイルを構成します。

![](/operation/install-software/img/jenkins/img_4.png)
![](/operation/install-software/img/jenkins/img_5.png)

- プロジェクトリリーススクリプト:
```

cp /var/lib/jenkins/workspace/moli-project.jar /opt/project/moli-project
/opt/project/moli-project/startup.sh restart

```

- moli-dev リリース スクリプト:
```
node -v
npm -v
webPath=/opt/project/moli-web/
npm install
npm run build
zip -q -r dist.zip dist/m
sudo cp dist.zip $webPath
if [[ ! -d "$webPath/dist" ]]; then
 echo "文件夹不存在"
else
 echo "文件夹存在"
 # 备份dist
 sudo rm -rf $webPath/dist
fi
sudo cp -r dist/ $webPath
```
