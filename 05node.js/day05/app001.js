const express = require('express');
const app = express();
/*
引入mysql 模块，用来操作数据库
*/ 
const mysql = require('mysql');

//静态资源管理器
app.use(express.static( __dirname +'/web'));

/*
链接数据库
*/
const link = mysql.createConnection({
    host:'localhost', //设置服务器地址 localhost 或者服务器的ip地址
    user:'root', //用户名
    password:'1234', //密码
    database:'new' //设置操作的数据库名
});

// console.log(link);
//判断数据库是否连接成功
link.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log( '数据库连接成功' );
});

app.get('/all',(req,res)=>{
    //执行sql语句
    link.query('select * from user',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        res.send({
            code:200,
            list:data
        });
    });
    // link.end();
});


//关闭数据库
// link.end();

app.listen(3000,()=>{
    console.log( '服务启动成功' );
});