function User(name, age){
    this.name = name;
   // this.age = age;

    let userAge = age;
    this.say = function(){
        console.log(`Username ${this.name} ${this.age}`);
    };

    this.getAge = function(){
        return userAge;
    }

    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            userAge = age;
        } else {
            console.log('no ');
        }
    }
}

let ivan = new User('Ivane', 25);
console.log(ivan.age);
console.log(ivan.name);

console.log(ivan.getAge());

ivan.setAge(30);
console.log(ivan.getAge());


