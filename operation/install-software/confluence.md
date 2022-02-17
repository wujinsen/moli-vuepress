# confluence安装


1.下载解压:

 atlassian-confluence-7.13.0.tar.gz

/opt/atlassian-confluence-7.13.0

启动confluence: /opt/atlassian-confluence-7.13.0/bin/start-confluence.sh

2. 修改配置

- 2.1:

修改配置文件: /opt/atlassian-confluence-7.13.0/confluence/WEB-INF/classes/confluence-init.properties

 confluence.home=/opt/confluence-home-7.13.0/

- 2.2 添加mysql8驱动:


/opt/atlassian-confluence-7.13.0/confluence/WEB-INF/lib/


3. pojie

4.pojie完毕后重启即可




