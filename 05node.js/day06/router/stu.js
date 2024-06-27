const express = require('express');
const router = express.Router();
const query = require('../query/query')

router.use(express.json());
router.use(express.urlencoded({ 
    extended: false 
}));

//注册
router.post('/reg',async (req,res)=>{
    let{name,pwd,tel,email} = req.body;
    let sql1 = 'select * from stu where name = ?';
   let nameMsg =  await query(sql1,[name]).then(data=>{
       return data;
    })
    if(nameMsg.length>0){
        return res.send({
            code:200,
            msg:'用户名已存在'
        })
    }

    console.log(nameMsg);
    let sql = 'INSERT INTO `stu` (`name`, `possword`, `phone`, `email`) VALUES (?,?,?,?)'
    await query(sql,[name,pwd,tel,email]).then(data=>{
    res.send({
        code:200,
        msg:'注册成功'
    })
   })
});


//登录
router.post('/login',(req,res)=>{
    let {name,pwd}=req.body;
    let sql = 'select * from stu where name = ? and possword = ?'
    query(sql,[name,pwd]).then(data=>{
        if(data.length>0){
            res.send({
                code:200,
                msg:'登录成功',
    })
}else{
    res.send({
        code:400,
        msg:'登录失败',
})
}
})
});










module.exports = router;