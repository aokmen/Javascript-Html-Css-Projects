/* -------------------------------------------------------------------------- */
//!                             EXPRESSION FUNCTION                           */
/* -------------------------------------------------------------------------- */

//! İsimsiz fonksiyondur
//! Bir değişkene atanan bir fonksyiondur. Bu nedenle bir dönüş değeri olmalıdır.
//! Parametre göndermek için değişken adını yazıp parantez içinde parametreler veriyoruz.

// const sum = function (num1,num2){
//     return num1+num2;
// }
// console.log("Islem sonucu: ",sum(40,50));


// console.clear();
// const sayi = function(num){
//     num%2===0 ? "Sayi cifttir" : "Sayi tektir"
//     return num
// }

// const sayi = function(num){
//     num%2===0 ? console.log("Sayi cifttir") : console.log("Sayi tektir")
// }


// sayi(13);

// sayi = function(a,b,c){

//     let max=a;

//     if(b>=a) {
//         max=b;
//         if(c>=b) {
//             max=c;
//         }
//     }  
// return max;
// }
// console.log(sayi(18,10,30));


// let maxSayi = function ( x, y, z){
    
//     let max = x;
//     if( y >= x){
//         max=y;
//         if(z>=y){
//             max = z;
//         }
//     }
//     return max;
// }

// console.log(maxSayi(20,8,10));

const Max = function(n1,n2,n3){
    let max=n1;
    if (n2>max) max=n2
    if (n3>max) max=n3
    return max;
}
console.log(Max(1,2,3));


//! Bir fonksiyon icinde baska fonksiyonda cagrilabilir

const add=function(num1,num2){
    return num1+num2;
}
const sub=function(num1,num2){
    return num1-num2;
}
const mult=function(num1,num2){
    return num1*num2;
}
const div=function(num1,num2){
    return num1/num2;
}

const compute=function(num1,num2){
    console.log(add(num1,num2));
    console.log(sub(num1,num2));
    console.log(mult(num1,num2));
    console.log(div(num1,num2));

}
compute(10,20);

console.clear();

//------------------------------------------------------------

function price(money){
    let cent = money.toFixed(2);
    return console.log(`$${cent}`);
}
price(3);

console.clear();
//------------------------------------------------------------

const sekil = function (deger, satir, sembol) {
  let star = "";
  let cizgi = "";
  for (let i = 0; i < deger; i++) {
    for (let j = 0; j < satir; j++) {
      star += sembol;
    }
    cizgi +="_"
    star += `\n`;
    if(i===deger-1) break;
    star += cizgi; 
  }
  return console.log(star);
};

sekil(5, 10, "*");

console.clear();
//------------------------------------------------------------
let tarih = new Date();
let yil = tarih.getFullYear();
const yas = function(yasYili){
    let sonuc = yil - yasYili;
    console.log(`ortalama ${sonuc} ömrünüz kaldı`)
    if (sonuc > 0 && sonuc < 10) return "Çocukluğunun tadını sonuna kadar çıkar";
    else if (sonuc < 20) return "Görmek istediğin yerleri keşfet";
    else if (sonuc < 30) return "Geleceğin için sağlam bir temel oluşturmaya odaklan";
    else if (sonuc < 40) return "iş ile kişisel hayat arasında denge kur";
    else if (sonuc < 50) return "Sağlığını ve iyilik halini önceliklendir. ";
    else if (sonuc < 60) return "Yeni zorluklara ve fırsatlara açık ol.";
    else if (sonuc < 70) return "Sevdiklerinle kaliteli zaman geçir ";
    else if (sonuc < 75) return "Fiziksel ve zihinsel olarak aktif olmaya devam et.";
    else return console.log("Yanlış bir deger girdiniz");
}
console.log(yas(1950));

console.clear();

let smb = "";

