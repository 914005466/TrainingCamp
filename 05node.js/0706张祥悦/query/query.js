const mysql = require('mysql');

// 创建数据库连接
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'new'
});

const query =(sql,arr=[])=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){reject(err);}
            connection.query(sql,arr,(err,data)=>{
                if(err){reject(err);}
            resolve(data);
            //释放链接池
            connection.release();
        })
    })
    })
}
module.exports = query;