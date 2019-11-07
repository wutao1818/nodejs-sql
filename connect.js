let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'todoapp'
});


// connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');

  // 创建一个新的 todos 表 【建表】
  let createTodos = `create table if not exists todos(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          completed tinyint(1) not null default 0
                      )`;
  connection.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

//  // 插入一行数据  【增】
//  let sql = `INSERT INTO todos(title,completed)
//           VALUES('Learn how to insert a new row',true)`;
//
//  // execute the insert statment
//    connection.query(sql);

    // 更新数据 update statment    【改】
    let sql3 = `UPDATE todos set title='更新的数据' WHERE id = 3`;
    let data = [false, 1];
    // execute the UPDATE statement
    connection.query(sql3, data, (error, results, fields) => {
      if (error){
        return console.error(error.message);
      }
      console.log('Rows affected:', results.affectedRows);
    });

    // DELETE statment  【删】
    let sql4 = `DELETE FROM todos WHERE id = ?`;
    // delete a row with id 1
    connection.query(sql4, 1, (error, results, fields) => {
      if (error)
        return console.error(error.message);
      console.log('Deleted Row(s):', results.affectedRows);
    });
    let sql5 = `DELETE FROM todos WHERE id = 2`;
    connection.query(sql5, (error, results, fields) => {
      if (error)
        return console.error(error.message);
      console.log('Deleted Row(s):', results.affectedRows);
    });

    // 查询数据 【查】
    let sql2 = `SELECT * FROM todos`;
    connection.query(sql2, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
    });


  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });

});

