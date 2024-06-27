//创建一个服务器
//引入http模块,node官方模块又称为 原生模块
const http = require('http')
//创建一个服务器
const server = http.createServer((req, res) => {
    //req 客户端请求对象,包含请求信息 request 
    //res 服务器响应对象,用于向客户端发送响应 response 
    //设置utf-8编码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    //向客户端发送响应数据
    res.write('西出阳关无故人')
    res.end('轻舟已过万重山') //向客户端发送响应数据
    //res.end()方法可以把参数信息返回到前台,end方法是服务器执行的最终方法,后面不允许执行其他的方法
    res.write('天涯何处无芳草') //向客户端发送响应数据
});
//监听端口
server.listen(8080, () => {
    console.log('服务器启动成功,监听8080端口');
})