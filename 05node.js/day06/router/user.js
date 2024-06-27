const express = require('express');
const router = express.Router();
const query = require('../query/query')



router.use(express.json());
router.use(express.urlencoded({
    extended:false
}));

router.get('/all',(req,res)=>{
    query('select * from user').then(data=>{
        res.send({
            code:200,
            msg:'查询成功',
            list:data
        })
    })
})
router.post('/add',(req,res)=>{
    let {name,age,sex,tel} = req.body;
    let aql = 'INSERT INTO `user`(`name`,`age`,`sex`,`tel`) VALUES(?,?,?,?)';
    query(aql,[name,age,sex,tel]).then(data=>{
        res.send({
            code:200,
            msg:'添加成功'
        })
   })
    })

router.get('/del/:id',(req,res)=>{
    let {id} = req.params;
    let aql = 'DELETE FROM `user` WHERE id=?';
    query(aql,[id]).then(data=>{
        res.send({
            code:200,
            msg:'删除成功'
        })
    })
    })
//修改
    router.get('/update/:id',(req,res)=>{
        let {id} = req.params;
        let sql = 'SELECT * FROM `user` WHERE id=?';
        query(sql,[id]).then(data=>{
            res.send({
                code:200,
                msg:'查询成功',
                data:data
            })
        })
        })
//提交修改
        router.post('/updates',(req,res)=>{
            let {id,name,age,sex,tel} = req.body;
            let sql = 'UPDATE `user` SET `name`=?,`age`=?,`sex`=?,`tel`=? WHERE id=?';
            query(sql,[name,age,sex,tel,id]).then(data=>{
                res.send({
                    code:200,
                    msg:'修改成功'
                })
            })
            })


router.get('/test',(req,res)=>{
    let { p,num } = req.query;
    let sql = 'SELECT * FROM user  LIMIT ?,?';
    query(sql,[(p - 1) * num,num - 0]).then(data=>{
        res.send({
            code:200,
            msg:'查询成功',
            list:data
        })
    })
});
//获取总条数
router.get('/count',(req,res)=>{
    let sql = 'SELECT COUNT(*)as total FROM user';
    query(sql).then(data=>{
        res.send({
            code:200,
            msg:'获取总条数',
            info:data
        })  
     })
    })






module.exports = router; // 导出路由