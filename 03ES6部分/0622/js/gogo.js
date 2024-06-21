let head_color = document.querySelectorAll('header li');
let top_color = document.querySelectorAll('.top p');
let bottom_color = document.querySelectorAll('.bottom p');

function changeColor(index) {
    // 将NodeList转换为数组
    let elements = Array.from(index);
    for (let i = 0; i < elements.length; i++) {
        elements[i].onclick = function() {
            // 重置所有元素的颜色
            elements.forEach(el => el.style.color = '#000');
            // 设置当前元素的颜色
            elements[i].style.color = '#ff647c';
        };
    }
}

changeColor(head_color);
changeColor(top_color);
changeColor(bottom_color);


