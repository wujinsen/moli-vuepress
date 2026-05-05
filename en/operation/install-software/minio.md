---
lang: en-US
title: minio deployment
date: 2026-05-06
description: minio deployment - operation related articles
translationPending: false
tags:
  - en
---

# miniodeployment

1. Download linux minio
http://dl.minio.org.cn/server/minio/release/linux-amd64/minio

2. Start
chmod +x minio
./minio server /opt/software/minio

3. Enter the console
http://192.168.2.12:9000
RootUser: minioadmin
RootPass: minioadmin

4.Options:

- Linux server development console port 9001
./minio server ./minioData  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001
nohup ./minio server /opt/minio/minioData  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001 &

- Set environment variables and customize account passwords

export MINIO_ACCESS_KEY=minioadmin

export MINIO_SECRET_KEY=minioadmin

5. Start minio:

 nohup ./minio server ./mnt/data  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001 &

192.168.2.12:9000 Login page
