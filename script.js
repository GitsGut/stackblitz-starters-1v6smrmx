console.log('Hello!');
const button = document.querySelectorAll('.button');
const body = document.querySelector("body");
// button[1].addEventListener('click',function(e)
// {
//   body.style.backgroundColor = e.target.id;
// })
 button.forEach(function (btn){
   btn.addEventListener('click',function(e)
   {
     body.style.backgroundColor = e.target.id;
   })
 })