# 云服务器中毒的解决方法

- 中了挖矿病毒最显著的表现为: cpu飚的很高

记录一下今天服务器中的木马病毒——kdevtmpfsi(当然还有kinsing等)

1. 查找病毒并删除病毒所在目录

sudo find / -name kdevtmpfsi*
sudo find / -name kinsing*
sudo rm -rf ...

杀死进程
ps -aux | grep kdevtmpfsi
ps -aux | grep kinsing
sudo kill -9 PID

我的定时任务里倒是没发现有什么问题
不过可以检查一下
crontab -l
sudo crontab -l 查看root账户定时任务
crontab -e 删除定时任务

12
还有/etc/rc.local以及/etc/init.d都检查一遍
最后建议您修改腾讯云服务器密码，做好安全。

netstat -ltnp命令查看奇怪的监听端口，杀掉该进程


ls -l /proc/30902/exe


perf top -s comm,pid,symbol 查看进程
ls -l /proc/30902/exe 查看病毒所在目录

上面的步骤多重复几遍

## 
