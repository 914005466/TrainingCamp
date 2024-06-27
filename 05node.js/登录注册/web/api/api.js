//创建一个axios实例，全局的请求只需要使用一个axios实例即可

const api=axios.create({
    timeout:1000,
});

//请求拦截器,在请求即将发送到后台的时候，对请求数据进行最后一次处理
// 参数config即为请求数据的请求体,可以把Token在拦截器中，添加大到headers中，在请求
// 接口的时候不用刻意添加Token，因为在拦截器已经全局添加了Token
api.interceptors.request.use(config=>{
    let token = localStorage.getItem('token');
    if(!token){
        location.href='../login.html';
        return;
    }
    config.headers.Authorization = `Bearer ${token}`;
    // console.log(config);
    return config;
})

// 设置响应拦截器，在客户端接收到服务端发送数据的前一刻，执行该拦截器，对数据进行最后一次处理
// 参数res是数据响应对象，使用响应拦截器，制作token刷新效果
api.interceptors.response.use(async res=>{
    // console.log(res);    
    // res.data.msg='没有用的token'
    if(res.data.code===401){
        let refreshToken   = localStorage.getItem('refreshToken');
      await  api.post('/refresh',{refreshToken}).then(data=>{
           data.config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        })

        return await api(res.config);
    }else{
        if(res.data.token){
            localStorage.setItem('token',res.data.token);
        }
        if(res.data.refreshToken){
            localStorage.setItem('refreshToken',res.data.refreshToken);
    }
    return res;
}
    
 })