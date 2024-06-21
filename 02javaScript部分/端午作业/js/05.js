let bar = document.querySelectorAll('.nav span');
for (let i = 0; i < bar.length; i++) {
  bar[i].addEventListener('click', function() {
    for (let j = 0; j < bar.length; j++) {
      bar[j].classList.remove('bar');
    }
    this.classList.add('bar');
  });
}
let btn = document.querySelectorAll('.ft li')
btn[0].addEventListener('click',function(){
    window.location.assign('1.html')
})