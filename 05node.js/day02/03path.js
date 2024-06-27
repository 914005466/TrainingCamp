//处理路径的模块
let path = require('path');

//格式化路径
let str = './../aa/.s/././s./abc'

let path1 = path.normalize(str);
console.log(path1);

//文件路径拼接,并且规范输出
let path2 = path.join('../a/bc/./s','c/s/../sd')
console.log(path2);

//获取当前文件所在的绝对路径
console.log(__dirname);
let path3 = path.join(__dirname,'/03path.js')
console.log(path3);

//判断是否是绝对路径
let bol = path.isAbsolute('../abc/abc');
console.log(bol);
let bol2 = path.isAbsolute(__dirname);
console.log(bol2);

//把相对路径转化为绝对路径
let path4 = path.resolve('../abc/abc');
console.log(path4);

//计算两个相对路径之间的绝对路径
let path5 = path.relative('../abc/abc','../abc/a/b/c');
console.log(path5);

//判断当前文件所在的目录
let path6 = path.dirname(__dirname);
console.log(path6);

//获取文件信息
let path7 = path.basename('./doc/index.jpg')
console.log(path7);

//获取文件名,把文件的后缀名过滤掉
let path8 = path.basename('./doc/index.jpg','.jpg')
console.log(path8);

//获取文件的后缀名
let path9 = path.extname('./doc/index.jpg')
console.log(path9);

//把路径转换为对象
let obj = path.parse('./doc/index.jpg');
console.log(obj);

//把对象格式转化为路径
let obj2 = path.format(obj);
console.log(obj2);