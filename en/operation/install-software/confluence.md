---
lang: en-US
title: confluencedeployment
date: 2026-05-06
description: confluence deployment - operation related articles
translationPending: false
tags:
  - en
---

# confluencedeployment

1. Download and unzip:

 atlassian-confluence-7.13.0.tar.gz

/opt/atlassian-confluence-7.13.0

Start confluence: /opt/atlassian-confluence-7.13.0/bin/start-confluence.sh

2. Modify configuration

- 2.1:

Modify the configuration file: /opt/atlassian-confluence-7.13.0/confluence/WEB-INF/classes/confluence-init.properties

 confluence.home=/opt/confluence-home-7.13.0/

- 2.2 Add mysql8 driver:

/opt/atlassian-confluence-7.13.0/confluence/WEB-INF/lib/

3. pojie

4. Restart after pojie is completed
