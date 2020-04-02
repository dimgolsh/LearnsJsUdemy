//111111111111111111
let number = 1;
(function(){
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}());


console.log(number);

 //2222222222222

let user = (function(){
 let private = function(){
     console.log('I am private');
 };

 return {
     sayHell : function(){
         console.log('Hello wolr')
     }
 }
}());

console.log(user);
console.log(user.sayHell());

// 3

let user = (function(){
    let private = function(){
        console.log('I am private');
    };
   
    let  sayHell = function(){
        console.log('Hello wolr')
    }
    return {
        sayHell : sayHell
    }
   }());
   
   console.log(user);
   console.log(user.sayHell());