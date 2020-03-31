let user = {
name: 'Jonh'
};

function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user,['Smot']));

function count (number){

    return this * number;
}

let double = count.bind(3);

console.log(double(2));

function execute() {  
    'use strict'; // activate the strict mode
 
    function concat(str1, str2) {
      // the strict mode is enabled too
      console.log(this === undefined); // => true
      return str1 + str2;
    }
    // concat() is invoked as a function in strict mode
    // this in concat() is undefined
    console.log(concat('Hello', ' World!'));
 }
 
 execute();

 var numbers = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbers); // => true
      function calculate() {
        console.log(this === numbers); // => true
        return this.numberA + this.numberB;
      }
      // use .call() method to modify the context
      return calculate.call(this);
    }
 };
 console.log(numbers.sum()); // => 15