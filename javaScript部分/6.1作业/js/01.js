let arr = [
    {
        img: './images/2.png',
        name: '山东东方华龙工贸集团牵手光采网成为合作伙伴',
        timer:'2016-08-29',
        type: 1
    },
    {
        p1:'8-5-3静密封采购',
        p2:'山东胜星化工有限公司',
        p3:'2016/08/29',
        a1:'邀请报价',
        type: 2
    },
    {
        img: './images/1.png',
 
        name: '创意【参展供应商show】光采网合作伙伴—成都一通密封股份...',
        timer:'2016-08-29',
        type: 1
    },
    {
        p1:'电线电缆采购',
        p2:'山东胜星化工有限公司',
        p3:'2016/08/29',
        a1:'邀请报价',
        type: 2
    },
    {
        img: './images/1.png',

        name: '创意【参展供应商show】光采网合作伙伴—成都一通密封股份...',
        timer:'2016-08-29',
        type: 1
    },
    {
        p1:'8-5-3静密封采购',
        p2:'山东胜星化工有限公司',
        p3:'2016/08/29',
        a1:'邀请报价',
        type: 2
    },
    {

        p1:'电法兰管件询价表',
        p2:'山东胜星化工有限公司',
        p3:'2016/08/29',
        a1:'邀请报价',
        type: 2
    },
    {
        p1:'电线电缆采购',
        p2:'山东胜星化工有限公司',
        p3:'2016/08/29',
        a1:'公开询价',
        type: 2
    },
    {

        p1:'电法兰管件询价表',
        p2:'山东胜星化工有限公司',
        p3:'2016/08/29',
        a1:'公开询价',
        type: 2
    },
    {
        img: './images/2.png',
 
        name: '创意【参展供应商show】光采网合作伙伴—成都一通密封股份...',
        timer:'2016-08-29',
        a1:'公开询价',
        type: 1
    },
    {
        img: './images/2.png',
 
        name: '创意【参展供应商show】光采网合作伙伴—成都一通密封股份...',
        timer:'2016-08-29',
        type: 1
    },
    {
        img: './images/2.png',
 
        name: '创意【参展供应商show】光采网合作伙伴—成都一通密封股份...',
        timer:'2016-08-29',
        type: 1
    }
];

let tab = document.getElementById('tab').getElementsByTagName('span');
let list = document.getElementsByClassName('list');


let arr1 = arr.filter(function (item) {
    return item.type == 1;
});
let arr2 = arr.filter(function (item) {
    return item.type == 2;
});

let html1 = '';
for (let i = 0; i < arr1.length; i++) {
    html1 += `
<li>
        <img src="${arr1[i].img}" alt="">
        <div>
            <h4>${arr1[i].name}</h4>
            <span class="timer">${arr1[i].timer}</span>
        </div>
    </li>
`;
}
list[0].innerHTML = html1;

let html2 = '';
for (let i = 0; i < arr2.length; i++) {
    html2 += `
    <li>
            <div class="box">
                <p>${arr2[i].p1}</p>
                <p>${arr2[i].p2}</p>
                <a href="">直采</a>
                <a href="">${arr2[i].a1}</a> 
            </div>  
            <div class="box1">
                <p class="p">${arr2[i].p3}</p>
                <a href=""><button>报价详情</button></a>
            </div>  
        </li>
`;
}
list[1].innerHTML = html2;

tab[0].onclick = function () {
    tab[1].className = '';
    this.className = 'bar';
    list[1].style.display = 'none';
    list[0].style.display = 'block';
};
tab[1].onclick = function () {
    tab[0].className = '';
    this.className = 'bar';
    list[0].style.display = 'none';
    list[1].style.display = 'block';
};