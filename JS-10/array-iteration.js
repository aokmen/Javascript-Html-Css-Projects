/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */

// for
// for in
// for of

// sayilarin ortalamasi:
let grades = [70,85,100,90];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum +=grades[i];   
}
console.log(sum/grades.length);

/* -------------------------------------------------------------------------- */
/*                                   FOR IN                                   */
/* -------------------------------------------------------------------------- */

for (i in grades){
    sum +=grades[i];
}
console.log(sum);


let students = [
    "Ali",
    "Ahmet",
    "Ömer",
    "Hasan",
    "Mehmet",
    "Nisa",
    "Ali",
    "Ali",
  ];

  function OgrenciBul(ogrenci) {
    let counter=0;
    for(i in students) {

       students[i] === ogrenci ? counter++ : null;
      }
      return counter > 0
      ? `arana isim listede ${counter} defa yazilmistir`
      : "arana isim listede yok";
  }

  console.log(OgrenciBul("Ali"));

  /* -------------------------------------------------------------------------- */
  /*                                   FOR OF                                   */
  /* -------------------------------------------------------------------------- */

    // Burada  for dan sonra verilen değişken direk olarak dizideki elemanı ifade eder.
    // Yani bir dizideki elemanlara item deriz. Burda for of ile direk elemana(item) ulaşılır

  for (i of students) {  // Array icindeki i => item olarak indek numarasidegil herbir elemani yazdirir.
    console.log(`${i} hos geldiniz`);
  }

  console.clear();

  let yeniListe=[];
  for (isim of students) {
    if (isim[0]==="A") yeniListe.push(isim)
    // isim.charAt(0)==="A"
  }
  console.log(yeniListe);
  console.clear();
/* -------------------------------------------------------------------------- */
/*                                 ITERATIONS                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/TODO                                  forEach()                              */
/* -------------------------------------------------------------------------- */

// forEach bir metodtur, döngü metodu degildir.
// forEach bir fonksiyonu deger olarak alir ve dizideki her elemana o fonksiyondaki islemleri yapip bir sonuc üretir.

// array.forEach(element => {
    
// });

let personelList = ["Merve","Sema","Ayse","Ali","Ahmet","Mustafa","Hasan"];

personelList.forEach (function yazdir (isim) {
    console.log(`${isim} hosgeldiniz`);
})

function yazdir (isim) {
    console.log(`${isim}`);
}
personelList.forEach(yazdir);

const upper = (isim) =>{
    console.log(isim.toUpperCase());
}
personelList.forEach(upper);

console.clear();

const reverse = (x) => {
    console.log(x.split("").reverse().join(""));
}
personelList.forEach(reverse);

//! forEach geriye deger döndermez. Yani fonksiyon icinde return varsa undefined diye cikar

console.clear();

// sayilarin ortalamasi
let sayilar = [45,60,34,67,44];

sum = 0;

const topla = (sayi) =>{
    sum +=sayi
}

sayilar.forEach(topla);

personelList.forEach((isim)=> console.log(isim.toUpperCase()))

personelList.forEach((x) =>console.log(x.split("").reverse().join("")) )

sum=0

sayilar.forEach((sayi)=>sum += sayi)
console.log(sum);

console.clear();

let personelLists = ["Merve","Sema","Ayse","Ali","Ahmet","Mustafa","Hasan"];
personelLists.forEach((isim)=> console.log(`Hosgeldin ${isim}`));

// forEach ile sayede elamanlara ulaşmakla kalmayız ayrıca index numaralarını da bize verir

// .forEach(func,index,arr)

personelList.forEach((deger,index,arr)=>console.log(deger,index,arr)); //Sema 1 (7) ['Merve', 'Sema', 'Ayse', 'Ali', 'Ahmet', 'Mustafa', 'Hasan']

personelList.forEach((deger,index,arr)=>console.log(arr[index])); //Sema

console.clear();
personelList.forEach((deger,index,arr) => (deger === "Hasan") ? console.log(index) : null);
sum=0;
sayac=0;
sayilar.forEach((a)=>{
    sum+=a;
    console.log("sum:",sum);
    sayac++;
    console.log("sayac:",sayac);
console.log(sum/sayac);
});
console.log(sum/sayilar.length);

console.clear();

//maaslara %10 zamli yazdirma

const maaslar = [5000, 7000, 15000, 12000];

maaslar.forEach((maas,index)=> console.log(`${index+1} numarali elemanin maasi ${maas+=maas*0.1}`));

maaslar.forEach((maas,index)=> console.log(`${index+1} numarali elemanin maasi ${maas*1.1}`));

console.clear();

//maaslarin zamli toplami

maaslar.forEach((maas,index)=> {

    console.log(`${index+1} numarali elemanin maasi ${maas+=maas*0.1}`)
sum +=maas*1.1;

});
console.log(sum);

console.clear();
// listedeki tek sayilari ve cift sayilari yeni diziye atama:

let numbers =[45,26,77,90,73,44]
let tekSayilar=[];
let ciftSayilar=[];

numbers.forEach((item)=> item % 2 === 0 ? ciftSayilar.push(item) : tekSayilar.push(item) 
);
console.log(tekSayilar);
console.log(ciftSayilar);