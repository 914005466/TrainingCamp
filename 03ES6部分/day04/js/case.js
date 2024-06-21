export default function() {
  console.log('Hello, ES6!');
}
export const Sum = (...arg)=>{
    let s = 0;
    //forEach方法遍历数组 
    arg.forEach(item => {
        s += item;
    });
    return s;
}