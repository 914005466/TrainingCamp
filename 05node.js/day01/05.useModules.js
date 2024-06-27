let obj = require('./04myModle');
//引入文件模块(自定义的模块叫文件模块),如果只引入文件名,则引入的文件中index.js 为文件夹的主模块
let myModle = require('myModle')
console.log( obj.aa );
obj.show('岳云鹏')
console.log( myModle.aa );
myModle.show('袁弘1')