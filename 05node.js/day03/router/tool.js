const express = require('express');
//创建路由对象

const router = express.Router();

router.get('/abc', (req, res) => {
    let obj = {
        msg:'服务请求成功',
        num:100
    };
    res.send(obj);
})

//导出路由对象
module.exports = router;