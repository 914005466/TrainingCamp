const express = require('express');
const app = express();
const router = require('./router/tool');
const api = require('./router/api');
app.use(express.static(__dirname+'/web'))
//引入设置的路由对象

app.use('/api',api);
app.use(router);

app.listen(3000, () => {
    console.log('服务启动成功');
})
