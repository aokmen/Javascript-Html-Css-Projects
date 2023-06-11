









/* -------------------------------------------------------------------------- */
/*         Bir dizi oluşturun ve dizi içindeki tüm sayıları toplayın.         */
/* -------------------------------------------------------------------------- */
let x = "Ali";
array1 = [2,6,8,4,9,10,24];

const arraySum = array1.reduce((sum, item) => sum + item);
console.log(arraySum);
//veya

const arraySum2 = array1.reduce((sum, item) => sum + item, 0);
console.log(arraySum2);

//veya
let sum1 = 0;
array1.forEach((item) => sum1 += item)
console.log(sum1);

//veya
let sum2 = 0;
for (i in array1) {
    sum2 += array1[i];
}
console.log(sum2);

//veya
let sum3 = 0;
for(i of array1){
    sum3 += i;
}
console.log(sum3);

//forEach ile index ve arr elemanlarini kullanma
let sum4 = 0;
array1.forEach((item,index,arr) => sum4 +=arr[index])


 /* -------------------------------------------------------------------------- */
 /*         Bir dizi oluşturun ve dizinin elemanlarını tersine çevirin.        */
 /* -------------------------------------------------------------------------- */

let array2 = ["Animal","Cat","Dog","Horse","Leon"];

const arrayReverse = array2.map((item) => item.split("").reverse().join(""));
console.log(arrayReverse);

//veya
const yeni = array2.map((arg) => {
    let text = "";
    for (let i = arg.length-1; i >=0 ; i--) {
        text += arg[i];  
    }
    return text;
})
console.log(yeni);

/* -------------------------------------------------------------------------- */
/*          Bir dizi oluşturun ve dizideki çift sayıları filtreleyin.         */
/* -------------------------------------------------------------------------- */

let array3 = [2,6,8,4,9,10,24];
const arrayEven = array3.filter((item) => item % 2===0)
console.log(arrayEven);

/* -------------------------------------------------------------------------- */
/*    Bir dizi ile dizideki tüm string değerleri büyük harflere dönüştürün.   */
/* -------------------------------------------------------------------------- */


let array4 = ["Animal","Cat","Dog","Horse","Leon"];
const arrayUpper = array4.map((arg) => arg.toUpperCase())
console.log(arrayUpper);

/* -------------------------------------------------------------------------- */
/*      Bir dizi oluşturun ve dizideki elemanların toplamını hesaplayın,      */
/*        ancak 5'ten büyük olan elemanları hesaplamaya dahil etmeyin.        */
/* -------------------------------------------------------------------------- */

let array5 = [2,6,8,4,9,10,3,24];

const fiveFilter = array5.filter((arg) => arg < 5).reduce((sum,item) => sum += item);

console.log(fiveFilter);

/* -------------------------------------------------------------------------- */
/*          Bir dizi oluşturun ve dizideki tek sayıları filtreleyin,          */
/*                  ardından her bir elemanın karesini alın.                  */
/* -------------------------------------------------------------------------- */

let array6 = [2,6,8,4,9,10,3,24,11,15];

const arrayOdd = array6.filter((arg) => arg%2===1).map((arg) => arg**2)
console.log(arrayOdd);

//for in Method

let array8=[];
let array7 = [2,6,8,4,9,10,3,24,11,15];
for ( i in array7) {
    if (array7[i]%2===1) {
        array8.push(array7[i]**2);
    }
   
}
console.log("for in:",array8);

//for of Method

let array10=[];
let array9 = [2,6,8,4,9,10,3,24,11,15];

for ( item of array9) item % 2 === 1 ? array10.push(item**2) : null;
console.log("for of:",array10);

//for Each Method

let array12=[];
let array11 = [2,6,8,4,9,10,3,24,11,15];

array11.forEach((element,index) => { 
    element%2===1 ? array12.push(element**2) : null;
});
console.log("forEach",array12);

/* -------------------------------------------------------------------------- */
/*   Bir dizi oluşturun ve dizinin elemanlarını alfabetik olarak sıralayın.   */
/* -------------------------------------------------------------------------- */

let array13 = [2,6,8,4,9,10,3,24,11,15];
let array14 = ["Animal","Cat","Dog","Horse","Leon"];

const arrayOrder = array13.sort((a,b)=>a-b);
console.log(arrayOrder);

const textOrder = array14.sort();
console.log(textOrder);
/* -------------------------------------------------------------------------- */
/*       Bir dizi ile dizinin elemanlarını harf sayısına göre sıralayın.      */
/* -------------------------------------------------------------------------- */
let array15 = ["Animal","Xat","Dog","Horse","Leon"];

let letterOrder = array15.sort((a,b)=>b.length-a.length);
console.log(letterOrder);

/* -------------------------------------------------------------------------- */
/*         Bir dizi oluşturun ve dizinin elemanlarını ters sıralayın.         */
/* -------------------------------------------------------------------------- */

let array16 = [2,6,8,4,9,10,3,24,11,15];

const numOrder = array16.sort((a,b)=>b-a);
console.log(numOrder);

/* -------------------------------------------------------------------------- */
/*      Bir dizi oluşturun ve dizinin elemanlarının toplamını hesaplayın,     */
/*        ancak 3'ün katları olan elemanları hesaplamaya dahil etmeyin.       */
/* -------------------------------------------------------------------------- */

let array17 = [2,6,8,4,9,10,3,24,11,15];

const arrayAdd = array17.filter((item) => item%3 !== 0).reduce((sum,item) => sum +=item);
console.log(arrayAdd);

console.clear();

/* -------------------------------------------------------------------------- */
/*    İki farklı dizi ile bu dizileri birleştirerek tek bir dizi oluşturun    */
/* -------------------------------------------------------------------------- */

let array_1 = [2,"Ali","15",11];
let array_2 = ["Alex",100,"Can",11];
const arrayJoin = array_1.concat(array_2);
console.log(arrayJoin);

/* -------------------------------------------------------------------------- */
/*     Dizi ile dizideki elemanları tekrarlamadan yeni bir dizi oluşturun.    */
/* -------------------------------------------------------------------------- */

let array_3 = [2,8,"a",11,"c",2,1,8,"b","a","b","c",11,1];
let arraySet = new Set(array_3.filter(item=>item));
console.log(arraySet);

/* -------------------------------------------------------------------------- */
/*                İki farklı dizide ortak olan elemanları bulun               */
/*              ve bu elemanları içeren yeni bir dizi oluşturun.              */
/* -------------------------------------------------------------------------- */

let array_4 = [2,8,"a",11,"c",2,1,8,"b"];
let array_5 = [5,2,"a","b","c",11,1,"d"];
let array_6 = [5,3,2,"a","x","b",1,8,"d"];
let array_7 = [array_4,array_5,array_6]
let newArray = new Set(array_4.filter((item) => array_5.includes(item)).sort());
console.log(newArray);
//veya
let newArray2 = array_7.reduce((arg,arg2) => arg.filter((item) =>arg2.includes(item) ))
console.log(newArray2);

/* -------------------------------------------------------------------------- */
/*                Bir dizi oluşturun ve bu dizideki elemanların               */
/*       her birinin faktöriyelini hesaplayarak yeni bir dizi oluşturun.      */
/* -------------------------------------------------------------------------- */

let array_8 = [0,1,2,3,4,5,6,7,8,9];
const arrayFakt = array_8.map((item) => {let fakt=1; for (let i = 1; i <= item; i ++) fakt *=i
     return fakt;})

console.log(arrayFakt);


// let number = 0;
// let factorial =1;
// for (let i = 1; i <= number; i++) {
//     console.log(i);
//     factorial *= i;
//     console.log(factorial);
// }

/* -------------------------------------------------------------------------- */
/*    Bir dizideki elemanları rastgele sıralayarak yeni bir dizi oluşturun.   */
/* -------------------------------------------------------------------------- */

// let array_9 = ["a","b","c","d","e","f","g","h","i","k"]  // [0,1,2,3,4,5,6,7,8,9];

// let array = [];
// let rand = [];
// let new_Array = [];

// while(new_Array < 10){

//     rand.push(Math.trunc((Math.random(10))*10));  
//     array = new Set(rand); 

// }

// for (i of array) {
//     new_Array.push(array_9[i]);
// }


// console.log(new_Array);

let array_9 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k"];
let rand = [];
let new_Array = [];

// while (new_Array.length < 10) {
//   let randomIndex = Math.floor(Math.random() * 10);
//   let randomElement = array_9[randomIndex];
  
//   if (!rand.includes(randomIndex)) {
//     rand.push(randomIndex);
//     new_Array.push(randomElement);
//   }
// }

// console.log(new_Array);

const arrayRandom = array_9.sort(()=>Math.floor(Math.random()-0.5));
console.log(arrayRandom);

let array_10 = [2,10,3,5,4,7,11,13,79,14,12,16,18,27,23,44];
let array_11=[];
const arrayOdds = array_10.filter((arg) => arg%2===1);
const arrayEvens = array_10.filter((arg) => arg%2===0);
array_11[0]=arrayOdds;
array_11[1]=arrayEvens;
console.log(array_11);

let array_12 = [1,2,3];
let array_13 = [4,5,6];
let array_14 = [];

for (let i = 0; i < array_12.length; i++) {
    array_14.push(array_12[i]);
    array_14.push(array_13[i]);  
}
console.log(array_14);



