const express = require('express');
const router = express.Router();
const query = require('../query/query')

router.use(express.json());
router.use(express.urlencoded({ 
    extended: false 
}));
//查询
router.get('/res',(req,res)=>{
    let sql = 'select * from gouwu'
    query(sql).then(data=>{
        res.send({
            code:200,
            msg:'查询成功',
            list:data
        })
    })
})

router.post('/add',(req,res)=>{
    let {name,phone,address,cd} = req.body;
    let aql = 'INSERT INTO `gouwu`(`name`,`phone`,`address`,`cd`) VALUES(?,?,?,0)';
    query(aql,[name,phone,address,cd]).then(data=>{
        res.send({
            code:200,
            msg:'添加成功'
        })
   })
    })


module.exports = router;