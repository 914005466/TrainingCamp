const express = require('express');
// const app = express();
const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');
const app = express();
const strKey = '我是如来佛祖玉皇大帝观音菩萨指定取西经特派使者花果山水帘洞美猴王齐天大圣孙悟空';

//处理post提交
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
//静态资源处理
app.use( express.static(__dirname+'/web') );


//验证token
app.use(expressjwt({
    secret:strKey,
    algorithms:['HS256']
}).unless({
    path:['/login','/refresh']
}));

//处理错误
app.use((err,req,res,next)=>{
    // console.log(err.name);
    if(err.name=='UnauthorizedError'){
        return res.send({
            status:401,
            msg:'无效的token'
        });
    }
    res.send({
        status:500,
        msg:'未知错误'
    });
});


//登录
app.post('/login',(req,res)=>{
    let { tel,pwd } = req.body;
    //手机号正则表达式
    let reg = /^1[3-9]\d{9}$/;
    if(reg.test(tel)&&pwd=='111111'){
        //生成短token，请求接口使用的token
        let token = jwt.sign({tel,pwd},strKey,{ expiresIn:10 });
        //生成长token，刷新token使用
        let refreshToken = jwt.sign({tel,pwd},strKey,{ expiresIn:60*10 });

        res.send({
            msg:'登录成功',
            status:200,
            token,
            refreshToken
        });
    }
   
});


//刷新token
app.post('/refresh',(req,res)=>{
    let {refreshToken} = req.body;
    /*
    jwt.verify()方法，验证token是否有效
    第一个参数是要验证的token
    第二个参数是 生成token时候的密钥
    第三个参数是 回调函数
    
    回调函数两个参数
    第一个参数 err 代表token失效
    第二个参数 data 代表token有效
    */ 
    jwt.verify(refreshToken,strKey,(err,data)=>{
        if(err){
            res.send({
                status:403,
                msg:'refreshToken已过期,请重新登录'
            });
        }else{
            // console.log(data);
            let token = jwt.sign({tel:data.tel,pwd:data.pwd},strKey,{ expiresIn:10 });
            let refreshToken = jwt.sign({tel:data.tel,pwd:data.pwd},strKey,{ expiresIn:60*10 });

            res.send({
                msg:'更新token成功',
                status:200,
                token,
                refreshToken
            });
        }
    });
});

//测试接口
app.get('/aa',(req,res)=>{
    let obj = {
        msg:'接口请求成功',
        list:[1,2,3,4,54,5,67,7,8,0]
    };
    res.send(obj);
});







app.get('/getInfo',(req,res)=>{ 

    let obj={
        tit:'我是如来佛祖玉皇大帝观音菩萨指定取西经特派使者花果山水帘洞美猴王齐天大圣孙悟空',
        price:2999,
        count:1,
        src:[
       ' ./images/1.jpg',
       ' ./images/2.jpg',
       ' ./images/3.jpg',
        ]
    }
    res.send(obj)
})




app.listen(8080,()=>{
    console.log('服务启动成功');
});