//---------------DATA TYPES ---------------

//? ---------PRIMITIVE DATA TYPES----------

//! ---------NUMBER DATA TYPES----------
// Number : Tamsayilar ve ondalikli sayilari tutar.
console.clear();

const age=40;
const pi=3.14;
console.log(pi);
document.write("Pi number:",pi);

// MATH objesi  matematiksel işlemler için gerekli metodlar barındırır.
console.clear();

const dec=7.5;
let piValue=Math.PI;
console.log(piValue);

//Decimal (Ondalikli) bir sayinin ondalik kisimlari yuvarlama islemi

console.log(Math.round(dec));
console.log(Math.floor(dec));
console.log(Math.ceil(dec));

//.toFixed() ile ondalikli kisimdan kac basamagin akinacagini belirtir.
console.log(piValue.toFixed(2));
console.log(Math.max(2,-10,50,-99,90));
console.log(Math.min(2,-10,50,-99,90));

//random rasgele sayi
console.log(Math.random().toFixed(3));

let randomNumber = Math.random()*100;
console.log(randomNumber);
console.log(Math.round(randomNumber));

//farkli bir random number olusturdu.
console.log(Math.round(Math.random()*100));

//Pow: Bir sayinin kuvvetini (üssünü )almak icin kullanilir. Sayi ve kuvvet in degeri verilir.
console.log(Math.pow(2,8));

//sqrt: Bir sayinin karekökünü verir.
console.log(Math.sqrt(121));
console.clear();

//! ---------STRING DATA TYPES----------

let text1 = "world";
let text2 = 'World 2';
console.log(text1);
console.log(text2);

console.clear();

// String lerin her harfine ayri ayri bir dizi elemani olarak ulasilabilir.
// Herhangi bir elemana 0'dan baslayarak index numarasinin sirasini hersaplayarak ulasilabilir 
let text = "Javascript";
console.log(text[5]);

//String ler icinde asagidaki gibi dizi elemaninda bir degisiklik yapilamaz.
text[0]="x";
console.log(text);  //Javascript

//? Escape karakterlerinden tirnak icinde tirnak kullanmak icin \'
// \t   tab - 8 karakter bosluk birakir
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash

let text3 = 'Ben Javascript\'in özelligi'

console.log(text3);
let text4 = "Sen \nBen \n\t O"
console.log(text4);

console.clear();

//?  -------- String Birlestirme Islemleri-----

//1 + isareti ile birlestirme

let text5 = "Bu güzel günde Javascript ögrenmek ..";
let text6 = "Ne kadar güzel";
console.log(text5+text6 + " bir duygu");

//2 Concat metodu
console.log("Concat metodu ile birlestirme: "+text5.concat(text6));

//! Temlate Literal - String Template -ES&
//Backtrick `` iasreti kullanilir
let newText = `Personelimiz ${text1} ${text2} Firmamizda ${text3}`;

console.log(newText);
console.log(`Bu yazi
template
ile
asagiya indim`);

//! Metin Bicimlendirme
document.write( "<br> <b> <i> <h1>" + newText);

//! --------------BOOLEAN DATA TYPE------------

// true ya da false degerlerini tutar.

let isOpen=true;
let isSignup=false;
let isSmall=4<10;
console.log(isSmall);

// Truthy values
// sayilar, karakterler, isaretler ...

//Falsy Values
//0,-0,*0, Null(bos), Undefined, false , NaN

//! --------------UNDEFINED DATA TYPE------------
// Js de bir degiskenin turu ilk atanan degere gore belirleniyor. Ilk deger atanmadiginda degisken undefined olarak tanimlanir

let val;
console.log(val);
console.log(typeof val);
// eger deger göndermeyen bir fonksiyon undefined dönebilir

function example(){
    let sum=65+32;
    // return sum
}
console.log(example()); 

//! --------------NULL DATA TYPE------------
// bos bir degisken uretmek icin kullanilir

let empty=null;
console.log(typeof empty); //object


//?-----NONPRIMITIVE DATA TYPES (REFERENCE BASED)--------
//! -----------------ARRAY---------------
//Birden fazla deger tutabilen degiskenlere array(dizi) denir

let schoolNumber=85;

let schoolNumbers=[85,282,355,435,505,792];
console.log(schoolNumbers[4]);

//! -----------------OBJECT---------------

let obj={name:"Hellen",surname:"Mellen",age:"39"}
console.log(obj);
console.log(obj.surname);

//! -----------------FUNCTION---------------

function example(){
    let sum=65+32;
    return sum;
}
console.log(example());

//! ----------------TYPE CONVERSION--------------
//? AUTOMATICALLY TYPE CONVERSION

let val1=10;
let val2="30";
console.log(val1+val2);
console.log(val1-val2);
console.log(val1*val2);
console.log(val1/val2);

//? STRING TO NUMBER
// parseInt
//parseFloat

// let newVal1=parseInt(val2);
console.log(val1+parseInt(val2));

let decimal = "7.56263";
console.log(typeof parseFloat(decimal));

//? NUMBER TO STRING
//String()
//str.toString()
//Number

let birthday=17;
console.log(typeof String(birthday));

let birthday2=17;
console.log(typeof birthday2.toString());
console.log(Number(false));

console.clear();
//? ------------------Examples---------------------


console.log(Math.PI);
console.log(Math.floor(Math.PI));

console.log(Math.PI);
console.log(Math.PI.toFixed(4));

console.log(Math.max(4,5,6,-10,-20,20));
console.log(Math.min(4,5,6,-10,-20,20));

console.log(Math.round(Math.random()*100));

console.log(Math.pow(2,8));
console.log(Math.sqrt(121));

let jav= "Javascript";
console.log(jav[1]);

let sen = "sen ben o";
console.log(sen);

let sen2 = "sen \nben \n\to";
console.log(sen2);
console.log(sen.concat(sen2));
console.log(`first: + ${sen} + second: + ${sen2}`);

let exp = 3>10;
console.log(exp);

let son = "123";
console.log(typeof parseFloat(son));

let son1 = 123;
console.log(typeof Number(son1));

console.clear();
//! ---------DATA OBJECT------------------

const now = new Date();
console.log(now);
const year = now.getFullYear();
console.log(year);

//yas hesaplama
// let birthyear = +prompt("Dogum yilinizi girin:");
// console.log("Yasiniz:",year-birthyear);1985

const month=now.getMonth()
console.log(month); //Array Ocak:0 dan basliyor
const day=now.getDay() // Array pazar:0 dan basliyor
console.log(day);
const hour=now.getHours()
const minute=now.getMinutes()
console.log(`${hour}:${minute}`);


