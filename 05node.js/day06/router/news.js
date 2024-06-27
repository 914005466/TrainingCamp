const express = require('express');
const router = express.Router();
const query = require('../query/query')

router.get('/list',(req,res)=>{
    let sql = 'select id,title from news'
    query(sql).then(data=>{
        res.send({
            code:200,
            msg:'查询成功',
            list:data
        })
    })
})

router.get('/detail/:id',(req,res)=>{
    let {id} = req.params;
    let sql = 'select * from news where id = ?'
    query(sql,[id]).then(data=>{
        res.send({
            code:200,
            msg:'获取内容成功',
            list:data        
        })
    })
})




module.exports =  router;// 导出router模块