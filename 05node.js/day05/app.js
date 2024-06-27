const express = require('express');
const app = express();
//引入封装的处理sql语句的模块
// const query = require('./query/query');
const query = require('./query/query.promise');

app.use(express.json());
app.use(express.urlencoded({ 
    extended: false 
}));
//静态资源管理器
app.use(express.static( __dirname +'/web'));
app.get('/all',(req,res)=>{
    let sql = 'SELECT * FROM `user`';
    query(sql).then(data=>{
        res.send({
            code:200,
            list:data
        });
    }).catch(err=>{
        res.send({
            code:400,
            err:err
        });
    })
})








//添加数据
app.post('/add',(req,res)=>{
    let {name,age,sex,tel } = req.body;
    let sql =  'INSERT INTO `new`.`user` (`name`, `age`, `sex`, `tel`) VALUES (?,?,?,?)';
    query(sql,[name,age,sex,tel]).then(data=>{
        res.send({
            code:200,
            msg:'添加成功',
            data:data
        });
    }).catch(err=>{
        res.send({
            code:400,
            err:err
        });
        })
})
//修改数据
app.get('/update/:id',(req,res)=>{
    let {id} = req.params;
    let sql = 'SELECT * FROM `user` WHERE `id` = ?';
    query(sql,[id]).then(data=>{
        res.send({
            code:200,
            msg:'查询成功',
            data:data
        });
    })
})
app.post('/updates',(req,res)=>{
    let {id,name,age,sex,tel } = req.body;
    let sql =  'UPDATE `user` SET `name` = ?, `age` = ?, `sex` = ?, `tel` = ? WHERE `id` = ?';
    query(sql,[name,age,sex,tel,id]).then(data=>{
        res.send({
            code:200,
            msg:'修改成功',
            data:data
        });
    })
})
//删除数据
app.get('/del/:id',(req,res)=>{
    let {id} = req.params;
    let sql = 'DELETE FROM `new`.`user` WHERE `id` = ?';
    query(sql,[id]).then(data=>{
        res.send({
            code:200,
            msg:'删除成功',
            data:data
        });
    })
})



app.listen(3000,()=>{
    console.log( '服务启动成功' );
});