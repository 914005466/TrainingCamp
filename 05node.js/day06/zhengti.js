//封装一个整体函数
function $(ele) {
    return document.querySelector(ele);
}

// 随机数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 随机颜色
function randomColor() {
    let [r, g, b] = [random(0, 255), random(0, 255), random(0, 255)];
    return `rgba(${r},${g},${b},1)`
}

//数组去重
function unArr(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}


/* 
数组乱序
function randomArr(arr) {
    return arr.sort(function () {
        return Math.random() - 0.5;
    });
} */
//数组乱序 洗牌算法
function randomArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let n = random(0, arr.length - 1);
        [arr[n], arr[i]] = [arr[i], arr[n]];
    }
    return arr;
}

//冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // if (arr[j] > arr[j + 1]) {
            //     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            // }
            arr[j] > arr[j + 1] ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] : null;
        }
    }
    return arr;
}