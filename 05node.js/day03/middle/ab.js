const fun = (num)=>{
    //返回的是处理数据的中间件,因此在使用的时候需要app.use(fun(100))
    return(req,res,next)=>{
        req.num += num;
        next();
    }
}

module.exports = fun;