//! ---------WHILE LOOP ----------

// For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirini yerine kullanılabilir

// genelde daha komplex bir şart durumu varsa o zaman kullanmak avantajlı olabilir

// while(Koşul) {
//      çalıştırılacak kodlar
//   }

// 1 den 10 a kadar olan sayilari yazdiran bir program
console.clear();

// let i=100;



// let number=100;

// while ( number>=100 && number <=200 ) {
//    number= prompt("100 - 200 arasında değer girin:")
// }
// console.log("100 ile 200 arasında bir değer girmediniz");

// Kullanıcıdan 1-100 arasında not girmesini isteyen
 // Farklı bir değer girerse 1-100 arasına not girene kadar zorlayan program

// let sayi =+prompt("1-100 arasi bir sayi giriniz:")


//     while(sayi<1 || sayi>100){
//          sayi=+prompt("Lütfen 1-100 arasi bir sayi giriniz:")
//     //    if (sayi<=50) break;
//     }
//  console.log("düsük bir puaniniz var");
// let x=0;
// while(x<10){
//     console.log(x);
//     x++;
//     if(x>8) break;
// }
console.clear();
// ODEV : Girilen sayının kaç basamaklı olduğunu bulan programı while loop ile yapınız 
//2346  sayısı 4 basamaklıdır

// let basamak =+prompt("sayiyi giriniz");
// let sayac=0;
// let sayi=basamak;

//  while(sayi>0){
//     sayac++;
//     sayi=Math.floor(sayi/10)
// }
// console.log(`${basamak} sayisi ${sayac} basamaklidir`);
console.clear();


// let random = Math.ceil(Math.random()*10);
// let sayi =+prompt("Lütfen 1-10 arasi bir sayi giriniz:")
// do{
//      sayi =+prompt(`:( Üzgünüm sayiyi bulamadiniz. Lütfen tekrar deneyiniz`)
// }while(random !==sayi)

// document.write(`:) Tebrikler sayiyi buldunuz... Dogru sayi: "${random}"`)



//? ödev

// 1- 0 girilene kadar girilen sayının pozitif mi negatif mi olduğunu yazan program
// 2- Kullanıcıdan bir kelime bir değer alıp aldığı değer kadar yazan program
// 3- Girilen değer 0,"",NaN ise ekrana false yazdıran,
// 1,"e" girilirse true yazdıran program

// 4- Girilen harfin sesli mi sessiz mi olduğunu yazan program

// e sesli harf
// p sessiz harf

//5- girilen değerlerin üçgen oluşturp oluşturamayacağını bulan program

// NOT: Üçgen olma şartı : iki kenar toplamı daima 3. keanrdan büyük olmal

//------------------1) Pozitif / Negatif -------------------

let sayi = +prompt("Lütfen bir sayi giriniz:");


while(sayi !== 0){

    (sayi > 0) ? console.log(`${sayi} => pozitif bir sayidir`) : console.log(`${sayi} => negatif bir sayidir`)

    sayi = +prompt("Tekrar bir sayi giriniz:");
}
console.log(`${sayi} girdiniz. ${sayi} => pozitif veya negatif degildir`);

//------------------2) Kelime Yazma ------------------------

let kelime = prompt("Lütfen bir kelime giriniz:");
let deger = +prompt("Kac defa yazilmasini istiyorsunuz?");

for(let i=0;i<deger;i++){
    console.log(`${i+1}) ${kelime}`);
}

//-------------------3) True / False ------------------------


let yaz = prompt(`Lütfen => 0,"",NaN, 1,"e" degerlerinden birini giriniz`);
(yaz == 0 || yaz == "" || yaz == NaN) ? console.log("false") : ((yaz == 1 || yaz == "e") ? console.log("true") : console.log(`Lütfen => 0,"",NaN, 1,"e" degerlerinden birini giriniz`)

)


//-------------------4) Sesli / Sessiz Harf ----------------

let harf = prompt("Lütfen bir harf giriniz:");

(harf== "a" || harf== "e" || harf== "i" || harf== "o" || harf== "ö" || harf== "ü" ) ? console.log(`${harf} => ünlü bir harftir`) : console.log(`${harf} => ünsüz bir harftir`)

//-------------------5) Ücgen Hesaplama --------------------

let kenar1 = +prompt("Lütfen 1.kenarin uzunlugunu giriniz:");
let kenar2 = +prompt("Lütfen 2.kenarin uzunlugunu giriniz:");
let kenar3 = +prompt("Lütfen 3.kenarin uzunlugunu giriniz:");

 ((kenar1 + kenar2) > kenar3 && (kenar3 + kenar2) > kenar1 
 && (kenar3 + kenar1) > kenar2 ) ? console.log("Bu bir ücgendir") : console.log("Bu bir ücgen degildir")