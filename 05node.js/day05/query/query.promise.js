
const mysql = require('mysql');
// 创建链接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'new'

})

const query = (sql,arr=[]) =>{
    //返回一个promoise实例化对象
    return new Promise((resolve,reject)=>{
        //使用连接池链接数据库
        pool.getConnection((err,connection)=>{
            //如果链接失败返回错误
            if(err){
                reject(err)
            }
            //链接成功执行sql语句
            connection.query(sql,arr,(err,data)=>{
                if(err){
                    reject(err)
                }
                //如果执行成功返回数据
                resolve(data);
                //释放链接
                connection.release();
            })
        })
    })
}













//导出方法
module.exports = query;