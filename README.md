【MySQL+Node.js连接和操作】 https://www.cnblogs.com/bluealine/p/8110660.html

首先肯定先安装mySql https://www.yiibai.com/mysql/install-mysql.html。

然后启动服务：
bin>net start mysql

登录mysql：
bin>mysql -u root -p

查询用户密码:
mysql> select host,user,authentication_string from mysql.user;

设置（或修改）root用户密码：
mysql> update mysql.user set authentication_string=password("123456") where user="root";
然后保存：
mysql> flush privileges;

