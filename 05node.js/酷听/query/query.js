const mysql = require('mysql');
// 创建连接池
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'zys'
})
const query=(sql,arr=[])=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connect)=>{
            if(err){
                reject(err)
            }else{
                connect.query(sql,arr,(err,data)=>{
                    if(err){
                        reject(err)
                    }
                    resolve(data);
                    connect.release();
                })
            }
        })
    })
}
module.exports=query