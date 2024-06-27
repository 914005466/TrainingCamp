 const http = require('http');
 const fs = require('fs')
 const url = require('url');
 const { log } = require('console');
 const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    let urlObj = url.parse(req.url, true);
    console.log(urlObj.pathname);
    if(urlObj.pathname === '/index.html'){
        fs.readFile('./static/index.html',(err,data)=>{
            if(err){
                res.end('文件读取失败');
                return;
        }
        res.end(data);
    });  
    }else if( urlObj.pathname === '/abc'){
        console.log( urlObj.query);
        res.end('{"msg:登录成功"}');    
    }else if( urlObj.pathname === '/abc.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8')
        fs.readFile('./static/abc.css',(err,data)=>{
            if(err){
                res.end('文件读取失败');
                return;
            }
            res.end(data);
        });
    }else if( urlObj.pathname === '/axios.min.js'){
        res.setHeader('Content-Type','text/javascript;charset=utf-8')
        fs.readFile('./static/axios.min.js',(err,data)=>{
            if(err){
                res.end('文件读取失败');
                return;
            }
            res.end(data);
            
        });
    }else{
        res.end('其他页面');
    }

 })
 server.listen(8080,()=>{
    console.log('服务启动成功');
 })