let nav = document.querySelector('.nav');
let nav_1 = document.querySelector('.nav-1');
let nav_span = document.querySelectorAll('.nav span');
let nav_p = document.querySelectorAll('.nav-1 p');
let nav_1_1 = document.querySelector('.nav-1-1');
let nav_1_1_div = document.querySelectorAll('.nav-1-1 div');
for(let i=0;i<nav_span.length;i++){
    nav_span[i].onclick = function(){
        for(let j=0;j<nav_span.length;j++){
            nav_span[j].className = '';
        }
        this.className = 'active';
    }
}
for(let i=0;i<nav_p.length;i++){
    nav_p[i].onclick = function(){
        for(let j=0;j<nav_p.length;j++){
            nav_p[j].className = '';
            nav_1_1.className = '';
        }
        this.className = 'active';
        nav_1_1.style.display = 'block';
        nav_1_1.className = 'nav-1-1';
        nav_1_1.onmouseover = function(){   
        nav_1_1.style.display = 'block'; 
       }
        nav_1_1.onmouseout = function(){   
        nav_1_1.style.display = 'none'; 
       }
    }
}
for(let i=0;i<nav_1_1_div.length;i++){
    nav_1_1_div[i].onclick = function(){
        for(let j=0;j<nav_1_1_div.length;j++){
            nav_1_1_div[j].className = '';
        }
        this.className = 'active';

    }
}
nav_span[8].onmouseover = function(){
    nav_1.style.display = 'block';
    
}
nav_span[8].onmouseout = function(){
    nav_1.style.display = 'none';
}


//轮播
var mySwiper = new Swiper('.aa', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
    grid: {
        fill: 'column',
        rows: 1,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
var sp2 = new Swiper('.bb', {
loop: true,
autoplay: true,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
}
});
var sp3 = new Swiper('.dd', {
slidesPerView: 'auto',
spaceBetween: 15,
loop: true,
autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false
},
navigation: {
    nextEl: '.pt .swiper-button-next',
    prevEl: '.pt .swiper-button-prev',
}
});