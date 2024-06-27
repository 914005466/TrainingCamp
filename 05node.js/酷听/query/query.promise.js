const mysql = require('mysql');
//创建链接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'zys'
});

//创建执行sql方法

const query = (sql,arr) =>{
  //返回一个promise实例化对象
  return new Promise((resolve,reject)=>{
    //使用连接池链接数据库
    pool.getConnection((err,connect)=>{
      //链接失败返回错误
      if(err){
        reject(err);
      }
      //链接成功执行sql语句
      connect.query(sql,arr,(err,rows)=>{
        //如果执行失败返回错误
        if(err){
          reject(err);
        }
        //如果成功则把数据通过resolve发送出去
        resolve(rows);
        connect.release();
      })
    })
  })
}

//导出query方法
module.exports = query;