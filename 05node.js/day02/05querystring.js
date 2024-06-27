/* 
    主要用来处理 形如 name = aa&age = 18&sex = 男 的数据

*/
let qs = require('querystring');
let str = 'name=悟空&age=18&sex=男&love=篮球&love=足球&love=乒乓球';
// 把字符串转换为对象
let obj = qs.parse(str);
console.log(obj);
console.log(obj.name);

// 把对象转换为字符串
let str2 = qs.stringify(obj);
console.log(str2);