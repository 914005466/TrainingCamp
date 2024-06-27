
const fs = require('fs');
//删除方法
/* 
unlink (要删除的文件地址,删除后的回调参数)
回调函数,具有参数error 代表执行错误的信息
unlinkSync(要删除的文件地址) 同步删除
*/
let remove = ()=>{
    //查看文件是否存在
    let bol = fs.existsSync('./doc/abc.txt');
   console.log(bol);
   if(!bol){
       console.log('文件不存在');
       return;
   }
    fs.unlink('./doc/abc.txt',err=>{
        if(err){
            console.log('删除失败');
        }else{
            console.log('删除成功');
        }
    })
};
// remove();
/*
mkdir(创建的目录地址,设置文件夹权限,回调函数)
回调函数的默认参数是错误处理对象

文件夹权限mode,该参数具有四位数
第一位表示二进制
第二位 代表的是 本用户权限
第三位 代表的是 组用户权限
第四位 代表的是 所有用户权限

数字1 代表的是执行权限
数字2 代表的是写入权限
数字4 代表的是读取权限
1+2+4 = 7
*/
let createDir = ()=>{
    fs.mkdir('./test','0777',err=>{
        if(err){
            console.log(err);
            return
        }
        console.log('创建成功');        
    });
};
// createDir();

//重命名文件夹
/* 
rename(要重命名的文件夹地址,重命名后的文件夹地址,回调函数)
如果文件夹中有文件夹则无法完成修改
如果文件夹中有文件
*/
let rename = ()=>{
    fs.rename('./test2','./test',err=>{
        if(err){
            console.log(err);
            return
        }
        console.log('重命名成功');
    })
}
// rename();


/* 
rmdir('删除的目录地址',回调函数)
删除目录,目录中必须为空,否则无法删除
*/
let del = ()=>{
    fs.rmdir('./doc',err=>{
        if(err){
            console.log(err);
            return
        }
        console.log('删除成功');
    })
    }
// del();

//读取目录
let readDir = ()=>{
    fs.readdir('./test',(err,arr)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(arr);
        for(let i=arr.length-1;i>=0;i--){
            fs.unlinkSync('./test/'+arr[i]);
        }
        fs.rmdir('./test',err=>{
            if(err){
                console.log(err);
                return
            }
            console.log('删除成功');    
        })
    });
};
readDir();

