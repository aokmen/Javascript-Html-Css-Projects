console.clear();


let yil =+prompt("yili giriniz");

if((yil%4 === 0 && yil%100 !== 0) || yil%400 === 0) {
    console.log(`${yil} => artik yildir`);
}
else{
    console.log(`${yil} => artik yil degildir`);
}

for(let i=1000;i<=2000;i++){
    if(i%13===3){
        console.log(i);
    }
   
}
let i=1000;
let say=1004;
while( i>=1000 && i<=2000){
     say +=13;
}
let sayac=0;
let sum=0;
while (sayac <5){
    let sayi =+prompt(`${sayac+1} .sayi giriniz:`);
    sum +=sayi;
    sayac ++;
}
console.log(sum/5);

let sum1=0;
for(i=1;i<=5;i++){
    let sayi =+prompt(`${i} .sayi giriniz:`);
    sum1 +=sayi;
}
console.log(`Ortalamasi: ${sum1/5}`);

//! 6- Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ? 

let sayi =+prompt("sayiyi giriniz:")

let sum=0;
let sayi=1;
while (sayi>0){

        sayi =+prompt("sayiyi giriniz:")
        if(sayi<0){
            break;
        }
        sum +=sayi; 

}
console.log(sum);

let sum = 0;

while(true) {
    let num =+prompt("sayiyi giriniz")
    if(num < 0){
        break
    }
    sum +=num;
}
console.log(sum);

//! 7- sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.


for(let i=1;i<=100;i++){

  if(i%5===0 && i%3===0){
        console.log("FizzBuzz");
    }
    else if(i%5===0){
        console.log("Buzz");
    }
    else if(i%3===0){
        console.log("fizz");
    }
  
    else{
        console.log(i);
    }
}

//! 8- Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?

let sayi=+prompt("sayiyi giriniz");
let basamak=0;

while(sayi!=0){
    basamak++;
    sayi=Math.trunc(sayi/10);
    
}
console.log(basamak);

//! 9- Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız ?  // 0 1 1 2 3 5 8 13

let n = +prompt("Kac tane fibonacci sayisi isterseniz");

0 1 1 2 3 5 8 11 19

let a=0;
let b=1;
let strfib= '0 1'
for (let i = 0; i < 20; i++) {
    c = a+b;
    strfib += ` ${c}`
    a=b;
    b=c;

}
console.log(object);

//! 10- Aşağıdaki çıktıyı konsola yazdırınız

// ?      * * * * *
// ?      * * * * * 
// ?      * * * * *
// ?      * * * * * 
// ?      * * * * *

let star= "";

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      star +="* ";
    }
    star += "\n";
}
console.log(star);

let a =+prompt("1.Kenar:");
let b =+prompt("1.Kenar:");
let c =+prompt("1.Kenar:");

let check1 = a + b > c;
let check2 = a + c > b;
let check3 = c + b > a;

if(check1 && check1 && check3) {
    console.log("ücgendir");
}
else{
    console.log("ücgen degildir");
}

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function formatLikes(names) {
    const numLikes = names.length;
    
    if (numLikes === 0) {
      return "no one likes this";
    } else if (numLikes === 1) {
      return names[0] + " likes this";
    } else if (numLikes === 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (numLikes === 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      const numOthers = numLikes - 2;
      return names[0] + ", " + names[1] + " and " + numOthers + " others like this";
    }
  }




function likes(names) {
    // TODO

   const leng = names.length;

    if(leng === 0){
      return `no one likes this`;
    }
    else if (leng === 1){
        return `${names[0]} likes this`;
    }
    else if (leng === 2){
        return `${names[0]} and ${names[1]} like this`;
    }
    else if (leng === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    else {
        return `${names[0]}, ${names[1]} and ${leng-2} others like this`;
    }
    
  }
  console.log(likes([]));                                // "no one likes this"
  console.log(likes(["Peter"]));                         // "Peter likes this"
  console.log(likes(["Jacob", "Alex"]));                 // "Jacob and Alex like this"
  console.log(likes(["Max", "John", "Mark"]));           // "Max, John and Mark like this"
  console.log(likes(["Alex", "Jacob", "Mark", "Max"])); 