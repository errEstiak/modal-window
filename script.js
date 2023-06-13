'use strict';

//by selecting a class with multiple uses it will only effect on the first class 
// we need the querySelectorAll for this

const openBtn = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// console.log(openBtn);

for(let i=0; i < openBtn.length; i++){
  // console.log(openBtn[i]);
  // console.log(openBtn[i].textContent);
  openBtn[i].addEventListener('click', function(){
    console.log('button is clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
}

closeBtn.addEventListener('click', function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})
