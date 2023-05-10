//! *********** COMPARISON OPERATORS**************

// Ilkel veri türlerine göre karsilastirma
console.clear();

let numOne=3;
let numTwo="3";
console.log(numOne==numTwo); // "==" ifadesi Sayinin degerine, denkligine bakiyor, veri türüne bakmiyor.

console.log(numOne===numTwo); // "===" ifadesi Sayinin veri türüne göre degerine bakiyor, denkligine bakmiyor.
let num3="5";
let num4=5;
console.log(num3==num4); //True
console.log(num3===num4); //false

let num5="five";
let num6=5;
console.log(num5==num6); //false
console.log(num5===num6); //false

let lang1="Phyton";
let lang2="Phyton";

console.log(lang1==lang2); //true
console.log(lang1===lang2); //true

//? != denk degil

let x=5;
let y="5";
console.log(x!=y); // "Denk degil?" degil mi / veya denk degildir=> Hayir denktir //Denk degilse // False
console.log(x!==y); // "Esit degil?" degil mi / veya esit degildir, evet esit degil. Esit degilse // True

//? <>= büyüktür kücüktür
console.log("--------------büyüktür kücüktür--------");
console.log(5 > 4); //true
console.log(5 < 4); //false
console.log(5 >= 5); //true
console.log(5 >= "5"); //true //denktir karsilastimasinda büyüktür kücüktür oluyor