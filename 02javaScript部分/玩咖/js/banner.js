let cont = document.getElementById('cont');
let pot = document.getElementById('pot');
let spans =pot.getElementsByTagName('span');
let timer;
let n =0;
// 设置分页器选中的下标
let index=0;
cont.innerHTML += cont.innerHTML;
cont.style.width = 6*75+'rem';
function move(){
    n--;
    cont.style.transform =  `translateX(${n}rem)`;
    // 临界值控制
    if(n<=-3*75){
        n=0;
    }
    if(n%75==0){
        clearInterval(timer);
       setTimeout(function (){
        timer=setInterval(move,10);
       },2000);
       index++;
       index>=3&&(index=0);
       for(let j=0;j<spans.length;j++){
            spans[j].className='';
        }
        spans[index].className='act';
}
}
timer=setInterval(move,10);
for(let i=0;i<spans.length;i++){
    spans[i].onclick = function(){
        for(let i=0;i<20;i++){
            clearInterval(i);
            clearTimeout(i);
        }
        for(let j=0;j<spans.length;j++){
            spans[j].className='';
        }
        this.className='act';
        cont.style.transform=`translateX(${-75*i}rem)`;
        
        //重置n的位置
        n=-75*i;
        index=i;
        //重新启动轮播
        setTimeout(function (){
        timer=setInterval(move,10);
       },2000);
        
    }
}