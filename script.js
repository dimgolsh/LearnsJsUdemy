"use strict";
/* jshint node: true */

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    money: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false,
};

console.log(appData);

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer2 = prompt("Во сколько обойдется?", "");

appData.expenses.answer1 = answer2;

console.log(appData);

let oneDay =  appData.money / 30;

alert(" Ваш бюджет на день " + parseInt (oneDay));

console.log(oneDay);



/*
Сколько типов данных существует в JS?
num, string, obj, symbol, null, boolean, undefined 

Как вывести информацию в консоль?
consol.log(...)

Какая функция операторов || и &&?
ИЛИ (1,0) => true
И (1, 0) => false

*/ 