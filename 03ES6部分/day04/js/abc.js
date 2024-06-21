//导出变量
export const userName = '张三';
//导出函数
export const Sum = (...arg)=>{
    let s = 0;
    //forEach方法遍历数组 
    arg.forEach(item => {
        s += item;
    });
    return s;
}
//导出类
export class Abc{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`我是${this.name},今年${this.age}岁.`);
    }
}