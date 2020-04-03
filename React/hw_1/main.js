let employers = ["Alex", "", "ludmila", "Viktor",  "",  "oleg", "iNna", "Ivan", "Alex", "Olga", "Ann"];

let employersNames = employers.filter(item => item.length > 0 && item.length != "").map(item => item.toLowerCase().trim());

let sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};

let calcCash = (own = 0, ...everyCash) => {
  let total = +own;
  everyCash.forEach(item => {
    total += +item;
  });
  return total;
}

let money = calcCash(1000, ...sponsors.cash);

const  makeBusiness = (owner, director = "Victor", cash, emp) => {
  let sumSponsors = [...sponsors.eu, ...sponsors.rus, "unexpected sponsor"];
  console.log(
    `We have a business. Owner: ${owner}, director: ${director}. Our budget:${cash}.And our employers:${emp}
    And we have a sponsors: ${sumSponsors} Note. Be careful with  ${sponsors.eu[0]} It's a huge risk.` );
}
makeBusiness("Sam", null, money, employersNames);
