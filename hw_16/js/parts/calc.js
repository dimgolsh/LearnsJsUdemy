let calc = function(){
    //calculator 

  let persons = document.querySelectorAll('.counter-block-input')[0],
  restDays = document.querySelectorAll('.counter-block-input')[1],
  place = document.getElementById('select'),
  totalValue = document.getElementById('total'),
  personsSum  = 0,
  daySum = 0,
  total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function(){
    personsSum = +this.value;
    total = (daySum + personsSum) * 4000;

    if(restDays.value == '' || this.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }


  });
  restDays.addEventListener('change', function(){
    daySum = +this.value;
    total = (daySum + personsSum) * 4000;

    if(persons.value == '' || this.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }


  });

  place.addEventListener('change',function(){

    console.log(this.options);

    if(restDays.value == '' || persons.value ==''){
      totalValue.innerHTML = 0;
    }else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

}

module.exports = calc;