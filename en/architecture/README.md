---
lang: en-US
title: Cloud server virus
date: 2026-05-06
description: Cloud server virus - architecture related articles
translationPending: false
tags:
  - en
---

# Cloud server virus

Record the Trojan viruses in the server - kdevtmpfsi kthreadd
This is a mining virus, entered through my docker redis, there is a hidden danger of not setting a password at the beginning.
The password should be configured and port mapping should be done. Don't stupidly use the default host port~

1. Delete the corresponding Trojan files first.

sudo find / -name kdevtmpfsi*
sudo rm -rf ...

2. Delete the files of the daemon process

sudo find / -name kinsing*
sudo rm -rf ...

3. Kill the process

ps -aux | grep kinsing

sudo kill -9 PID

ps -aux | grep kdevtmpfsi

sudo kill -9 PID

4. Use the netstat -ltnp command to check for strange alphanumeric listening ports and kill the process.

ls -l /proc/30902/exe

I didn't find any problems with my scheduled tasks.
But you can check it
crontab -l
crontab -e deletes scheduled tasks

Also check /etc/rc.local and /etc/init.d
Finally, change the cloud server password to ensure security.

- Possible causes of poisoning:

Using a cracked version of confluence, I tried cracking multiple versions of confluence but still got hacked.
The password is too simple. Various software on the server, such as mysql, redis, jenkins, gitlab, etc., have passwords that are too simple and can easily be hacked.
Too many port numbers are open to the outside world. Turn on the firewall and only open the used port numbers.
