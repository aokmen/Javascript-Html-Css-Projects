//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar

// let urun = prompt("Lütfen bir ürün giriniz");
// let fiyat;

// switch(urun){
//     case "kalem":
//         fiyat="kalem 5$";
//     break;
//     case "defter":
//         fiyat="defter 10$";
//     break;
//     default:{
//         console.log("gecerli bir urun girin");
//     }
// }
// console.log(fiyat);


// let date = new Date().getDay()
// let day;
// console.log(date);

// switch (date<4) {
//     case 0:
//         day="Pazar";
//         break;
//     case 1:
//         day="Pazartesi";
//         break;
//     case 2:
//         day="Sali";
//         break;
//     case 3:
//         day="Carsamba";
//         break;
//     case 4:
//         day="Persembe";
//         break;
//     case 5:
//         day="Cuma";
//         break;
//     case 6:
//         day="Cumartesi";
//         break;
//     default:{
//         console.log("gecerli bir gün girin");
//     }
// }
// console.log(day);
// let kidem=prompt("lutfen kidem giriniz");
// let promos;
// switch (kidem) {
//     case "prof":
//         promos = "1000$"
//         break;
//     case "senior":
//         promos = "1000$"
//         break;
//     case "junior":
//          promos = "1000$"
//         break;
//    default:{
//     console.log("promosyon yok");
//    } 
// }
// document.write(promos);

let maas= 1000;
let kidem = prompt("personelin kidemini giriniz:");
let promosyon;

switch (kidem) {
  case "prof": 
  {
    promosyon = maas+1000;
    console.log(promosyon);
    break;
  }   
    
  case "senior":
    {
        promosyon = maas+700;
        console.log(promosyon);
        break;
      } 
  case "junior":
     {
        promosyon = maas+300;
        console.log(promosyon);
        break;
     }
  default: {
    console.log("100$");
  }
}