let names = ["Ivan", "stepa", "ksina", "voldemart", "ann"];

let shortNames = names.filter(name => {
  console.log(name);
  return name.length < 5;
});

console.log(shortNames);

//map

let answers = ["IvAn", "AnnA", "HeLLo"];

answers = answers.map(item => {
  return item.toLowerCase();
});

console.log(answers);

function fetchData(data, count = 0) {
  //count = count || 0;
  console.log(`Data ${data} ${count}`);
}
fetchData("something");

//rest operators
function max(a, b, ...numbers) {
  console.log(numbers);
}
max(3, 4, 5, 6, 7);

//spread operators
const arr1 = [1, 2, 4],
  arr2 = [34, 6, 7];

const res = Math.max(1, ...arr1, 4, 54, ...arr2);
console.log(res);

//
const avatar = 'Photo';
const user = {
  name: "default",
  pass: "qwerty",
  rights: "user"
};

const admin = {
  name: "admin",
  pass: "root"
};

const result = Object.assign({}, user, admin);
console.log(result);

const result2 = { ...user, ...admin , avatar};
console.log(result2);

//Es8 сокращенное название

const x = 25,
  y = 10;

const coords = {
  x, y, calcSq(){ console.log(this.x * this.y); }
};
//без сокращений объект

const coorsOriginal = {
    x: x,
    y: y,
    calcSq: function(){ console.log(this.x * this.y); }
}

coords.calcSq();
coorsOriginal.calcSq();

console.log(coords);



// Декструктуризация

const user = {
    name: {
      first: 'Sam',
      second: 'Smith'  
    },
    pass: "qwerty",
    rights: "user"
  };

  console.log(user.name);

  const {name: {first, second}, pass,rights } = user;


console.log( first, pass,  rights);


function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'
} ={}){

    console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect({
    host: 'localhost',
    port: 3000,
    user: 'default'
});

connect();

//const numbers = [3,4,6,7];

//const [a,,c] = numbers;

const numbers = [[3,4],[6,7]];
const [[a,b], [c,d]] = numbers;

console.log(a,b,c,d);


////
const country = {
    name: 'England',
    population: 2000,
    gender: {
        male: ['14%','49%'],
        female: ['aqq', '2222']
    }
};
const {gender: {male:[maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18,femAdult );

