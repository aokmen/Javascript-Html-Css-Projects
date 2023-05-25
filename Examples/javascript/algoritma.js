console.clear();



// function asalMi(sayi) {
//     if (sayi < 2) {
//       return false;
//     }
//     for (let i = 2; i < sayi; i++) {
//       if (sayi % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   for (let sayi = 1; sayi <= 50; sayi++) {
//     if (asalMi(sayi)) {
//       console.log(sayi);
//     }
//   }

// for (let i=1; i<51;i++){
//     for(let a=1; a<i; a++){
//         if(i%a!==0){
//             console.log(a);
//         }
//     }  2 3 5 7 ( sadece kendisine bölunen)
// }
// for(let i=0;i<1001;i++){
  
//         let a = Math.floor(i%10);
     
//         let b = Math.floor(i%100/10);
  
//         let c = Math.floor(i%1000/100);


//         if(i === (a**3+b**3+c**3)) {
//             console.log(i);
//         } 125

// }

// for(let i=0;i<1001;i++){
  
//     let a = i%10;
 
//     let b = (i%100-a)/10;

//     let c = (i%1000-(b*10)-a)/100;


//     if(i === (a**3+b**3+c**3)) {
//         console.log(i);
//     }

// }

// let num;
// for(let i=0;i<1001;i++){
//     num=i;
//     let bir = num%10;   // 125  => 5
 
//     num = (num-bir)/10; // 125 - 5 => 120 /10 =>12
//     on = num % 10;  //12 => 2
//     num = (num-on)/10; // 12 - 2 /10 => 1
//     yuz =num%10; // 1 => 1


//     if(i === (bir**3+on**3+yuz**3)) {
//         console.log(i);
//     }

// }
// yuzler=i/100;
//             onlar=(i%100)/10;
//             birler=i%10;
// 0   1   153   370   371   407   1000

// for(let i=0;i<1001;i++){

//     let a = i%10;

//     let b = (i%100-a)/10;


//     let c = (i%1000 - (i%100))/100;


//     if(i === (a**3+b**3+c**3)) {
//         console.log(i);
//     }

// }

// 125
//  let i = 125;
// for( let i = 0; i < 1001; i++){
//     let yuz = (i%1000 - i%100)/100;

//     let on  = (i%100 - i%10)/10;

//     let bir =  i%10;

//     if(i === (bir**3)+(on**3)+(yuz**3)){
//         console.log(i);
//     }


//  }
        
// 2 3 5 7 11

// for (let i=3 ;i <10 ;i++) {
// console.log("i: ",i);
//     for(let a=2; a<i; a++ ){
//       console.log("a: ",a);
//         if(i%a !== 0 ){
          
      
//             console.log("sonuc: ",i);
//         }
//     }
// }

// 3  ------------
// 2 

// 4
// 2 3 

// 5  ------------
// 2 3 4 

// 6
// 2 3 4 5 

// 7  -------------
// 2 3 4 5 6




// for (let i=3 ;i <101 ;i++) {
//     let b=true;
//     for(let a=2; a<i; a++ ){
   
//         if(i%a === 0 ){
//           b=false;
//             break;
//         }
//     }
//     if(b==true){
//         console.log(i);
//     }
// }
// console.clear;
// sum="*";
// sonuc="";
// console.log(sum);
// let n="10"
// for (let i = 1; i <= n; i++) {
//     space="";
//     for (let j = n; j >1 ; j--) {
//         space +="-"
       
//     }
//     sum +="**"
//     sonuc = space+sum
//     console.log(sonuc);

  //   *
  //  ***
  // *****
    
// }

console.clear;
// let n=3;
// for(let i=1;i<=n;i++){
//     let star="*";
//     let space=".";
//    console.log(`${space.repeat(n-i)} ${star.repeat((2*i)-1)} ${space.repeat(n-i)}`);
// } 
// for(let i=4;i>0;i--){
//     let star="*";
//     let space=".";
//     let n=4;
//    console.log(`${space.repeat(n-i+2)} ${star.repeat((2*i)-1)}${space.repeat(n-i+2)}`);
// } 


  //   *
  //  ***
  // *****
    
