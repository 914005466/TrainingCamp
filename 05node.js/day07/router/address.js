const express = require('express');
const router = express.Router();
const query = require('../query/query')

router.use(express.json());
router.use(express.urlencoded({
    extended: false
}));


router.get('/list',(req,res)=>{
    let sql = 'select * from gouwu order by id desc';
    query(sql).then(data=>{
        res.send({
            code:200,
            msg:'请求列表成功',
            list:data,
        })
    })
})

router.post('/create',(req,res)=>{
    let {name,phone,address} = req.body;
        
    let sql = 'insert into gouwu (name,phone,address) values (?,?,?)';
    query(sql,[name,phone,address]).then(data=>{
        res.send({
            code:200,
            msg:'添加成功',
        })
        })
})

//修改默认值接口
router.get('/change/:id',(req,res)=>{
    let {id} = req.params;
    let sql = 'update gouwu set cd=CASE when id = ? then 1 else 0 end';
    query(sql,[id]).then(data=>{
        res.send({
            code:200,
            msg:'添加成功',
        })
        })
})

module.exports = router;  