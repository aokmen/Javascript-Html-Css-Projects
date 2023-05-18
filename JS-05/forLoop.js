//! ---------------FOR - LOOP ---------------

// Karar durumları gibi döngülerde günlük hayatta çok karşımıza çıkan yapılardır.
//Tekrarlı olan işlerde farklı türlerde döngülerden birini kullanabiliriz

//? FOR -LOOP
//? for (initialization,condition,increment/decrement){

//? }

console.clear();
//1 den 10 a kadar sayilar

// for(let i=1; i<=10;i++){
//     console.log(i);
// }

//10 dan 1 e kadar sayilar

// for(let i=10; i>0;i--){
//     console.log(i);
// }
// console.clear();

// let sum=0;
// for(let i=1; i<=100;i++){
//     sum +=i;
   
// }
// console.log(sum);

// console.clear();


// let cift=0;
// for(let i=1; i<=100;i++){
//     if(i%2===0){
//         cift +=i;
//     }
    
// }
// console.log(cift);



// let cift=0;
// for(let i=1; i<=100;i++){
    
//     i % 2 === 0 ? cift += i : null;

    
// }
// console.log(cift);
// console.clear();

// let summ=1;
// let sayi=+prompt("sayiyi giriniz")
// for(let i=1; i<=sayi;i++){
    
//    summ *=i;

    
// }
// console.log(summ);

// for(let i=0;i<1001;i++){
//     let yuz =(i%1000 - i%100)/100;
//     let on =(i%100 - i%10)/10;
//     let bir =i%10;
//     i === (bir**3+on**3+yuz**3) ? console.log(i) : null;
// }

//TODO Amstrong numbers

// for(let i=0;i<1001;i++){
//     let birler = i%10;
//     let onlar = Math.trunc(i/10)%10;
//     let yuzler = Math.trunc(i/100);
//     let number = birler**3+onlar**3+yuzler**3;
//     number === i ? console.log(`${i} sayisi bir amstrong sayisidir`) : null;
// }

// let sayi =+prompt("Lütfen 1-10 arasi bir sayi giriniz:")

// let random = Math.ceil(Math.random()*10);

// sayi == random ? console.log(`Tebrikler sayiyi buldunuz... Dogru sayi: ${random}`) : console.log(`Üzgünüm sayiyi bulamadiniz. Dogru sayi: "${random}" Ama lütfen üzülmeyin, hayatin sonu degil...`)

// for( let i=1; i<=10;i++){
//     for( let j=1; j<=10;j++)
//     console.log(`${i} x ${j} = ${i*j}`);
// }

// document.write("<table border='3'><tr>");
//         for (var x = 1; x <= 10; x++) {        
//         document.write("<td>");
//             for (var i = 1; i <= 10; i++) {
//                 document.write(x+"x" + i + "=" + x * i + "<br/>");
//             }
//             if(x==5)
//             {
//             document.write("</tr><tr>");
//             }
//             document.write("</td>");
//         }    
//         document.write("</tr><table>");


for (let i=2 ;i <101 ;i++) {
    let counter =0;
    for(let a=2; a<i; a++ ){
   
        if(i%a === 0 ){
            counter++;
        }
    }
    if(counter===0){
        console.log(i);
    }
}
