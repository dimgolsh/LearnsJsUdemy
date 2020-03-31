'use strict';

class Options {
    constructor( height, width, bg, fontSize, textAlign, text){

        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.text  = text;
    }

    createElement(){
        let element = document.createElement('div');
        element.textContent = this.text;
        element.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        font-size: ${this.fontSize};
        text-align: ${this.textAlign};
        background-color: ${this.bg};
        `;
        console.log(element);

        window.document.body.appendChild(element);
    }
}

let opt = new Options('200px','299px','red','15px','center','Привет каклайсы');
opt.createElement();