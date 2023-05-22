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

// Fonksiyonu bir defa yazıp defalarca kullanmak için  parametre alırlar
// Eğer bir fonksiyon parametre alıyorsa , o aldığı parametre,değeriyle ve  özellikleriyle gelir.

//?   function fonksiyonadi(parametre1,parametre2, ...){   Parametre yada argüman denir
//      yapılacak işlemler
//   return ile oluşturlan sonucu geri gönder
// 

console.clear();

function tamadi (adi,soyadi){
    return `tam adi: ${adi} ${soyadi}`;
}
console.log(tamadi("ali","veli"));


function fullname(firstname,lastname){
    let fullname=firstname+" "+lastname;
    console.log(fullname);
}

fullname("Ali","Veli");

console.clear();

function adi (adi){
    for (let i = 0; i < 5; i++) {
        console.log("Adi:",adi);
    }
}
adi("Ali");


console.clear();

function tamadi (adi,soyadi=""){  //! Varsayilan bir deger atanabilir...
    return `tam adi: ${adi} ${soyadi}`;
}
console.log(tamadi("ali"));
console.log(tamadi("ali","veli"));


