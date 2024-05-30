let back = document.getElementById('back')
let list = document.getElementById('list');
let arr2 =[
    {
    p1:'8-5-3静密封采购',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'邀请报价',

},
{

    p1:'电法兰管件询价表',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'邀请报价',

},
{
    p1:'电线电缆采购',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'公开询价',

},
{
    p1:'8-5-3静密封采购',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'邀请报价',

},
{

    p1:'电法兰管件询价表',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'邀请报价',

},
{
    p1:'电线电缆采购',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'公开询价',

},
{
    p1:'8-5-3静密封采购',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'邀请报价',
},
{

    p1:'电法兰管件询价表',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'邀请报价',
},
{
    p1:'电线电缆采购',
    p2:'山东胜星化工有限公司',
    p3:'2016/08/29',
    a1:'公开询价',
},
]
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
list.innerHTML = html2;

document.getElementById("back").addEventListener("click", function() {
window.history.back();
});