"use strict";
/* jshint node: true */

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

console.log(appData);

let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
b = prompt("Во сколько обойдется?", "");
console.log("done");
appData.expenses[a] = b;


appData.moneyPerDay = appData.budget / 30;

console.log(appData);

alert(" Ваш бюджет на день " + parseInt(appData.moneyPerDay));

/*
Сколько типов данных существует в JS?
num, string, obj, symbol, null, boolean, undefined 

Как вывести информацию в консоль?
consol.log(...)

Какая функция операторов || и &&?
ИЛИ (1,0) => true
И (1, 0) => false

*/
