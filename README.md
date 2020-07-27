# nodejs-sql
原生nodejs增删改查操作mySql数据库，接口调用，   参考： 【https://www.cnblogs.com/bluealine/p/8110660.html】


### 附：创建一个最简单的nodejs的http服务器

```javascript
var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, {
		"Content-type": "text/blain"
	});
	res.write("Hello NodeJs11111");
	res.end();
}).listen(8122);

console.log(`server listened on http://localhost:8122`);
```
注意：nodejs 内置http模块  
运行 node app.js
