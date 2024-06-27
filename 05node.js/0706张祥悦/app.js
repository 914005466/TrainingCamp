const express = require('express');
const app = express();

//设置静态
app.use(express.static(__dirname+'/web'));




app.listen(8080,()=>{
    console.log('服务启动成功');
})