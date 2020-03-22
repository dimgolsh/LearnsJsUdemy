"use strict";
/* jshint node: true */

let money, time;

function start(){
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  while(isNaN(money) || money == "" || money == null){
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}


start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpense: function(){
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i = 0;
      }
    }
  },
  detectDayBudget: function(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    console.log(appData);
    alert(" Ваш бюджет на день " + parseInt(appData.moneyPerDay));
  },
  detectLevel: function(){
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function(){
    if (appData.savings == true){
      let money = +prompt("Сумма ваших накоплений");
      let percent  = +prompt("Под какой процент");
      appData.monthIcome = money/100/12*percent;
      alert ("Cумма ваших накоплений:" + appData.monthIcome);
    }
  },
  chooseOptExpenses: function(){
    for (let i = 1; i<=3; i++){
      let check = +prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = check;
    }
  },
  chooseIncome: function(){
 
      let items = '';
      items = prompt("Что принесет доп доход", '');
      debugger;
      while (items == null || items == '' || typeof items != 'string'){

        items = prompt("Что принесет доп доход", '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Mozhet choto eshe', ""));
        appData.income.sort();
      }
       
     /* while (typeof items == 'string' && items != null && items != ''){
        
      }*/
  
    }

};

appData.chooseIncome();


appData.income.forEach((item, i, arr)=> {
  console.log('Способы доп. заработка: ' + ++i + ':' + item);
});


for (let key in appData) {
  console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
}


/*
for ( let key in appData){
  console.log(key + '   ' + appData[key]);

}
*/

