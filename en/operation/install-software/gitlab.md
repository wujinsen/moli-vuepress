---
lang: en-US
title: gitlab deployment
date: 2026-05-06
description: gitlab deployment - operation related articles
translationPending: false
tags:
  - en
---

# gitlabdeployment

1. Download gitlab and install dependencies:
gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm
yum install -y curl policycoreutils-python openssh-server
rpm -ivh gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm #Install gitlab
2. Modify configuration:
vim /etc/gitlab/gitlab.rb #Edit configuration file
external_url 'http://192.168.1.21' #Change to your own IP address
Modify the gitlab port:
2.1.vim /etc/gitlab/gitlab.rb
unicorn['port'] = 9090
nginx['listen_port'] = 9099

2.2.vim /var/opt/gitlab/gitlab-rails/etc/unicorn.rb
listen “127.0.0.1:9090”, :tcp_nopush => true
Modify the default gitlab nginx web service port 80

2.3.vim /var/opt/gitlab/nginx/conf/gitlab-http.conf
listen *:9099;

3. Start

gitlab-ctl reconfigure reloads the configuration
gitlab-ctl start start

Address: http://121.89.243.115:8204
