let back = document.getElementById('back');
document.getElementById("back").addEventListener("click", function () {
    window.history.back();
});
let arr = [
    {
        names:'阀门阀门阀门阀门阀门#f12',
        money:'5890',
        state:'确认报价',
    },
    {
        names:'无缝钢管采购',
        money:'5890',
        state:'待定',
    },
    {
        names:'无缝钢管采购',
        money:'5890',
        state:'待定',
    },
    {
        names:'阀门阀门阀门阀门阀门#f12',
        money:'5890',
        state:'确认报价',
    },
    {
        names:'无缝钢管采购',
        money:'5890',
        state:'待定',
    },
    {
        names:'无缝钢管采购',
        money:'5890',
        state:'待定',
    },
]
let box11 =document.getElementById('box11')
let html = '';
for (let i = 0; i < arr.length; i++) {
    html += `
    <div class="box1">
    <ul class="container">
        <li>
            <h2>${arr[i].names}</h2>
            <span></span>
        </li>
        <li>报价合计:
            <p>¥${arr[i].money}</p>
            报价状态:
            <p>${arr[i].state}</p>
        </li>
    </ul>
</div>
`;
}
box11.innerHTML = html;