//! ----------------- IF - ELSE IF - ELSE-----------------------

// Programlama dillerinde kodlar yukarıdan aşağıya çalışır.Bu yapıyı bozan bazı durumlar vardır. Bunlardan biri karar yapılarıdır.

/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

// yas 18 den büyükse oy kullanmasina izin veren program
//TODO------------------IF - ELSE-----------------------


// let yas = +prompt("Yasinizi girin:");
// if (yas > 18) {
//     console.log("Oy kullanabilirsin");
// }
// else {
//     console.log("oy kullanamazsin");
// }

// let sayi = prompt("sayiyi giriniz:");
// if(sayi % 2 == false){
//     console.log("sayi cifttir.");
// }
// else{
//     console.log("sayi tektir");
// }

// let sinyal=prompt("dügmeye bas");
// if(sinyal = true){
//     console.log("sinyal var");

// }else{
//     console.log("sinyal yok");
// }

console.clear();

//TODO------------------IF - ELSE IF-----------------------

// Bir den fazla karar durumu varsa else if de kullanılır.
// her else if kısmına da şart durumu yazmalıyız.

/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

//? -----------------Example-----------------------------

// let grade=75;

// if (grade >= 20 && grade < 45){
//     document.write(" your grade is not enough to pass the class")
// }

// else if (grade >= 45 && grade < 70){
//     document.write(" your grade is not enough to pass the class")
// }

// else if (grade >= 70 && grade <= 100){
//     document.write(" Passed the course succesfully")
// }
// else if (grade >100 || grade <20){
//     document.write(" Enter a value between 20 - 100")
// }
// else {
//     document.write("Please enter a number")
// }

let price =+prompt("Please enter price");

if (price>=0 && price<=500 ){
    console.log(price*50);
}

else if(price>=501 && price<1000 ){
    console.log(price*100);
}
else if(price> 1000){
    console.log(price*500);
}
else {
    console.log("Please enter a number");
}