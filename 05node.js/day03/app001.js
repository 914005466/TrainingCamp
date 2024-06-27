const express = require('express');
//引入cors模块,用来处理跨域请求,允许所有请求跨域操作
const cors = require('cors');
const app = express()
//引入formidable模块，用于处理表单上传的数据和文件 安装命令：npm install formidable 
const formidable = require('formidable');   
const fs = require('fs');
//引入自定义中间件
const aa = require('./middle/aa');
const ab = require('./middle/ab');
//使用自定义中间件
app.use(aa);
app.use(ab(300));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    req.num +=100;
    next();
})

//使用cors模块处理跨域请求

app.use(cors());
//设置静态资源管理器
app.use(express.static(__dirname+'/web'));

app.get('/abc',(req,res)=>{
    console.log(req.num);
    res.send({
        msg:'请求成功',
        data:{
            name:'张三',
            age:20
        }
    })
})
app.post('/info',(req,res)=>{
    console.log(req);
    // let {name,phone}=req.body;
    let form = new formidable.IncomingForm();
    // 使用parse方法操作post提交的表单数据
    form.parse(req,( err, fields, files )=>{
        /*
        第一个req 是客户端传递过来的数据
        第二个参数 是回调函数    
        回调函数有三个参数：err, fields, files
        第一个参数是 操作错误时候的错误对象
        第二个参数是 前台传递的文本信息
        第三个参数是 前台传递的文件信息
        */ 
       if(err){
           console.log(err);
           return;
       }
          //图片的临时存储路径
        console.log(files.avatar[0].filepath);
        //图片名字
        console.log(files.avatar[0].originalFilename);
        //拷贝文件
        let rs =fs.createReadStream(files.avatar[0].filepath);
        let ws =fs.createWriteStream('./web/images/'+files.avatar[0].originalFilename);
        rs.pipe(ws);
        res.send({msg:'请求成功',data:{
            name:fields.name[0],
            phone:fields.phone[0] ,
        
            // file:files.file[0].filepath
        }})
    })
    // res.send({msg:'请求成功',data:{name,phone}})
})

//全局通配匹配
app.all('*',(req,res)=>{
    res.sendFile(__dirname+'/web/404.html')
})
app.listen(8081,()=>{
    console.log('服务器启动成功');
})