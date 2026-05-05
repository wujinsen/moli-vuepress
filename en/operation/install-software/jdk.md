---
lang: en-US
title: jdk deployment
date: 2026-05-06
description: jdk deployment - operation related articles
translationPending: false
tags:
  - en
---

# jdkdeployment

1. Download jdk jdk1.8.0_301

2. Set environment variables /etc/profile

export JAVA_HOME=/usr/local/java/jdk1.8.0_301
export CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$PATH:$JAVA_HOME/bin
