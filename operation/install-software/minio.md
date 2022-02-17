
# minio安装

1.下载linux minio
http://dl.minio.org.cn/server/minio/release/linux-amd64/minio

2.启动
chmod +x minio
./minio server /opt/software/minio

3.进入控制台
http://192.168.2.12:9000
RootUser: minioadmin
RootPass: minioadmin

4.可选项：

- linux服务器开发console端口9001
./minio server ./minioData  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001
nohup ./minio server /opt/minio/minioData  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001 &

- 设置环境变量，自定义账号密码

export MINIO_ACCESS_KEY=minioadmin

export MINIO_SECRET_KEY=minioadmin

5.启动minio:

 nohup ./minio server ./mnt/data  --address 0.0.0.0:9000 --console-address 0.0.0.0:9001 &

192.168.2.12:9000 登录页面


