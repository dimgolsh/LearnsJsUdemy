"use strict";
/* jshint node: true */
// let timerId = setTimeout(sayHello, 3000);

// function sayHello(){
//     alert('heeel');
// }

// let timerId = setTimeout(function log() {
//     console.log("hello");
//     setTimeout(log, 2000);
//   });

let elem = document.querySelector(".box"),
  btn = document.querySelector(".btn");

function myAnimation() {
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.querySelector('button');

    btnBlock.addEventListener('click', function(event){
        if (event.target && event.target.matches('button.first')){
            console.log('hellll');
        }

        // if (event.target && event.target.tagName == 'BUTTON'){
        //     console.log('hellfffll');
        // }
        // if (event.target && event.target.tagName == 'BUTTON'){
        //     console.log('hellfffll');
        // }
    });
