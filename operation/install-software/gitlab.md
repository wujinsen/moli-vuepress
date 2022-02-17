# gitlab安装


1. 下载gitlab及安装依赖:
gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm
yum install -y curl policycoreutils-python openssh-server
rpm -ivh gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm    #安装gitlab
2.修改配置：
 vim /etc/gitlab/gitlab.rb      #编辑配置文件
external_url 'http://192.168.1.21'        #改为自己的IP地址
修改改gitlab端口:
2.1.vim /etc/gitlab/gitlab.rb
unicorn['port'] = 9090
nginx['listen_port'] = 9099

2.2.vim /var/opt/gitlab/gitlab-rails/etc/unicorn.rb
listen “127.0.0.1:9090”, :tcp_nopush => true
修改默认的gitlab nginx的web服务80端

2.3.vim /var/opt/gitlab/nginx/conf/gitlab-http.conf
listen *:9099;

3. 启动

gitlab-ctl reconfigure 重新加载配置
gitlab-ctl start 启动


地址： http://121.89.243.115:8204


