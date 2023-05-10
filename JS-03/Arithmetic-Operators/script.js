console.clear();

//! -------------------ARITHMETIC OPERATORS--------------

let number1 = 85;
let number2 = 40;

console.log("Arithmetic Operators:");
//Addition - Toplama Islemi
console.log("Addition:", number1 + number2);
//Subtraction - Cikarma Islemi
console.log("Subtraction:", number1 - number2);
//Multiplication - Carpma Islemi
console.log("Multiplication:", number1 * number2);
//Division - Bölme Islemi
console.log("Division:", number1 / number2);
//Power - Üs Kare alma **
console.log("Power:", number1**3);
//Module - Mod alma , Kalan Bulma %
console.log("Modules:",number1%2);
// if (number1 % 2 === 1){
//     console.log("Bu bir tek sayidir");
// }
// else {
//     console.log("Bu sayi cift sayidir");
// }

// let hours = +prompt("Bu is kac saatte tamamlandi:") // + ifadesi string den number a dönüstürür
// let day = Math.trunc(hours / 24); // Math.trunc tam sayiyi aliyor, ondalikli kismi degil
// let remainder = hours % 24;
// console.log(`Bu is ${day} gün ${remainder} saatte tamamlandi`); 95


// ? ---------------INCREMENT - DECREMENT ---------------------

//num++ önce sayiyi yazar sonra sayiyi 1 arttirir
console.log(number1++);  //number1 = number1 + 1
console.log(number1);

//++num önce sayiyi yazar sonra sayiyi 1 arttirir
console.log(++number1);
console.log(number1);

console.log("decrement");
//num-- önce sayiyi yazar sonra sayiyi 1 azaltir
console.log(number1--);
console.log(number1);

//--num önce sayiyi yazar sonra sayiyi 1 azaltir
console.log(--number1);
console.log(number1);

// 3 basamaklı bir sayının sayı değerlerini bulan programı yazın
// 325    3 2 5  Sayı değerleri:3 2 5

const num=325

const birler=num % 10;
const onlar=(Math.trunc(num/10))%10
const yüzler=(Math.trunc(num/100))

console.log(`Sayı değerleri ${yüzler} ${onlar} ${birler}`);
