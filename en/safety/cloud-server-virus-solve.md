---
lang: en-US
title: Solutions to cloud server poisoning
date: 2026-05-06
description: Solutions to cloud server poisoning - safety related articles
translationPending: false
tags:
  - en
---

# Solution to cloud server poisoning

- The most obvious manifestation of being infected by a mining virus is: high CPU speed

Record the Trojan virus in today's server - kdevtmpfsi (and of course kinsing, etc.)

1. Find the virus and delete the directory where the virus is located

sudo find / -name kdevtmpfsi*
sudo find / -name kinsing*
sudo rm -rf ...

kill process
ps -aux | grep kdevtmpfsi
ps -aux | grep kinsing
sudo kill -9 PID

I didn't find any problems with my scheduled tasks.
But you can check it
crontab -l
sudo crontab -l to view root account scheduled tasks
crontab -e deletes scheduled tasks

12
Also check /etc/rc.local and /etc/init.d
Finally, it is recommended that you change the Tencent Cloud server password to ensure security.

Use the netstat -ltnp command to check for strange listening ports and kill the process.

ls -l /proc/30902/exe

perf top -s comm,pid,symbol View process
ls -l /proc/30902/exe View the directory where the virus is located

Repeat the above steps several times

##
