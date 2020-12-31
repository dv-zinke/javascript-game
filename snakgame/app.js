document.addEventListener("DOMContentLoaded", ()=>{

   for(let i=0; i<99; i++){
      const parent = document.createElement("div");
      if(i === 45) parent.className = "apple";
      document.querySelector(".gird").appendChild(parent)
   }


   const squares = document.querySelectorAll(".grid div");
   const scoreDisplay = document.querySelector('span');
   const startBtn = document.querySelector('.start');

   const width = 10;
   let currentIndex = 0;
   let appleIndex = 0;
   let currentSnake = [2,1,0];

   let direction = 0;
   let score = 0;
   let speed = 0.9;
   let intervalTime = 0;
   let interval = 0;

   function control(e) {
      console.log("A");
      squares[currentIndex].classList.remove('snake');

      if(e.keyCode === 39){
         direction = 1;
      }else if(e.keyCode === 38){
         direction = -width;
      }else if(e.keyCode === 37){
         direction = -1;
      }else if(e.keyCode === 40){
         direction = +width;
      }
   }

   document.addEventListener('keyup', control);
});
