//引入ws 模块,用来创建WebSocket服务器
const ws = require('ws');
//创建websocket服务器
const wsServer = ws.Server;

//实例化 ws 对象
const wss = new wsServer({
  port: 3000 //监听的端口号 
});

//链接服务器,使用on方法链接
wss.on('connection', ws=>{  
        console.log('客户端已连接');
        //接收客户端的信息,回调函数的参数json 是前台的信息对象
        ws.on('message', json => {
            // console.log(json);
            let obj = JSON.parse(json);
            console.log(obj);
        })
})
