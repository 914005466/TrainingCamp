export const url ='https://apis.tianapi.com'
export const aa = 'http://172.16.8.245:8080'
//分装fetch方法
export default class Api{
    //对get的封装
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })
    }
    //封装post
    post(url,obj){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(obj)
            }).then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        
    })
}
}