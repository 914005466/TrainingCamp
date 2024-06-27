/*
express 是nodejs的一个简单框架
它里面没有新的模块,这只是继承了node的原生模块并且扩展
*/ 
// const { log } = require('console');
const { log } = require('console');
const express = require('express');
const app = express();
/* 
post 提交和get不一样 需要在服务器的头部设置post中间件过滤数据
*/

app.use(express.json())
app.use(express.urlencoded({extended:false}))
//设置静态资源管理器
app.use(express.static(__dirname+'/static'))

//路由功能
/* 
    app.get() 通过get请求的方式处理函数
    第一个参数是 路由path
    第二个参数是 回调函数
    回调函数中req 表示 前台发送过来的信息
    res 表示发送给前台的信息
*/
app.get('/',(req,res)=>{
    res.send('赤壁之战');
})
app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/static/index.html');
})
//  设置get请求接口
app.get('/userInfo',(req,res)=>{
    console.log(req);
    let namea = req.query.name;
    let age = req.query.age;
    //通过req.query获取前台发送过来的参数 name=aa&age=bb
    res.send({msg:'提交成功', data:{age,namea}});
})

//设置动态路由接口
app.get('/msg/:name/:age',(req,res)=>{
    //通过req.params 获取动态路由传递的参数
    console.log(req.params);
   let {name,age}=req.params;
    res.send({msg:'提交成功', data:{age,name}});
})
//  设置post请求接
app.post('/post',(req,res)=>{
    console.log(req.body);
    let {name,age} = req.body;
    res.send({msg:'提交成功', data:{age,name}});
});

// app.get('/aa.css',(req,res)=>{
//     console.log(req.path);
//     res.sendFile(__dirname+'/static'+req.path);
// })


//设置监听
app.listen(8080,()=>{
    console.log('服务器启动成功');
})