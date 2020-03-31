let drink = 0;

function shoot(arrow) {
  console.log("Dd");
  let promise = new Promise(function(resolve, reject){

    setTimeout(function() {
      Math.random() > 0.5 ? resolve({}) : reject("Dsss");
    }, 3000);

  });

  return promise;
  
}

function win() {
  console.log("Вы победели");
  drink == 1 ? buyBeer() : giveMoney();
}

function loose() {
  console.log("looh");
}
function buyBeer() {
  console.log("Vam pibo");
}
function giveMoney() {
  console.log("Moneeeey");
}
shoot({})
.then(mark => console.log('ff'))
.then(win)
.catch(loose)
