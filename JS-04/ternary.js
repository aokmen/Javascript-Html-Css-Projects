// let age=17;
// age >=18 ? (console.log("oy kullanabilirsin")) : (console.log("oy kullanamazsin"))

//tek cift

// let num=65;
 // num % 2 ? (console.log("tek sayi")) : (null)

// let message = num % 2 ? ("tek sayi") : ("cift sayi")

// console.log(message);

// let password = prompt("Please enter a password")
// let check = password === "12345?" ? ("You are allowed to enter") : ("You are not allowed to enter")
// console.log(check);

// let sayi = prompt("sayiyi giriniz");

// let sonuc = sayi > 0 ? ("pozitif") : ("negatif");

// console.log(sonuc);

// let sayi= -4

// let result = sayi>=0 ? ( sayi === 0 ? "sayı nötrdür" : "pozitif sayı" ):("negatiftir")

// console.log(result);

// let sayi1 = +prompt ("1.sayiyi giriniz");
// let sayi2 = +prompt ("2.sayiyi giriniz");
// let islem = prompt ("islemi giriniz");

// let sonuc = islem === "+" ? (sayi1+sayi2) : ( islem === "-" sayi1-sayi2 : "gecerli operator giriniz");
// console.log(sonuc);

// let sayi1 = +prompt("1. sayiyi giriniz:");
// let sayi2 = +prompt("2. sayiyi giriniz:");
// let operator = prompt("operatoru giriniz");

// let sonuc = operator === "+" ? (sayi1+sayi2):( operator === "-" ? sayi1-sayi2 : "gecerli bir operator giriniz") ;
// console.log(sonuc);


// //? -------------------- Harcama -------------------------

// let harcama = +prompt("Harcadiginiz miktari giriniz:");

// if (harcama % 10 === 0) {
//     console.log("Puaniniz: ", harcama*10);
// }
// else if (harcama % 5 === 0) {
//     console.log("Puaniniz: ", harcama*5);
// }

// else if (harcama % 4 === 0) {
//     console.log("Puaniniz: ", harcama*3);
// }
// else {
//     console.log("Puaninizda bir degisiklik yok");
// }

// //? -----------------Cöpe girilecek nesne-----------------

// let nesne = prompt("Lütfen bir nesne giriniz:");

// switch(nesne){
//     case "ekmek":
//         console.log(nesne + " => gida cöpüne");
//         break;
        
//     case "sise":
//          console.log(nesne + " => cam cöpüne");
//          break;
//     case "karton":
//         console.log(nesne + " => kagit cöpüne");
//          break;
//     default:{
//         console.log("Lütfen dogru bir nesne giriniz...");
//     }
// }

// //? -----------------Dart Puani-----------------

// let puan = +prompt("Dart üzerinde attiginiz noktayi rakam olarak yaziniz");

// let sonuc = puan >= 0 ? (console.log("Puaniniz:", puan)) : (console.log("Lütfen 0 veya sifirdan büyük bir rakam giriniz..."))

// //? -----------------Yaricap Puani-----------------

// let R = +prompt("Lütfen yaricapini giriniz:");

// if(R>10){
//     console.log("Puaniniz: 0");
// }
// else if(R <=10 && R>5){
//     console.log("Puaniniz: 1");
// }
// else if(R <=5 && R>1){
//     console.log("Puaniniz: 5");
// }
// else if(R <=1 && R>0){
//     console.log("Puaniniz: 10");
// }
// else {
//     console.log("Lütfen sifirdan büyük bir rakam giriniz...");
// }

// ? -------------Sevdiginiz Kitap Türü----------------

// let kitap = prompt("Sevdiginiz kitap türü");

// switch(kitap) {
//     case "Gizem" :
//         console.log("Önerimiz: Harry Potter");
//         break;
//     case "Roman" :
//         console.log("Önerimiz: Anna Karenina");
//         break;
//     case "Drama" :
//         console.log("Önerimiz: Sefiller - Victor Hugo");
//         break;
//     default : {
//         console.log("Lütfen -Gizem, Roman, Drama- kitap türünden birini seciniz...");
//     }
// }

// //? -------------Hava Durumuna Göre Kiyafet----------------

// let hava = prompt("Lütfen hava durumunu giriniz");

// switch(hava) {
//     case "yagmurlu":
//         console.log("Yagmurluk giyiniz.");
//         break;
//     case "karli":
//         console.log("Kislik mont giyiniz.");
//         break; 
//     case "günesli":
//         console.log("Tisört giyiniz.");
//          break; 
//     default:{
//         console.log("Lütfen hava durumunu dogru giriniz...");
//     }          
//  }

// //? --------------------Üyelik Girisi-----------------------

// let giris = prompt("Siteye üye misiniz?")

// let login = giris === "evet" ? ("Giris yapabilirsiniz") : (giris === "hayir" ? ("Lütfen üye olun...") : ("Lütfen evet veya hayir cevabi verin..."))
// console.log(login);

// //? --------------------Renk Karisimi-----------------------

// let renk1 = prompt("Lütfen 1. rengi giriniz:");
// let renk2 = prompt("Lütfen 2. rengi giriniz:");
// if ((renk1 == "mavi" || renk2 == "mavi") && (renk1 == "kirmizi" || renk2 == "kirmizi")) {
//     console.log("Olusan renk -Mor-");
// }

// else if ((renk1 == "sari" || renk2 == "sari") && (renk1 == "kirmizi" || renk2 == "kirmizi")) {
//     console.log("Olusan renk -Turuncu-");
// }
// else if ((renk1 == "sari" || renk2 == "sari") && (renk1 == "mavi" || renk2 == "mavi")) {
//     console.log("Olusan renk -Yesil-");
// }
// else {
//     console.log("Lütfen mavi,yesil,kirmizi renklerden birini secin...");
// }