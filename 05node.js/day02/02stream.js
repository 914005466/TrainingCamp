const fs = require('fs');

/* 
    流操作,主要用来操作比较大的文件
*/
//创建一个可读流
let rs = fs.createReadStream('D:/html/课堂录屏/8-函数的返回值.mp4');
//创建一个可写流
let ws = fs.createWriteStream('./doc/aa.MP4');

//把可读流写入可写流
rs.pipe(ws);

