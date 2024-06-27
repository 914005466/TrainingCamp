const express = require('express');
const router = express.Router();
const query = require('../query/query.promise');

//post中间件
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/login',(req,res)=>{
  let {email,pwd}=req.body;
  let sql='SELECT * FROM user WHERE email=? AND pwd=?';
  query(sql,[email,pwd]).then(data=>{
    if(data.length==0){
      res.send({
        code:400,
        msg:'用户名或密码错误'
      });
    }
    res.send({
      code:200,
      msg:'登录成功',
      data:data
    });
  })
})

router.get('/getData',(req,res)=>{
  let sql='SELECT * FROM music';
  query(sql).then(data=>{
    res.send({
      code:200,
      msg:'获取成功',
      data:data
    });
  })
})

router.post('/changePwd',(req,res)=>{
  let {oldPwd,newPwd}=req.body;
  let sql='UPDATE user SET pwd=? WHERE pwd=?';
  query(sql,[newPwd,oldPwd]).then(data=>{
    if(data.affectedRows==0){
      res.send({
        code:400,
        msg:'旧密码错误'
      });
    }
    res.send({
      code:200,
      msg:'修改成功'
    });
  })
})

//  获取音乐列表
router.get('/getMusicList', (req, res) => {
  let sql = 'SELECT * FROM `musicinfo`';
  query(sql).then(data => {
      res.send({
          code: 200,
          msg: '获取成功',
          data: data
      })
  })
})
//获取音乐详情
router.get('/getMusicDetail/:id', (req, res) => {
  let { id } = req.params;
  let sql = 'SELECT * FROM `musicinfo` WHERE `id`=?';
  query(sql, [id]).then(data => {
      if (data.length > 0) {
          res.send({
              code: 200,
              msg: '获取成功',
              data: data
          })
      } else {
          res.send({
              code: 400,
              msg: '没有该歌曲'
          })
      }
  })
})
//添加书签
router.post('/addShuqian', (req, res) => {
  let { id, name, author, img } = req.body;

  let sql = 'SELECT * FROM `musicinfo` WHERE `id`=?';
  query(sql, [id]).then(data => {
      if (data.length > 0) {

          let sql1 = 'INSERT INTO `shuqian` (`name`,`author`,`img`) VALUES (?,?,?)';
          query(sql1, [name, author, img]).then(data => {
              res.send({
                  code: 200,
                  msg: '添加成功'
              })
          })
      }

  });

})
//获取书签列表
router.get('/myBookmark', (req, res) => {
  let sql = 'SELECT * FROM `shuqian`';
  query(sql).then(data => {
      res.send({
          code: 200,
          msg: '获取成功',
          data: data
      })
  })
})
//删除书签
router.post('/deleteBookmark/:id', (req, res) => {
  let { id } = req.params;
  let sql = 'DELETE FROM `shuqian` WHERE `id`=?';
  query(sql, [id]).then(data => {
      if (data.affectedRows > 0) {
          res.send({
              code: 200,
              msg: '删除成功'
          })
      } else {
          res.send({
              code: 400,
              msg: '没有该书签'
          })
      }
  })
})
//提交评论
router.post('/addComment', (req, res) => {
  let { star1,star2,star3,comments } = req.body;
  let sql = 'INSERT INTO `comment` (`star1`,`star2`,`star3`,`comments`) VALUES (?,?,?,?)';
  query(sql, [star1,star2,star3,comments]).then(data => {
      res.send({
          code: 200,
          msg: '评论成功'
      })
  })
})
//获取评论列表
router.get('/getCommentList', (req, res) => {
  let sql = 'SELECT * FROM `comment`';
  query(sql).then(data => {
      res.send({
          code: 200,
          msg: '获取成功',
          data: data
      })
  })
})

module.exports = router;