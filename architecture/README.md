# 云服务器病毒



记录一下服务器中过的木马病毒——kdevtmpfsi  kthreadd
这是一个挖矿病毒，通过我docker的redis进入的，一开始没设置密码的隐患啊。
应该配置好密码，做好端口映射，别傻乎乎的用默认的主机端口~

1. 先将相应木马文件删除

sudo find / -name kdevtmpfsi*
sudo rm -rf ...

2. 再将守护进程的文件删除

sudo find / -name kinsing*
sudo rm -rf ...

3. 杀死进程

ps -aux | grep kinsing

sudo kill -9 PID

ps -aux | grep kdevtmpfsi

sudo kill -9 PID

4. netstat -ltnp命令查看奇怪的字母数字监听端口，杀掉该进程

ls -l /proc/30902/exe



我的定时任务里倒是没发现有什么问题
不过可以检查一下
crontab -l
crontab -e 删除定时任务

还有/etc/rc.local以及/etc/init.d都检查一遍
最后修改云服务器密码，做好安全。


- 中毒的可能原因：

使用破解版的confluence，试过多个版本的confluence破解，依然被入侵。
密码太简单。服务器上的各种软件，比如mysql,redis, jenkins,gitlab等，密码太简单容易被入侵。
对外开放太多端口号。开启防火墙，只开放使用的端口号。


