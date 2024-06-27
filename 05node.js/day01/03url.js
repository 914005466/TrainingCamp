
const http = require('http');
//引入url模块
const url = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html; charset=utf-8' );
    //设置响应头
    let objUrl = url.parse(req.url,true)
    /* 
    通过url 模块 ,可以把用户传入的数据格式化
    objUrl.query 就是用户传入的数据
    objUrl.pathname 就是请求的路径
    */
    console.log(objUrl.query);
    console.log(objUrl.pathname);
    res.end('投诗赠ni罗')
});
server.listen(8080, () => {
    console.log('服务器启动成功');
})
