document.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        form  = require('./parts/form'),
        slider = require('./parts/slider'),
        calc = require('./parts/calc');


    tabs();
    timer();
    modal();
    form();
    slider();
    calc();

})