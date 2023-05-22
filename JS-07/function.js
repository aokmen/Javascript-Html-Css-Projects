/* -------------------------------------------------------------------------- */
/*                     //!  ********** FUNCTIONS *********                    */
/* -------------------------------------------------------------------------- */
//? Bir fonksiyon belirli bir görevi(tek bir görev için tek fonksiyon olması daha iyidir) gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir,
//? test etmesi kolaydır

//! * ----------------------------Declaration---------------------------------- */ 
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonsiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Deger göndermeden bütün islemleri fonksiyon icinde yapip bitirdigimiz fonksiyon

console.clear();

function topla(){
    let sum = 5+7;
    console.log(sum);
}
topla();

// 4 - Geriye bir deger döndermek icin 'return' kullanilir
// 5 return olmazsa undefined olur

console.clear();

function carp() {
    let mult=50*25;
    return mult;
}
console.log(carp());

function fark(){
    let sub=50-25;
    return sub;
}
let result = carp() + fark();
console.log(result);

/* -------------------PARAMERTE ALAN FONKSIYONLAR------------------ */

function sum (num1,num2) {  //Parametreler
    let sum=num1+num2;
    return sum;
}

console.log(sum(10,20));
console.log(sum(100,200));
console.log(sum(1000,2000));
console.log(sum(10000,20000));
