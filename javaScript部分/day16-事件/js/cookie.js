//添加cookie 的方法,参数为 key，value 和 过期日期，过期日期是一个日期对象
function addCookie(key,val,date){
    let now = new Date();
    let s;
    //判断date是否是日期对象
    if(date instanceof now.constructor){
        s = parseInt( (date - now)/1000 );
        // console.log(s);
        // s = date;
    }else{
        // s=-1 表示该cookie不能创建
        s = -1;
    }
    console.log(`${key}=${val};Max-Age=`+s );
    document.cookie = `${key}=${val};Max-Age=`+s;
    // document.cookie = `${key}=${val};expires=${s}`;
}

// 通过 key 获取 cookie对应的值，如果有key 则返回key的值，如果没有则返回false
function getValByKey(key){
    //获取所有cookie
    let cookie = document.cookie; //name=后羿; aa=后羿1; bb=后羿2
    console.log( cookie );
    let arr = cookie.split(';'); // [ 'name=后羿',' aa=后羿1',' bb=后羿2' ]
    for(let i=0;i<arr.length;i++){
        //'name=后羿'
        let a = arr[i].split('='); //['name','后羿']
        if(key == a[0].trim()){
            return a[1];
        }
    }

    return false;
}

//根据 key 删除 cookie
function delCookie(key){
    addCookie(key,'',-1);
}
//清空所有cookie
function clearCookie(){
    let cookie = document.cookie; 
    let arr = cookie.split(';');
    for(let i=0;i<arr.length;i++){
        let a = arr[i].split('=');
        let k = a[0].trim();
        delCookie(k);
    }
}
