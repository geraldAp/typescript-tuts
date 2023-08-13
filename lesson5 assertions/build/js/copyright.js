"use strict";
// Original JS code
// const year = document.getElementById("year") 
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// 1st variation
// explicitly declaring the type of the variable that ts was inferring 
// let year :  HTMLElement | null //remember to use let
// year = document.getElementById("year") 
// // had a number were a string would have been so we specified it 
// let thisYear : string 
// thisYear = new Date().getFullYear().toString()
// if (year){
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }
// Second variation
// using the type assertion
const year = document.getElementById("year");
// had a number were a string would have been so we specified it 
const thisYear = new Date().getFullYear().toString();
year.textContent = thisYear;
