const express=require('express');
const app=express();
const user = require('./router/user');


//静态资源管理
app.use(express.static(__dirname+"/web"));

app.use('/user', user);

app.listen(8080,()=>{
  console.log("服务器启动成功");
})