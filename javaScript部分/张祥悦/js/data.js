let data = [
    {
        title:'初心如一/红玫瑰款 · 红玫瑰11枝',
        url:'../images/1.jpg',
        price:169,
        count:'2.23万',
        type:'人气推荐'
    },
    {
        title:'Love you · 红玫瑰14枝 香槟玫瑰5枝',
        url:'../images/2.jpg',
        price:236,
        count:6083,
        type:'2024新款'
    },
    {
        title:'<img src="../images/new_product_icon.png" alt=""> 美好温馨/鲜花抱抱桶 · 粉色百合2枝，粉玫瑰15枝，粉色康乃馨8枝，紫色紫罗兰6枝',
        url:'../images/3.jpg',
        price:396,
        count:587,
        type:'新款抱抱桶'
    },
    {
        title:'不变的承诺 · 99枝卡罗拉红玫瑰',
        url:'../images/4.jpg',
        price:520,
        count:'8.40万',
        type:'经典99枝特价'
    },
    {
        title:'绚烂极光/欧若拉玫瑰19枝 · 欧若拉玫瑰19枝',
        url:'../images/5.jpg',
        price:290,
        count:1409,
        type:'梦幻极光色'
    },
    {
        title:'星辰大海/33枝 · 碎冰蓝玫瑰33枝',
        url:'../images/6.jpg',
        price:298,
        count:4926,
        type:'人气推荐'
    },
    {
        title:'深情挚爱/33枝 · 卡罗拉玫瑰33枝',
        url:'../images/7.jpg',
        price:298,
        count:'2.27万',
        type:'人气推荐'
    },
    {
        title:'爱你四季/渐变彩虹花束-36枝 · 四种花材渐变搭配',
        url:'../images/8.jpg',
        price:359,
        count:1414,
        type:'高级彩虹渐变'
    },
    {
        title:'<img src="../images/new_product_icon.png" alt=""> 草莓mojito/19枝玫瑰款 · 骄傲白玫瑰19枝',
        url:'../images/9.jpg',
        price:269,
        count:457,
        type:'甜蜜之选'
    },
    {
        title:'用心爱你/99朵玫瑰 · 99枝：33枝粉玫瑰＋66枝卡罗拉红玫瑰',
        url:'../images/10.jpg',
        price:539,
        count:'83万',
        type:'畅销99枝玫瑰'
    },
    {
        title:'<img src="../images/new_product_icon.png" alt=""> 真心相伴 · 红玫瑰12枝、香槟玫瑰5枝、卡布奇诺玫瑰4枝',
        url:'../images/11.jpg',
        price:398,
        count:260,
        type:'520设计师款'
    },
    {
        title:'爱你/红玫瑰香水百合 · 卡罗拉红玫瑰11枝、白色香水百合2枝、尤加利叶10枝',
        url:'../images/12.jpg',
        price:212,
        count:'33万',
        type:'人气推荐'
    }
];
let show = document.querySelectorAll('.show')
let bar = document.querySelectorAll('.nav ul li');
for(let i=0;i<bar.length;i++){
    bar[i].onclick = function(){ 
    for(let j=0;j<bar.length;j++){
        bar[j].className=''
        show[j].style.display='none'
    }
    bar[i].className='bar'
    show[i].style.display='block'
} }

let list = document.querySelector('.list');
function showList(index){
    let html1 = '';
    for(let i=0;i<data.length;i++){
        html1 += `<li>
        <img src="${data[i].url}" alt="">
        <p> ${data[i].title} </p>
        <span>${data[i].type}</span>
        <p class="a">￥${data[i].price}</p>
        <span class="b">已销售${data[i].count}件</span>
    </li>`;
    }
    list.innerHTML = html1;
}

showList(10);
// 回到顶部
let h1 = document.documentElement.offsetHeight;
let h2 = document.documentElement.scrollTop+window.innerHeight;
let box2 = document.querySelector('.box2');
let toTop = document.querySelector('#toTop');
if(document.documentElement.scrollTop >10){
    toTop.style.display = 'block';
}
toTop.onclick = function() {
    // 获取当前位置
    let top = document.documentElement.scrollTop
    console.log(top);
    // 定时器
    let timer = setInterval(function() {
        top -= 50
        document.documentElement.scrollTop = top
        if(top <= 0) {
            // box2.style.display = 'none';
            clearInterval(timer)
        }
    },1)
}
