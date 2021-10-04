<!--
 * @Author: your name
 * @Date: 2021-10-04 20:20:04
 * @LastEditTime: 2021-10-04 20:40:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learning-Record\others\web.md
-->
1. 使用putty连接远程服务器无法连接 Password Authentication failed
 > 解决办法 服务器 /etc/ssh/sshd_config 把PasswordAuthentication设成yes

2. 使用xshell 上传前端打包文件
> rz无法上传文件夹 先压缩 再上传解压
``` linux
tar -cvf xxx.tar *  
tar -xvf xxx.tar
rm -rf xxx.tar
```
在远程服务器中下载nginx,并且启动配置网站的根目录与index页面
```
yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx // 设置开机启动nginx
```

3. 配置完nginx 404
> 根目录是否配错,根据 /var/log/nginx  下的错误日志，来比较设置的路径是否有问题
4. 访问403 forbidden(13: Permission denied)
> 检查nginx启动用户是否与nginx.conf 中的user一致