//创建一个axios 实例,全局的请求只需要使用一个axios实例即可
const api = axios.create({

});

//添加请求拦截器,在请求即将发送到后台的时候,对请求数据进行最后一次处理
/*
参数config 即为请求数据的请求体
可以把token 在拦截器中,添加到headers中,在请求接口的时候不用刻意添加token,因为在拦截器中已经全局添加了token
*/
api.interceptors.request.use(config => {
    let token = localStorage.getItem('token');
    if(token){
        location.href = '../login.html';
        return;
    }
    config.headers.Authorization = `Bearer ${token}`;
    // console.log(config);
    return config;
    
})
/* 
设置相应拦截器
在客户端接受到服务端发送的数据前一刻执行该拦截器,对数据相应进行最后一次处理
参数res是数据的响应对象

*/
api.interceptors.response.use(async response => {
    
    // console.log(response);
    // response.data.msg = '没有用的token';
    if(response.data.status === 401){
        let refreshToken = localStorage.getItem('refreshToken');
        await api.post('/refresh',{
            refreshToken
        }).then(data => {
            data.config.headers.Authorization = 'Bearer ' +localStorage.getItem('token');
        })
        //重新发起原请求
        return await api(response.config);
    }else{
        if(response.data.token){
            localStorage.setItem('token',response.data.token);
        }
        if(response.data.refreshToken){
            localStorage.setItem('refreshToken',response.data.refreshToken);
        }
    }
    return response;
})