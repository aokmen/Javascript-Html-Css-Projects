//---------------------------------------ARRAY-------------------------------------

// Primitive değişkenler tek bir değer tutarken Arrayler birden fazla değer tutabilir.

//? Tutulan her bir değerin bir index numarası vardır. => 0 dan başlar

// 1.Yöntem
const empty=[];
const names=["Su","Deniz","Irmak","Nehir"];

// 2.Yöntem
console.log(names);
const numbers = new Array(10); // bir deger girilirse dizinin eleman sayisini verir.
console.log(numbers);
const numbers2 = new Array(10,3,5); // 3 deger dizisi verir. [10,3,5]
console.log(numbers2);
const numbers1=Array.of(5,4,3,2,1)
// 3.Yöntem
 // 5 deger dizisi verir. [5,4,3,2,1]
console.log(numbers1);

//------------------------------Array(Dizi)den Veri Okuma------------------------------

// index numarasi ile ulasilabilir. 0 dan basliyor.



let sum=0;
for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}
console.log(sum);


//--------------------------Array(Dizi)ye Veri Yazma-Eklme -----------------------------

names[3]="Selale";
console.log(names);
names[names.length]="Göl";
console.log(names);
names[names.length]="Dere";
console.log(names);


//! dizi const ile tanımlansada içindeki veriler değiştirelbilir.
//! diziler primitive dğil non-primitive değişkenlerdir. Bu nedenle bir dizi ismine birde referans numarlarına sahiptir.Bu referanslar ile o değerlere ulaşılır.
//! bigisayarda dizinin adı  dizi bir stack alanında tutarken içindeki veriler heap denilen bir alanda tutulur.
//! Bu nedenle const sadece stack alanında tutulan ismin değişmesini engeller

const ages=[30,45,48];
const people=["Henry","Dewy",3,56.60,new Date().getFullYear(),true,ages]
console.log(people);
console.log(people[6][0]);  //30
console.log(++people[6][0]); //31
console.log(people[6]); // 30 yerine 31 oldu  // 31,45,48
console.log(people[2]+people[3]);
people[6][0] = "deger degisti";
console.log(people[6])


//? -------------------------------------------------------------------------- */
//?           Array(Dizi) Degistiren Metodlar (Mutator)                        */
//? -------------------------------------------------------------------------- */

// Bazı metodlar kalıcı değişiklik yapmazken bazıları kalıcı değişiklik yapar
// pop
// push
// reverse
// shift
// unshift
// sort 
// splice
/* -------------------------------------------------------------------------- */
/*                        pop() dizide son eleman siler                       */
/* -------------------------------------------------------------------------- */

console.log(names);
names.pop();
console.log(names);

/* -------------------------------------------------------------------------- */
/*                 push() dizinin sonuna yeni bir eleman ekler                */
/* -------------------------------------------------------------------------- */

// Dizinin eleman sayisini sabitler, dondurur.

const cars=["BMW","Mercedes","Toyota","Fiat"];
console.log(cars);
cars.push("Togg");
console.log(cars);

cars.push("Opel"); // Bu degeri Honda olarak degistirirsem Opel yerine yaziliyor
console.log(cars);

// let text=[];
// for (let i = 0; i < 5; i++) {
//      let text1= prompt("Kullanici adini giriniz:");  
//      text.push(text1);
// }
// console.log(text);

/* -------------------------------------------------------------------------- */
/*      //! shift ve Unshift metodlari ile bastan silme ve ekleme yapilir     */
/* -------------------------------------------------------------------------- */

//! shift
cars.shift();  //dizinin elemanini [0] bastan siliyor.
console.log(cars);

//!umshift  
cars.unshift("Honda") //dizinin elemanini [0] bastan ekliyor.
console.log(cars);

/* -------------------------------------------------------------------------- */
/*                                  splice()                                  */
/* -------------------------------------------------------------------------- */

//? Splice 3 parametre alir
//? 1. parametre: ekleme yapilacak adres(indis numarasi) belirtir.
//? 2. parametre: 0 ya da 1 degeri alir: 0 ise araya ekleme yapar - o indisdeki degeri silmez. Eger 1 ise o indisdeki degeri silip üzerine yazar.
//? 3.parametre: yeni eklenecek deger ya da degerler yazar.

cars.splice(2,0,"Volkswagen");
console.log(cars);

cars.splice(2,1,"Volvo");
console.log(cars);

/* -------------------------------------------------------------------------- */
/*                                  Reverse()                                 */
/* -------------------------------------------------------------------------- */

// Bir Array in elemanlarini tersten yazdirir. Kalici bir degisikliktir.


console.log(cars.reverse());
console.log(cars);

/* -------------------------------------------------------------------------- */
/*                                   sort()                                   */
/* -------------------------------------------------------------------------- */

// diziyi alfabetik olarak siralar.
//sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonu dizinin her bir eleamanına uygular. Bu sayede küçük sayılar ile büyük sayılar yer değiştirerek sıralama işlemi gerçekeşir.

const numberList=[23,45,12,1,46,78,21,101];
numberList.sort();
console.log(numberList);

let numbers3=[2,3,22,1,5,7,6];  // [1, 2, 22, 3, 5, 6, 7] sayilarda kücükten büyüge degil alfabetik siralamasi yapiyor

console.log(numbers3.sort((a,b)=>a-b)); // sayilari kücükten büyüge siralar
console.log(numbers3.sort((a,b)=>b-a)); // sayilari büyükten kücüge siralar
numbers3.sort((a,b)=>a-b);
console.log(numbers3); // [1, 2, 3, 5, 6, 7, 22] (a,b)=>a-b) fonksiyonu ile sayisal olarakk kücükten büyüge siralar

let med = numbers3[Math.trunc(numbers3.length/2)];
console.log(med);

let numbers4=[2,3,22,1,5,7,6,10];
console.log(numbers4);
// dizinin cift sayida toplam eleman sayisinin ortancasini bulma
numbers4.sort((a,b)=>a-b);
console.log(numbers4);

let x=numbers4.length/2;
console.log(x);
let result = numbers4[x-1]+numbers4[x];
console.log(result/2);



let list = [2,3,22,1,5,7,6,10];
const ortalama = (list) => {
    sum=0;
    for (let i = 0; i < list.length; i++) sum +=list[i]
    return result = sum/(list.length);
}
console.log(ortalama(list));

console.clear();
/* -------------------------------------------------------------------------- */
/*                    Diziye Erişim Metodları                                  */
/* -------------------------------------------------------------------------- */
let ozNumbers=[1,2,"3","dört"];
let hasNumbers=[5,6,7];
// .concat
// .includes
// .join 
// .slice 
// .toString 
// .indexOf 
// .lastIndexOf 

/* -------------------------------------------------------------------------- */
/*                                   concat                                   */
/* -------------------------------------------------------------------------- */
// concat icindeki dizi elemanlarini diger dizilere ekler, birlestirir
let newArr= ozNumbers.concat(hasNumbers);
console.log(newArr);  // [1, 2, '3', 'dört', 5, 6, 7]

/* -------------------------------------------------------------------------- */
/*                                  includes                                  */
/* -------------------------------------------------------------------------- */
// dizi icinde x ifadesi iceriyor mu? true false döndürür.
console.log(newArr.includes("dört"));  // true
console.log(newArr.includes("rt"));    // false
console.log(newArr[3].includes("rt")); // true

/* -------------------------------------------------------------------------- */
/*                             indexOf,LastIndexOf                            */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*          join() dizi elelmanlarını birleştirip stringe dönüştürür          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  toString                                  */
/* -------------------------------------------------------------------------- */
// dizi elemanları arasına virgül koyarak birleştirip string haline dönüştürür


console.clear();


// function findConsonants(sentence) {
//     const consonants = [];
//     const regex = /[bcdfghjklmnpqrstvwxyz]/gi;
//     const matches = sentence.match(regex);
    
//     if (matches) {
//       for (let i = 0; i < matches.length; i++) {
//         const consonant = matches[i].toLowerCase();
//         consonants.push(consonant);
//       }
//     }
    
//     return consonants;
//   }
  
//   const inputSentence = "Merhaba, nasılsınız?";
//   const consonantsInSentence = findConsonants(inputSentence);
  
//   console.log("Ünsüz Harfler:", consonantsInSentence);

// isimler = ["a","b","c","d"];

// isimler.forEach(isim => console.log(isim));

// function name(params) {
    
// }
console.clear();

let yazi ="Hello";
let ayir = yazi.split("");
for (let i = 0; i < ayir.length; i++) {
    
    if(ayir.includes('e')) console.log(ayir[i]);
    
}


let cumle = "Hava bugün cok güzel";

let sesli = (yazi) => {
    for(let i = 0; i < yazi.length; i++){
        if(yazi[i].match(/[aeıioöuü]/gi))  console.log(yazi[i]);
    }
}

console.log(sesli(cumle));

console.clear();

let sayi = [3,5,8,2,1];

    sayi.sort((a,b)=>a-b);

console.log(sayi[sayi.length-1]);

console.clear();


let sayi1 = [4,8,2,9,1,5,6];
let sum1=0;
for (let i = 0; i < sayi1.length; i++) {
    sum1 +=sayi1[i]
}
console.log("toplami:",sum1)
console.log("ortalamasi:",sum1/(sayi1.length));


function space(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i]===' ') count ++ 
    }
    return count;
}
console.log(space("Bugün hava cok güzel"));

let cumle1 = "Harvey Hoca ile güne baslarken";
console.log(cumle1.split(" ").length);

console.clear();


let cumle2 = "Harvey Hoca baskan Fenerbahce sampiyon";
console.log(cumle2.split(" ").reverse().join(" "));


console.clear();


// const users = () =>{
//     let dizi= [];
//     let user1;
//     do {
//             user1 = prompt("Kullanici adi girin");
//             dizi.push(user1);
//             console.log(dizi);
//     }
//     while(user1!=="q")
//     dizi.splice(-2)

//  return dizi;
// }



console.clear();




// const yil = (adi,yili) => {

//     let yas = new Date().getFullYear();

//     adi = prompt("Kullanici Adi: ");
//     yili = prompt("Dogum yili: ");
//     let sonuc= yas-yili;

//     return console.log(`Kullanici Adi:${adi} Yasi:${sonuc}`);
// }

// function yil2(params) {
//     let yas = new Date().getFullYear();

//     adi = prompt("Kullanici Adi: ");
//     yili = prompt("Dogum yili: ");
//     let sonuc= yas-yili;

//     return console.log(`Kullanici Adi:${adi} Yasi:${sonuc}`);
// }

// yil();
// yil2();

console.clear();

let isimler = ["Bollywood","Yildizi","Harvey","Hoca","Aamir","Khan","ile", "Oscar", "Adayi", "Secildi"];
let sonuc=[];
for (let i = 0; i < isimler.length; i++) {
  sonuc.push(isimler[i].toLowerCase())
}
console.log(sonuc);


console.clear();


const fakt = (n) =>{
    let num=1;
    for (let i = 1; i <= n; i++) {
        num *= i;
    }   
    return console.log(num);    
}
fakt(5);
// let string ="alti,bir"612453789
console.clear();


let dizi1 = [5,2,6,1,3,7];
dizi1.sort((a,b)=>a-b)
console.log(dizi1);

for (let i = 0; i < dizi1.length; i++) {
  if(dizi1[i]!==dizi1[i+1]-1){
    console.log(dizi1[i]+1);
    break;
  } 
}

let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
let stringNumber=[]
const splitToNumber=(string) => {

   let newString=string.split(",")
   console.log(newString);
   for (let i=0;i<=newString.length-1;i++){
 
    if (newString[i]==="bir") stringNumber.push(1)
    else if (newString[i]==="iki") stringNumber.push(2)
    else if (newString[i]==="üç") stringNumber.push(3)
    else if (newString[i]==="dört") stringNumber.push(4) 
    else if (newString[i]==="beş") stringNumber.push(5)
   else if (newString[i]==="altı")stringNumber.push(6)
   else  if (newString[i]==="yedi") stringNumber.push(7)
   else  if (newString[i]==="sekiz") stringNumber.push(8)
   else stringNumber[i]=9 
   }
   
return stringNumber.join("")
}
console.log(splitToNumber(string));




console.clear();

// sayac = 0;
//  sayi = (d, l, h) => {
//   for (let i = l; i <= h; i++) {
//     if (i % 10 === d || Math.floor(i / 10) === d) {
//       sayac++;
//       console.log(i);
//     }
//   }
//   return sayac;
// };
// sayi(2, 10, 29);
// console.log(`toplam ${sayac} kere kullanilmis`);






//! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir: 
//? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"

//? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.

//? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

//? findNemo("Nemo is me") ➞ "I found Nemo at 1!"

//? findNemo("I Nemo am") ➞ "I found Nemo at 2!"

//let text = "Nemo is me";






const findNemo = (text) => {

    let text2 = text.split(" ");
    let sayac=0;

    for (let i = 0; i < text2.length; i++) {

        if(text2[i] === "Nemo"){
            sayac = i+1;
            break;
        }     
    }
    return sayac ? console.log(`I found Nemo at ${sayac}!`) : console.log("I can't find Nemo :(");
}

findNemo("I am finding Nemo !");






//! 14- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program 

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
//let remove = [1, 0, 1, 0];





const removeDups = (remove) =>{

    remove.sort();
    let arr =[];
    for (let i = 1; i <= remove.length; i++) {
        if(remove[i-1]!==remove[i]) arr.push(remove[i-1]);
        else continue; 
    }
    return console.log(arr);
} 

removeDups([1, 0, 1, 0]);

console.clear();
/* -------------------------------------------------------------------------- */
/*                                      1                                     */
/* -------------------------------------------------------------------------- */
string="5+7";
// result=12
console.log(eval(string));
string=8*9;
// result=72
console.log(eval(string));

/* ---------------------------------- 1_02 ---------------------------------- */
let str1 = "5+7";
const calString = (str1) => {
    str1.split("");
    let a = parseInt(str1[0]);
    let b = parseInt(str1[2]);
    let c;
    if (b>a){
        c=b;
        b=a;
        a=c;
    }
        if (str1[1]==="+") return a+b;
        if (str1[1]==="-") return a-b;
        if (str1[1]==="*") return a*b;
        if (str1[1]==="/") return a/b;
}
console.log(calString("5+7"));
console.log(calString("5-7"));
console.log(calString("5*7"));
console.log(calString("5/7"));

/* -------------------------------------------------------------------------- */
/*                                      2                                     */
/* -------------------------------------------------------------------------- */
const lessThan100 = (le1,le2) => {
    return le1+le2 < 100 ? true : false;
}
console.log(lessThan100(92, 15));

/* -------------------------------------------------------------------------- */
/*                                      3                                     */
/* -------------------------------------------------------------------------- */
let gunler = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
let gun = new Date().getDay();
let aylar = ["Ocak","Subat","Mart","Nisan","Mayis","Haziran","Temmuz","Agustos","Eylul","Ekim","Kasim","Aralik"];
let ay = new Date().getMonth();
console.log(`${new Date().getDate()} ${aylar[ay]} ${gunler[gun]} ${new Date().getFullYear()}`);
console.clear();
/* -------------------------------------------------------------------------- */
/*                                      4                                     */
/* -------------------------------------------------------------------------- */

let endDateString = "2022-12-25 15:00:00";
let [tarih,zaman] = endDateString.split(" ");
let [yili,ayi,gunu] = tarih.split("-");
let [sa,dk,sn] = zaman.split(":");
let time = new Date();
console.log(time);
console.log(endDateString);
console.log(`${new Date().getFullYear()}  ${new Date().getDate()}  ${new Date().getDay()} ${new Date().getHours()}: ${new Date().getMinutes()}:${new Date().getSeconds()}`);