// import {Sum} from './abc'
let userName = '司马昭'
function show(){
    console.log(userName);
}
let arr = ['司马昭','司马懿','司马连','司马璐','司马龙'];
// function show(){
//     let n  = Sum(12,23,412,4,1)
//     console.log(userName+n);
// }
//导出数据
export {userName,show,arr};

//默认导出,只能有一个默认导出
export default{name:'司马昭',age:28,sex:'男'}
