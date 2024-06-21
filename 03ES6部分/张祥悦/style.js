let arr = [
    {
        src:'./image/儿童 副本 3.png',
        name:'李霞霞'
    },
    {
        src:'./image/pexels-photo-24257-large 副本 8.png',
        name:'张三'
    },
    {
        src:'./image/pexels-photo-largess 副本 3 拷贝.png',
        name:'李四'
    },
    {
        src:'./image/pexels-photo-24257-large 副本 8.png',
        name:'李四'
    },
    {
        src:'./image/儿童 副本 3.png',
        name:'王五'
    },
    {
        src:'./image/pexels-photo-24257-large 副本 8.png',
        name:'孙悟空'
    },
    {
        src:'./image/儿童 副本 3.png',
        name:'孙悟天'
    },
    {
        src:'./image/pexels-photo-24257-large 副本 8.png',
        name:'比克'
    },
    {
        src:'./image/pexels-photo-largess 副本 3 拷贝.png',
        name:'孙悟饭'
    },

    {
        src:'./image/儿童 副本 3.png',
        name:'弗利沙'
    },
    {
        src:'./image/男子 副本 3.png',
        name:'龟仙人'
    },
    {
        src:'./image/儿童 副本 3.png',
        name:'丽丽'
    },
    {
        src:'./image/男子 副本 3.png',
        name:'路飞'
    },
    {
        src:'./image/pexels-photo-24257-large 副本 8.png',
        name:'乔巴'
    },

]
let ul = document.querySelector('#list');
let right = document.querySelector('.right');
let html = '';
for (let i = 0; i < arr.length; i++) {
    html += `<li><img class="img" src="./image/wei.png" alt=""> <span class="select"><img src="${arr[i].src}" alt=""></span>${arr[i].name}</li>`;
}
ul.innerHTML = html;
// 获取第一个图片元素
let imageElements = document.querySelectorAll('li .img');


// 定义两个图片路径，用于切换
let imagePaths = [
    './image/wei.png',
    './image/xuanzhong.png'
];
let currentIndex = 0;
let html1 = '';
let list1 = document.querySelector('#list1');
for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % imagePaths.length;
        imageElements[i].src = imagePaths[currentIndex];
        
        if(currentIndex == 1){
            
            html1 +=` <li> <span><img src="${arr[i].src}" alt=""></span>${arr[i].name}<img class="aa" src="./image/cuo.png" alt=""></li>`
        }
        list1.innerHTML = html1;
    });
}

let span = document.querySelector(' .select img');
console.log(span);
let span_img = 0;
span.onclick = function() {
    if(span_img == 0){
        span_img = 1;
            for (let i = 0; i < imageElements.length; i++) {
                imageElements[i].src = './image/xuanzhong.png';
            }    
        span.src = './image/xuanzhong.png';
    }else{
        span_img = 0;
        for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = './image/wei.png';
        }   
        span.src = './image/wei.png';
    }
   
};



