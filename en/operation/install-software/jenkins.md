---
lang: en-US
title: Jenkins deployment tutorial
date: 2026-05-06
description: Jenkins deployment tutorial - operation related articles
translationPending: false
tags:
  - en
---

# Jenkins Deployment Tutorial

Machine IP: 121.89.243.115 User: develop

### 1. Install Jenkins

````

wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key

yum install -y jenkins --nogpgcheck   注: --nogpgcheck 跳过公钥检查

````

### 2. Modify the port number and modify the jenkins user permissions

vi /etc/sysconfig/jenkins
Find 8080 and change it to the corresponding port number.

Modify jenkins user permissions:
```
sudo vim /etc/sysconfig/jenkins
JENKINS_USER="root"
sudo chown -R root:root /usr/lib/jenkins
```
start up:
```
service jenkins start/stop/restart
```

### 3. Login page

Initial password:
```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
aa0910dc2d9a405fac2f6155b3e64197

### 4.Chinese

![](/operation/install-software/img/jenkins/img_1.png)

Chinese plug-in

### 5. Install various plug-ins

Install the plug-in (the installation process may fail, just try a few more times)

Git Parameter (used to dynamically obtain project branches in parameterized builds)

Generic Webhook Trigger (used to parse parameters passed by Webhook)

GitLab (for pushing build results to GitLab)

### 6.jenkins configure Git

Uninstall the original git on the machine and reinstall git
![](/operation/install-software/img/jenkins/img_2.png)

### 7. Jenkins creates the project and configures git
The git warehouse is universal whether it is gitlab or local git.

- gitlab:

Add the public key of the machine (the machine where Jenkins is located) to the project, and git clone on the machine. Can you check out the project without a password?
- git local repository:

git init creates a local repository
In the /opt/.ssh/ directory, add the public key to authorized_keys, and git clone on the machine to see if you can check out the project without a password.

### 8.Jenkins configure global credentials:

![](/operation/install-software/img/jenkins/img.png)

Select SSH Username with private key method to configure

username: develop

Private Key: /opt/.ssh/id_rsa

gitlab<-->jenkins<--> can connect the servers

### 9.maven configuration and config plug-in

- 9.1 jenkins adds maven configuration

![](/operation/install-software/img/jenkins/img_3.png)

- 9.2 Download the config plug-in and configure the maven setting.xml file

![](/operation/install-software/img/jenkins/img_4.png)
![](/operation/install-software/img/jenkins/img_5.png)

- Project release script:
```

cp /var/lib/jenkins/workspace/moli-project.jar /opt/project/moli-project
/opt/project/moli-project/startup.sh restart

```

- moli-dev release script:
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
