"use strict";
/* jshint node: true */

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

    btn[0].addEventListener('click',function(event){
        console.log('Event' + event.type + 'on element' + event.target);
    });

    wrap.addEventListener('click',function(event){
        console.log('Event' + event.type + 'on element' + event.target);
    });


    link.addEventListener('click',function(event){
        event.preventDefault();
        console.log('Event' + event.type + 'on element' + event.target);
    });

    btn.forEach(function(item){
        item.addEventListener('mouseleave',function(event){
            console.log(event.target);
        });
    });