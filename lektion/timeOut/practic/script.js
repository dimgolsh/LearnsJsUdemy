'use strict';

let deadline = '2020-03-25';

function timeRemaining(endtime){

    let date = Date.parse(endtime) - Date.parse(new Date()),
        minutes = Math.floor((date / 1000 /60) % 60) ,
        hours = Math.floor(date / (1000 * 60 *60 )),
        seconds = Math.floor((date/1000) % 60);
    
    return {
        'total': date,
        'm': minutes,
        's':seconds,
        'h': hours

    };

}

function setClock(id, endtime){

    let hours = document.querySelector('.hours'),
        min = document.querySelector('.minutes'),
        seconds  = document.querySelector('.seconds'),
        interval = setInterval(frame, 1000);
    
    function frame(){

        let t = timeRemaining(endtime);

        hours.textContent = t.h;
        seconds.textContent = t.s;
        min.textContent = t.m;

    }
}

let timer = document.querySelector('#timer');

setClock(timer, deadline);