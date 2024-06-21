//添加cookie 的方法,参数为key ,value 和过期日期,过期日期是一个日期对象  
function addCookie(key,val,date){
    let now  = new Date();
    let s;
    //判断date是否是日期对象
    if(date instanceof now.constructor){
        // s = (date - now)/1000;
        s = parseInt( (date - now)/1000);
        // console.log(s);
    }else{
        //s=-1 表示该cookie不能创建
        s=-1;
    }
    document.cookie = `${key}=${val};max-age=${s}`
}

//通过key 获取cookie 对应的值,如果有key 则返回key的值,如果有则返回false
function getValue(key){
    //获取所有cookie
    let cookie = document.cookie;//name = 后裔;name1 = 后裔1;name2 = 后裔2
    console.log( cookie );
    let arr = cookie.split(';')//['name = 后裔','name1 = 后裔1','name2 = 后裔2']
    for(let i =0 ;i<arr.length;i++){
        //'name = 后裔'
        let a = arr[i].split('=');//['name','后裔']
        if(key == a[0].trim()){
            return a[1];
        }
    }
    return false;
}
//key 代表属性名

//根据key 删除cookie
function delCookie(key){
    addCookie(key,'',-1);
}
//清空所有cookie
function clearCookie(){
    let cookie = document.cookie;
    let arr = cookie.split(';')
    for(let i = 0 ;i<arr.length;i++){
        let a = arr[i].split('=');
        let k  = a[0].trim();
        delCookie(k);
        
    }

}
