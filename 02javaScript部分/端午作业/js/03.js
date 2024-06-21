let arr = [
    {
        name:'天涯明月刀',
        socre:'./img/03/图层 4.png',
        img:'./img/03/图层 3.png'
    },
    {
        name:'天天酷跑',
        socre:'./img/03/图层 11.png',
        img:'./img/03/图层 7.png'
    },
    {
        name:'英雄联盟',
        socre:'./img/03/图层 4.png',
        img:'./img/03/图层 5.png'
    },
    {
        name:'天涯明月刀',
        socre:'./img/03/图层 4.png',
        img:'./img/03/图层 6.png'
    },
    {
        name:'天涯明月刀',
        socre:'./img/03/图层 4.png',
        img:'./img/03/图层 7.png'
    },
    {
        name:'天涯明月刀',
        socre:'./img/03/图层 4.png',
        img:'./img/03/图层 3.png'
    },
    {
        name:'天涯明月刀',
        socre:'./img/03/图层 4.png',
        img:'./img/03/图层 3.png'
    },
    {
        name:'天涯明月刀',
        socre:'./img/03/图层 4.png',
        img:'./img/03/图层 3.png'
    },

]

let box = document.querySelector('.box')    
let html = ''
for(let i=0;i<arr.length;i++){
    html += `<ul>
            <li>
                <img src="${arr[i].img}" alt="">
            </li>
            <li>
                <h3>${arr[i].name}</h3>
                <span>游戏评级: <img src="${arr[i].socre}" alt=""></span>
            </li>
            <li>
                <button id="btn">关注</button>
            </li>
           </ul>`
}
box.innerHTML = html
// btn.addEventListener('click',function(){
    
// })
var btn = document.querySelectorAll('#btn')
for(let i=0;i<btn.length;i++){
    btn[i].onclick = function(){
        console.log(btn);
        console.log(this.innerHTML);
        this.innerHTML = '取消关注'
        this.style.background = '#fff'
        this.style.color = '#F56243'
        this.style.border = '1px solid #F56243'
    }
}
