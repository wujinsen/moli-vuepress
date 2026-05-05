---
lang: ja-JP
title: JDKのデプロイメント
date: 2026-05-06
description: JDKの導入 - 操作関連記事
translationPending: false
tags:
  - ja
---

# jdkdeployment

1. jdk jdk1.8.0_301 をダウンロード

2. 環境変数 /etc/profile を設定します。

export JAVA_HOME=/usr/local/java/jdk1.8.0_301
export CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$PATH:$JAVA_HOME/bin
