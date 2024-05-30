let arr = [
    {
        conpany:' 江苏天化化工有限公司 ',
        img:'<img src="./images/06首页-产品订单/图层 1 拷贝 2.png" alt=""><img src="./images/06首页-产品订单/图层 2.png" alt=""><img src="./images/06首页-产品订单/图层 3.png" alt=""><img src="./images/06首页-产品订单/图层 4.png" alt="">',
        state:'完成',
        money:'5890'
    },
    {
        conpany:' 江苏天化化工有限公司 ',
        img:'<img src="./images/06首页-产品订单/图层 4.png" alt=""><img src="./images/06首页-产品订单/图层 5.png" alt=""><img src="./images/06首页-产品订单/图层 6.png" alt="">',
        state:'待支付',
        money:'5890'
    },
    {
        conpany:' 江苏天化化工有限公司 ',
        img:'<img src="./images/06首页-产品订单/图层 1 拷贝 2.png" alt=""><img src="./images/06首页-产品订单/图层 2.png" alt=""><img src="./images/06首页-产品订单/图层 3.png" alt=""><img src="./images/06首页-产品订单/图层 4.png" alt="">',
        state:'完成',
        money:'5890'
    },
]
let back = document.getElementById('back');
let tab = document.getElementById('tab').getElementsByTagName('span');
let list = document.getElementsByClassName('list');
let bar = document.getElementById('bar');
document.getElementById("back").addEventListener("click", function () {
    window.history.back();
});


for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = function () {
        bar.style.left = (i-1) * 12.8 + 'rem';
        for (let j = 0; j < tab.length; j++) {
            tab[j].className = '';
            // list[j].style.display = 'none';
        }
        tab[i].className = 'act';
        // list[i].style.display = 'block';
    }
}
let html1 = '';
for (let i = 0; i < arr.length; i++) {
    html1 += `
    <li>
    <div>
    <p>
      ${arr[i].conpany} 
      <span>></span> 
      <span>${arr[i].state}</span>
    </p>
    <p>${arr[i].img}</p>
    <p>共4件商品 实付款：￥${arr[i].money}</p>
    </div>
  </li>
`;
}
list[0].innerHTML = html1;