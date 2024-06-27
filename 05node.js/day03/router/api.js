const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ 
    extended: false 
}));

router.post('/abc',(req,res)=>{
    let {name,age} = req.body;
    res.send({
        msg:'请求成功',
        data:{
            name,age
        },
    });
});

router.get('/ddd',(req,res)=>{
    res.send({msg:'请求成功'})
})
//导出路由对象
module.exports = router;