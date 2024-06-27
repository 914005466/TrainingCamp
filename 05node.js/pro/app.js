const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname+'/aa'));

app.get('/getInfo',(req,res)=>{
    let obj={
        floor:'16号',
        num:1011,
        n:6,
        count:6,
        list:[
            { name:'张三1',age:20,num:1,bol:true },
            { name:'张三2',age:21,num:2,bol:false },
            { name:'张三3',age:22,num:3,bol:false },
            { name:'张三4',age:23,num:4,bol:false },
            { name:'张三5',age:23,num:5,bol:false },
            { name:'张三6',age:22,num:6,bol:false },
        ]
    }
    res.send(obj);
})


app.get('/login/:name/:idCard', (req, res) => {
    let { name, idCard } = req.params;
    console.log(req.params);
    res.send({ msg: '登录成功', date: { name, idCard } })
})











app.listen(8080,()=>{
    console.log('服务器启动成功');
})