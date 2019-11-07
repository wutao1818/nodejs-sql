var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'todoapp'
});
// 连接数据库
connection.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      }
      console.log(' MySQL 数据库成功连接...');
});
// 创建一个http服务器
var http = require("http");
http.createServer(function(req, res) {
	var url = req.url;
	switch (url){
	    case '/':
           res.writeHead(200, {
               "Content-type": "text/blain"
           });
           res.write("hello nodejs");
           res.end();
        case '/user':
           getDatas(res);
	}
}).listen(8122);
console.log(`server listened on http://localhost:8122`);

// 定义一个查询的方法
function getDatas(res){
    // 查询数据 【查】
     var sql2 = `SELECT * FROM todos`;
     connection.query(sql2, (error, results, fields) => {
        console.log(results);
        res.writeHead(200, {
            "Content-type": "application/json"
        });
        res.end(JSON.stringify(results), 'utf-8');
     });

//    // 通过存储过程去查询数据 【查】
//    // 首先在数据库中创建存储过程
//    //`create procedure GetUsers()
//    //begin
//    //	SELECT * FROM todos;
//    //end;`
//    let callSql = `CALL GetUsers();`;
//    connection.query(callSql, (error, results, fields) => {
//      if (error) {
//        return console.error(error.message);
//      }
//      res.writeHead(200, {
//          "Content-type": "application/json"
//      });
//      res.end(JSON.stringify(results[0]), 'utf-8');
//    });

}

