class User {
    constructor(name, id) {
        
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(this.name);
    }

    exit(){
        console.log('Ушел' + this.name);
    }
}

let Ivan = new User('Иван',1);
let Petya = new User('ПАетя',2);
Ivan.hello();
Petya.hello();