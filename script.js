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
  console.log(openBtn[i].textContent);
}
