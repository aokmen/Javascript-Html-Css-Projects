









// Bir dizi oluşturun ve dizi içindeki tüm sayıları toplayın.
let x = "Ali";
array1 = [2,6,8,4,9,10,24];

const arraySum = array1.reduce((sum,item)=> sum += item);
console.log(arraySum);

// Bir dizi oluşturun ve dizinin elemanlarını tersine çevirin.

let array2 = ["Animal","Cat","Dog","Horse","Leon"];

const arrayReverse = array2.map((item) => item.split("").reverse().join(""));
console.log(arrayReverse);

// Bir dizi oluşturun ve dizideki çift sayıları filtreleyin.

let array3 = [2,6,8,4,9,10,24];
const arrayEven = array3.filter((item) => item % 2===0)
console.log(arrayEven);

// Bir dizi oluşturun ve dizideki tüm string değerleri büyük harflere dönüştürün.

let array4 = ["Animal","Cat","Dog","Horse","Leon"];
const arrayUpper = array4.map((arg) => arg.toUpperCase())
console.log(arrayUpper);

// Bir dizi oluşturun ve dizideki elemanların toplamını hesaplayın, ancak 5'ten büyük olan elemanları hesaplamaya dahil etmeyin.

let array5 = [2,6,8,4,9,10,3,24];

const fiveFilter = array5.filter((arg) => arg < 5).reduce((sum,item) => sum += item);

console.log(fiveFilter);

// Bir dizi oluşturun ve dizideki tek sayıları filtreleyin, ardından her bir elemanın karesini alın.

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

// Bir dizi oluşturun ve dizinin elemanlarını alfabetik olarak sıralayın.

let array13 = [2,6,8,4,9,10,3,24,11,15];
let array14 = ["Animal","Cat","Dog","Horse","Leon"];

const arrayOrder = array13.sort((a,b)=>a-b);
console.log(arrayOrder);

const textOrder = array14.sort();
console.log(textOrder);
// Bir dizi oluşturun ve dizinin elemanlarını harf sayısına göre sıralayın.
let array15 = ["Animal","Xat","Dog","Horse","Leon"];

let letterOrder = array15.sort((a,b)=>b.length-a.length);
console.log(letterOrder);

// Bir dizi oluşturun ve dizinin elemanlarını ters sıralayın.

let array16 = [2,6,8,4,9,10,3,24,11,15];

const numOrder = array16.sort((a,b)=>b-a);
console.log(numOrder);

// Bir dizi oluşturun ve dizinin elemanlarının toplamını hesaplayın, ancak 3'ün katları olan elemanları hesaplamaya dahil etmeyin.