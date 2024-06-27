/*
文件模块 fs
*/ 
let fs = require('fs');
//设置读取方法
/* 
对象模块的读取文件方法
readFile(读取文件的路径,读取文件的格式编码,读取后的回调函数)
回调函数 具有两个参数,
第一个参数是读取错误时候的错误信息
第二个参数是 读取成功后的内容
该方法是异步方法

如果读取文件非文本格式,;比如图片,音视频等媒体文件,则 读取文件的编码格式 参数可以省略
*/
let readFun = ()=>{
        fs.readFile('./doc/adc.txt','utf-8',(err,data)=>{
            if(err){
                console.log( err );
                return;
            }
            console.log(data);
        })
};
// readFun();
//同步读取方法
const txt = fs.readFileSync('./doc/adc.txt','utf-8');
console.log(txt);

//修改方法
let edit = ()=>{
    /* 
    修改文件内容方法
    writeFile()4个参数
    参数1:表示修改的文件地址
    参数2:修改的文件内容
    参数3:修改的配置,flag 有两个值 a 表示追加 w 表示覆盖
    参数4 : 回调函数,有一个参数,表示错误信息

    如果没有参数1表示的地址,则会首先创建一个地址,然后再把内容添加进去
    */
    fs.writeFile('./doc/aa.txt','金刚大战哥斯拉',{
        flag:'w'
    },err=>{
        if(err){
            console.log(err);
            return;
        }
    });
}
edit();

//复制
let copyFun = ()=>{
     fs.readFile("D:/Downloads/img/77b685fbgy1hq4xtflx07j25gv30a7wl.jpg",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        fs.writeFile('./doc/77b685fbgy1hq4xtflx07j25gv30a7wl.jpg',data,{
            flag:'w'
         }  ,err=>{
            if(err){
                console.log(err);
                return;
            }
        });
    })
   
};
copyFun();