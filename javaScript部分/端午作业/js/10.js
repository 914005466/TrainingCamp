let arr = [
    {
        URL:'./img/09/图层 10.png',
        names:'领取条件：连续签到25天',
        money:'10q币',
        btn:'超级火爆被抢光 '
    },
    {
        URL:'./img/09/图层 12.png',
        names:'领取条件：免费',
        money:'800元宝  600宝石',
        btn:'领 取 '
    },
    {
        URL:'./img/09/图层 13.png',
        names:'领取条件：连续签到25天',
        money:'10q币',
        btn:'超级火爆被抢光 '
    },
    {
        URL:'./img/09/图层 14.png',
        names:'领取条件：免费',
        money:'800元宝  600宝石',
        btn:'领 取 '
    },
    {
        URL:'./img/09/图层 10.png',
        names:'领取条件：连续签到25天',
        money:'10q币',
        btn:'超级火爆被抢光 '
    },
    {
        URL:'./img/09/图层 10.png',
        names:'领取条件：连续签到25天',
        money:'10q币',
        btn:'超级火爆被抢光 '
    },
    {
        URL:'./img/09/图层 10.png',
        names:'领取条件：连续签到25天',
        money:'10q币',
        btn:'超级火爆被抢光 '
    },
]
let gift = document.querySelector('.gift')
let html = ''
for(let i=0;i<arr.length;i++){
    html += `<li>
            <img src="${arr[i].URL}" alt="">
            <span>${arr[i].names}</span>
            <p>${arr[i].money}</p>
            <button>${arr[i].btn}</button>
        </li>`
}
gift.innerHTML = html
