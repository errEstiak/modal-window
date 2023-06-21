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


//we can add event globally by selecting
// => document.addEventListener

document.addEventListener('keydown', function(e){
  // console.log('key pressed');
  console.log(e);
  // console.log(e.key);
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    // if(!modal.classList.contains('hidden')){
      closeModal();
    // }
  }
})