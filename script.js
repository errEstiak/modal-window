'use strict';

//by selecting a class with multiple uses it will only effect on the first class 
// we need the querySelectorAll for this

const modalOpenBtn = document.querySelectorAll('.show-modal');
const modalCloseBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function(){
  console.log('button is clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for(let i=0; i < modalOpenBtn.length; i++){
  // console.log(modalOpenBtn[i]);
  // console.log(modalOpenBtn[i].textContent);
  modalOpenBtn[i].addEventListener('click', openModal);
}



// for(let i=0; i < modalOpenBtn.length; i++){
  // console.log(modalOpenBtn[i]);
  // console.log(modalOpenBtn[i].textContent);
  // modalOpenBtn[i].addEventListener('click', function(){
  //   console.log('button is clicked');
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  // })
// }

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

modalCloseBtn.addEventListener('click', closeModal);

// modalCloseBtn.addEventListener('click', function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// })


overlay.addEventListener('click', closeModal);  

// overlay.addEventListener('click', function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// })
