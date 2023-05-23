/*-------------------- 1) Function -----------------------------*/
console.clear();

function Selamla(ad){
    console.log(`Selam ${ad}`);
}
let x=Selamla("Fatma");
console.log(x);

/*--------------------- return ile -------------------------------*/
console.clear();

function Selamla(ad){
    return console.log(`Selam ${ad}`);
}

let y=Selamla("Ali");
y;

/*-------------------- 2) Expression Function -------------------------*/

const sayHello = function(name){
    return `Hi ${name}`
}
const greeting = sayHello("Tom");
console.log(greeting);

/*-----------------------3) ARROW FUNCTIONS------------------------ */
console.clear();
// const Merhaba = (ad) => {
//     return `Merhabalar ${ad}`
// }

// Arrow Fonksiyonunda tek satir icin retrun ve parantezlere gerek yok
const Merhaba = (ad) => `Merhabalar ${ad}` 


console.log(Merhaba("Ayhan"));
let a=Merhaba("Ali");
console.log(`${a} nasilsin?`);

// Iki sayinin toplami
console.clear();
const Topla = (a,b) => a+b;

console.log(Topla(5,null));

// Iki sayinin bölümü
const Bolum = (a,b) => a/b;

console.log(Bolum(16,4));

// Slindir hacmi
console.clear();

const Silindir = (r,h) => (Math.PI*(r**2)*h).toFixed(2);

console.log(Silindir(3,4));

// Ortanca Sayi Bulma 
console.clear();

const sayi = (a,b,c) => (c>a && c<b) ? `${c} sayisi ${a} ile ${b} arasindadir` : `${c} sayisi ${a} ile ${b} arasinda degildir`

console.log(sayi(2,10,3));

//------------------------
console.clear();

const tarih = new Date();
const saat = tarih.getHours();
const dakika = tarih.getMinutes();

const zaman = (saat,dakika) => `Saat ${saat}:${dakika}`
console.log(zaman(saat,dakika));

/* -------------------------------------------------------------------------- */
//! Rest Operatoru      ... 
// Arrow functionda rest operatoru
/* -------------------------------------------------------------------------- */
const goster=(...numbers) => console.log(numbers);

goster(3,4,7,89,45,34,23,56,78,90,34,43)

/* -------------------------------------------------------------------------- */
//! function declaration ve expression functionda arguments olarak kullanılır
/* -------------------------------------------------------------------------- */
const argumentsGoster = function(){
        console.log(arguments);
}

argumentsGoster(3,4,7,89,45,34,23,56,78,90,34,43)

//------------------------

// Kelvin yada Fahrenheit olarak girilen sıcaklı değerini celcius dönüştüren program. Virgülden sonra iki basamklı bir göstemle ile gösteriniz. 
// °F = °C × 1.8 + 32
// °C = (°F – 32) / 1.8
// °K = °C + 273.15
// °C = °K – 273.15

// Converter(345,"K")

// 345 K is equal to 71,85 C

// Converter(700,"F")

// 700 F is equal to 371,11 C

// 345C değeri 377 F eşittir

console.clear();

const Converter = (deger,cins) =>  cins==="K" ? `${Math.trunc(deger - 273.15)}C degeri ${deger}K esittir`  : `${Math.trunc((deger - 32)/1.8)}C degeri ${deger}F esittir`


console.log(Converter(700,"F"));




//------------------------ Ulke alani hesaplama

const kara = (ulke,alan) => `${ulke} Dünyanın %${Math.floor((alan / 14894000)*10)}'ini kaplamaktadır. Dünyanın kara kütlesi alanı 148.940.00` 

console.log(kara("Rusya",17098246));

console.clear();

//------------------------ Faktoriyel1

const fakt = (sayi) => {
    let sonuc=1;
    for (let i = 1; i <= sayi; i++) {
        sonuc *=i;  
    }
    return sonuc;
}
console.log(fakt(5));

//------------------------ Faktoriyel2

const fakt2 = (sayi) => {
    let sonuc=1;
    for (let i = sayi; i >0; i--) {
        sonuc *=i;     
    }
    return sonuc;
}
console.log(fakt2(5));

//---------------RECURSIVE FUNCTION - Özyinemeli Fonksiyonlar---------
console.clear();
function Factorial(n){
    if(n===1) return n;
    else{
        return n * Factorial(n-1);
    }
}
console.log(Factorial(5));
//------------------------ Fonksiyon icinde fonksiyon
console.clear();

function Toplam(n){
    if(n===1) return n;
    else{
        return n + Toplam(n-1);
    }
}
console.log(Toplam(100));

//------------------------
console.clear();

function Factorial(n){
    if(n===1) return n;
    else{
        return n * Factorial(n-1);
    }
}
console.log(Factorial(5));

//------------------------ Güne göre switch case ile bildirim
console.clear();



const hafta = () => {
    const time = new Date();
    const gun = time.getDay();
    let sonuc;
    switch(gun) {
        case 1:
            sonuc= `Sema bugün Cumartesi, haftasonu. Saat 9.00 da kakmalisin`
          break;
        case 0:
            sonuc=`Sema bugün Pazar, haftasonu. Saat 9.00 da kakmalisin`
          break;

        default:
            sonuc=`Sema bugün hafta ici, okul var. Saat 7.00 da kakmalisin`
      }
      return sonuc;
}
console.log(hafta());

console.clear();

const vergi = (urun,fiyat) => `${urun} ürünü fiyati: ${fiyat +=fiyat*0.18} TL`

console.log (vergi("Süpürge",3500));

//--------------------------------------------

console.clear();

function Toplam(n){
    let yy;
    if(n===1) {
         console.log("n:1",n);
    }
 

    else{
        yy = n + Toplam(n-1);
         console.log("n 1 degilse",yy);
    }
}
console.log(Toplam(10));
