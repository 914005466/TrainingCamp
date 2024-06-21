let wp = document.querySelector('.wp')
let game = document.querySelector('.game')
let audio = document.querySelectorAll('audio')
let start = document.querySelector('.start')
console.log(start);
//点击开始游戏
start.onclick = function() {
    wp.style.display = 'none';
    game.style.display = 'block';
    audio[0].play();//播放音乐
}