const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    console.log(req.url);
    if (req.url === '/index.html') {
        res.end('首页')
    }else if(req.url === '/list.html'){
        res.end('列表页')
    }else{
        res.end('中午吃啥')
    }
    
});
server.listen(8080, () => {
    console.log('服务启动成功');
});