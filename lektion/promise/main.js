let drink = 1;

function shoot(arrow, headshot, fail) {
  console.log("Dd");

  setTimeout(function() {
    Math.random() > 0.5 ? headshot({}) : fail("Dsss");
  }, 3000);
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
shoot(
  {},
  function(mark) {
    console.log("ddd");
    win(mark, buyBeer, giveMoney);
  },
  function(miss) {
    console.error(miss);
    loose();
  }
);
