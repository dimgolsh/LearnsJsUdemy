"use strict";
/* jshint node: true */

let start = document.querySelector("#start"),
  budgetValue = document.querySelector(".budget-value"),
  daybudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  optionalexpensesValue = document.querySelector(".optionalexpenses"),
  incomeValue = document.querySelector(".income-value"),
  monthsavingsValue = document.querySelector(".monthsavings-value"),
  yearsavingsValue = document.querySelector("yearsavings-value");

let expensesInputs = document.querySelectorAll(".expenses-item"),
  optionalexpenses = document.querySelectorAll(".optionalexpenses");

let countBudgetBtn = document.querySelector(".count-budget-btn"),
  expensesItemBtn = document.querySelector(".expenses-item-btn");

let checkboxSavings = document.querySelector("#savings"),
  chooseIncome = document.querySelector(".choose-income"),
  chooseSum = document.querySelector("#sum"),
  choosePercent = document.querySelector("#percent"),
  yearValue = document.querySelector("year-value"),
  monthValue = document.querySelector("month-value"),
  dayValue = document.querySelector("day-value");
