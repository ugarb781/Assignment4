//TEST CODE: not sure what happened but i'll try with template
// get elements from html document named by class
//var stem = document.getElementsByClassName('f-stem');
//var crossbar = document.getElementsByClassName('f-crossbar');
//var istem = document.getElementsByClassName('I-stem');
//var lstem = document.getElementsByClassName('L-stem');

//listens for click and performs function
//stem.addEventListener("click", ChangeCircleBg);

//function ChangeCircleBg(){
//  stem.style.backgroundColor = "red";
//}


el = document.getElementById('stem');
hook = document.getElementById('hook');
crossbar = document.getElementById('crossbar');
i = document.getElementById('I-stem');
l = document.getElementById('L-stem');
l2 = document.getElementById('L-stem2');
period = document.getElementById('period');

el.addEventListener("click", Animate1);
hook.addEventListener("click", Animate1);
crossbar.addEventListener("click", Animate1);
i.addEventListener("click", Animate1);
l.addEventListener("click", Animate1);
l2.addEventListener("click", Animate1);
period.addEventListener("click", Animate1);

el.addEventListener("mouseover", Animate2);
hook.addEventListener("mouseover", Animate2);
i.addEventListener("mouseover", Animate2);
l.addEventListener("mouseover", Animate2);
l2.addEventListener("mouseover", Animate2);




//fills in all letters
function Animate1(){
  el.style.backgroundColor = "black";
  hook.style.backgroundColor = "black";
  crossbar.style.backgroundColor = "black";
  i.style.backgroundColor = "black";
  l.style.backgroundColor = "black";
  l2.style.backgroundColor = "black";
  period.style.backgroundColor = "black";
  el.style.border = "0px solid black";
  hook.style.border = "0px solid black";
  crossbar.style.border = "0px solid black";
  i.style.border = "0px solid black";
  l.style.border = "0px solid black";
  l2.style.border = "0px solid black";
}

//outline letter shapes
function Animate2(){
  el.style.border = "1px solid black";
  hook.style.border = "1px solid black";
  crossbar.style.border = "1px solid black";
  i.style.border = "1px solid black";
  l.style.border = "1px solid black";
  l2.style.border = "1px solid black";
}
