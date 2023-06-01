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

let cumle = "Javascript dersleri basladi";

const harf = (unsuz) =>{
    let bul=[];
    let harfler = /[bcdfghjklmnprstwxyz]/
}

numbers10=[-45,23,67,98,-546,-33232,0,5454,-34343];
sum=0;
for (let i = 0; i < numbers10.length; i++) {
    numbers10[i]< 0 ? sum +=numbers10[i] : null ;
}
console.log(sum);