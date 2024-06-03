let btn = document.getElementById("submit");
let box = document.getElementById("box");
let text=document.querySelector('.text')
btn.addEventListener("click", function() {
  let input = document.getElementById("input");
  let value = input.value;
  if (value.length > 0) {
   box.style.display = "block";
   text.style.display = "none";
   input.style.display = "none";
   btn.style.display = "none";
  } 
});