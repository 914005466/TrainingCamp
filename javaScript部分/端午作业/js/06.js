let arr = [
    {
        URL:'./img/06/图层 17.png',
        names:'分最强打野英雄Tops5排行',

    },
    {
        URL:'./img/06/图层 18.png',
        names:'单排上分最强打野英雄Top s5排行',
        
    },
    {
        URL:'./img/06/图层 19.png',
        names:'版本单排上分最强打野英 雄Tops5排行',
        
    },
    {
        URL:'./img/06/图层 21.png',
        names:'本单排上分最强打野英雄T ops5排行',
        
    },
    {
        URL:'./img/06/图层 22.png',
        names:'本单排上分最强打野英雄T ops5排行',
        
    },
    {
        URL:'./img/06/图层 22.png',
        names:'本单排上分最强打野英雄T ops5排行',
        
    },
    {
        URL:'./img/06/图层 22.png',
        names:'本单排上分最强打野英雄T ops5排行',
        
    },
    {
        URL:'./img/06/图层 22.png',
        names:'本单排上分最强打野英雄T ops5排行',
        
    }
]
let box = document.querySelector('.box2')
let html = '';
for(let i=0;i<arr.length;i++){
    html += `<ul>
            <li><img src="${arr[i].URL}" alt=""></li>
            <li>
                <p>${arr[i].names}</p>
                <span>
                    更改时间：2012-2-12 
                </span>
            </li>
        </ul>`
}
box.innerHTML = html;    