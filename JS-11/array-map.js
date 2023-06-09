/* -------------------------------------------------------------------------- */
/TODO                                    map()                                */
/* -------------------------------------------------------------------------- */

//?  Map bir diziyi alır ve parametre olarak verilen fonksiyonu her eleman için uygular
//! ve sonuçlarını geriye yeni bir dizi dönderir.

//? Orjinal diziyi değiştirmez

//? Kaç eleman girerse o kadar eleman çıkar
// ternary
let hastaKayit = [
    "Merve",
    "Sema",
    "Ayse",
    "Ali",
    "Ahmet",
    "Mustafa",
    "Hasan"
  ];
  hastaKayit.map( function(x){ return x.toUpperCase() });
  const yeniListe =   hastaKayit.map( function(x){ return x.toUpperCase() });
  const listeUpper = hastaKayit.map((x)=>x.toUpperCase());
  console.log(hastaKayit);
  console.log(yeniListe);
  console.log(listeUpper);

console.clear();

const isCheck = hastaKayit.map((item)=>item === "Ali" ? true : false)

console.log(isCheck);

// TL dizinindeki değerlerin euro ve dolar karşılıklarını hesaplatarak dizilere aktarın
const tl=[400,500,800,1230,2300,4500]
const dolar=23.300
const euro=25.400

const dolarList = tl.map((item)=>(item/23.3).toFixed(2));
const euroList = tl.map((item)=>(item/25.4).toFixed(2));

console.log(dolarList);
console.log(euroList);

// const str = "Lorem ipsum dolor sit amet 123 consectetur adipiscing elit";
// console.log(str.search(/(?<=amet )\d+/)); // Çıktı: 23
// console.log(str.indexOf(/(?<=amet )\d+/));

console.clear();

const adj = ["clever","add"];

let add = adj.map((item)=> console.log(`${item}ly`));
console.log(add);

console.clear();
// uzantıları silerek saddece result,document,index olarak dönen liste
const ext=["result.pdf","document.doc","index.html"]

const sil = ext.map((item)=>item.split(".")[0]);
console.log(sil);
console.clear();

/* -------------------------------------------------------------------------- */
/*                                   FILTER                                   */
/* -------------------------------------------------------------------------- */

// Filtreleme isini yapar
// Dizideki elemanlarda verilen fonksiyonlardaki sarta uyan elemanlari yeni bir diziye atiyor
// girilen dizideki ayni sayidaki eleman sayisi ile farkli olabilir

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const negatif = array.filter((item)=> item < 0);
const pozitif = array.filter((item)=> item > 0);
console.log(negatif);
console.log(pozitif);

const harf = hastaKayit.filter((item)=>(item[0]==="A"));
console.log(harf);
const harf2 = hastaKayit.filter((item)=>item.startsWith("A"));
console.log(harf2);
console.log(harf2.map((item)=>item.toUpperCase()));

const newList = hastaKayit.filter((item)=>(item[0]==="A")).forEach((x)=>x.toUpperCase());
console.log(newList);

/* -------------------------------------------------------------------------- */
/*                                  CHAINING                                  */
/* -------------------------------------------------------------------------- */
console.log();

const upperAstart=hastaKayit.filter((item)=> item[0]==="A").map((x)=> x.toUpperCase()).filter((x)=> x.length===4)

console.log(upperAstart);

// forEach değer döndermediği için onun devamında chaining yapılamaz
// const newlist=hastaKayit.filter((item)=> item[0]==="A").forEach((x)=> x.toUpperCase()).filter((x)=>x.length===4)

console.clear();

//Maaşı asgari üsretten büyük olanları yazdırın
// Asgari ücret 8500

const maas=[4000,12000,3000,20000,15000,10000]

const buyuk= maas.filter((item)=>item>8500);
console.log(buyuk);

const zaam = maas.filter((item)=>item<8500).map((x)=>x +=x*0.1);

console.log(zaam);
let zam = maas.filter((item)=> item < 8500).map((x) =>Math.trunc(x*1.1) )
console.log(zam);

const up = hastaKayit.filter((item)=>item[0]==="A").map((x)=>x.toUpperCase()).filter((x)=>x.length===4);

console.log(up);
console.clear();
// (item)=>item

/* -------------------------------------------------------------------------- */
/TODO                                  REDUCE()                               */
/* -------------------------------------------------------------------------- */

//? Tek bir değer dönderir
//? dizideki bütün elemanları toplama gibi işlemlerde kullanmak gibi

//? İki parametre vermek zorunlu (bu iki parametre dizide ardışık elemanları kasteder.Biri önceki ve sonraki gibi)

// sum=0;
// maas.forEach((item)=> sum += item)
// acc  başlangıç değeri gibi, sum olarak kullandığımız değişken gibi düşünebilirsiniz.Bu nedenle o değerin kaçtan başlayacağını verebiliriz.

// array.reduce(accumulator,item) // accumulator her elemana islem yapar

console.log(maas.reduce((sum,item) => sum+item,10000));


const statement = ["Merhaba","bugün","sicak"];

console.log(statement.reduce((st,item)=>st+item,"hey"));

const num=[3,6,8,9];
const findTotal=num.reduce((total,item)=>{
    total.push(item**2)
    return total
},[])

console.log(findTotal);

console.clear();
// (item)=>item

/* ---------------------------------- some ---------------------------------- */
// O şartı sağlayana en az bir eleman varsa true değer döndürür
const array1 = [1, 2, 3, 4, 5];

console.log(array1.some( (element) => element % 2 === 0));
/* ---------------------------------- every --------------------------------- */
// o şartı bütün elemanlar sağlıyorsa tru dönderir
const array2 = [1, 30, 39, 43, 10, 13,43];

console.log(array2.every((currentValue) => currentValue < 40));
/* ---------------------------------- find ---------------------------------- */
// bir değer arattırıldığında sadece ilk bulduğunu yazdırır.

console.log(array2.find((currentValue) => currentValue > 40));