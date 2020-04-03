function button() {
    return 'but';
}

class Slider {
    constructor(width,height,count){
        this.width = width;
        this.height = height;
        this.count = count;
    }

    nextSlide(){
        console.log('M');
    }
    prevSlide(){
        console.log('ee');
    }
    whoAmI(){
        console.log(this.width,this.height, this.count);
    }
}

class AutoSlider extends Slider {
    constructor(width,height,count, auto){
        super(width,height,count);
        this.auto = auto;

    }

    play(){
        console.log(`Attt ${this.auto}`);
    }
}

const slider = new AutoSlider(500,599,4,true);

slider.whoAmI();
slider.play();

export {button};

export default Slider;
