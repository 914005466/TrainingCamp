const express = require('express')
const app = express();



/* 
Token 他是有服务器端产生的一串乱码字符串,产生时机是当客户端发送用户名密码登录请求的时候,服务端认证成功之后,会生成一个Token,并把Token返回给客户端,客户端收到Token之后,把Token存储起来,以后每次请求都带上Token,服务端验证Token的有效性,以确定用户的身份.如果把该Token放到数据表,则是一个永久性Token
Token的生成流程
1.在客户端发送用户名密码请求登录
2.服务端验证用户名密码是否正确
3.如果验证成功,则生成一个Token,并把Token返回给客户端
4.客户端收到Token之后,把Token存储起来,以后每次请求都带上Token
5.服务端验证Token的有效性,以确定用户的身份

jwt:
目前比较流行的一种json web token 的验证机制

在node 中使用 json web token 可以使用 express-jwt 模块来进行登录的token 认证
npm i jsonwebtoken express-jwt
jsonwebtoken 用来生成一个具有token的json类型字符串
express-jwt 作用是吧一个具有token的json类型字符串解析为json 对象
*/
const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');
//设置 secret 字符串,作为一个密钥,用于生成和验证token
const strKey = 'jiandangjie'


app.use(express.json())
app.use(express.urlencoded({ 
    extended: false 
}));


//静态资源管理
app.use(express.static(__dirname+'/web'));

//验证Token,使用express-jwt 模块将字符串解析为对象,他是一个中间件
app.use(expressjwt({
    secret:strKey,
    algorithms:['HS256']
}).unless({
    path:['/login']
}));

//错误处理中间件
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name == 'UnauthorizedError'){
        return res.send({
            status:401,
            msg:'无效的token'
        });
    }
    res.send({
        code:500,
        msg:'服务器内部错误'
    });
    
})
//登录接口
app.post('/login', (req, res) => {
    let { name, pwd } = req.body;
    //admin  111111

    if (name == 'admin' && pwd == '111111') {//验证用户名密码成功
        //生成token
        /* 
        jwt 的sign()方法 生成Token
        参数1 是用户的信息
        参数2 是设置的密钥
        参数3 是设置的过期时间,单位是秒,默认是1天
        */
        const token = jwt.sign({name,pwd},strKey,{expiresIn:'10m'})
        res.send({
            code:200,
            msg:'登陆成功',
            token
        })
    }
})

//获取数据接口
app.get('/getData',(req,res)=>{
    res.send({
        msg:'获取数据成功',
        data:[1,2,3,4,5,6,7,8,9]
    })
})

app.listen(3000, () => {
    console.log('服务启动成功');
})