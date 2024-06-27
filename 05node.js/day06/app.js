const express = require('express');
const app = express();
const user = require('./router/user')
const news = require('./router/news')
const stu = require('./router/stu')
const address = require('./router/address')

//设置静态
app.use(express.static(__dirname+'/web'));
//中间件执行分离路由，第一个参数是路由接口的前缀，如/user/all,则在user.js中开发接口的时候,接口前面的/user可以省略,统一由中间件派发
app.use('/user',user);
app.use('/news',news);
app.use(stu);
app.use('/address',address);








app.listen(8081,()=>{
    console.log('服务器启动成功');
})





