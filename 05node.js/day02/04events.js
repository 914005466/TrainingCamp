/*
事件 模块
又称观察者模式，类似js中绑定
还可以称为发布订阅模式 类似js中的监听
*/
const events = require('events');
const util = require('util');

function Girl(name){
    this.name = name;
}
function Boy(name,res){
    this.name = name;
    this.res = res;
}

//util 主要是用来继承,让Girl继承events
util.inherits(Girl,events);
let xiaoqiao = new Girl('小乔');

let zhouyu = new Boy('周瑜',()=>{
    console.log('开心');
});
let caocao = new Boy('曹操',()=>{
    console.log('赤壁之战');
});

//绑定小乔的出嫁方法
xiaoqiao.on('chujia',zhouyu.res);
xiaoqiao.on('chujia',caocao.res);
xiaoqiao.addListener('chujia',()=>{
    console.log('魂归离恨天');
})
//删除绑定事件
xiaoqiao.removeListener('chujia',caocao.res);
/*
获取绑定出嫁事件的数量
*/
console.log(xiaoqiao.listenerCount('chujia'));

//removeAllListeners 删除所有绑定事件
xiaoqiao.removeAllListeners('chujia');

//真的出嫁了,主要触发chujia事件
xiaoqiao.emit('chujia');
