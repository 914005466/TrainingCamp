const mysql = require('mysql');
//创建链接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'new'

})



//执行sql方法
const query = (sql, callback) => {
    /* 
    使用pool.getConnection()来连接数据库
    参数是回调函数,该回调函数有两个参数
    第一个参数是链接失败
    第二个参数是链接成功对象
    */
   pool.getConnection((err, connection) => {
        if (err) {
       console.log(err);
       return;
   }
   //如果成功.执行sql语句
   connection.query(sql, (err, data) => {
       //释放链接
    //    connection.release();
       //如果执行sql语句失败
       if (err) {
           console.log('sql语句执行出错',err);
           return;  
       }
       //把成功的数据传入到回调函数中
       callback(data);
       //释放连接池
       connection.release();
    })
})
}
//导出方法
module.exports = query;