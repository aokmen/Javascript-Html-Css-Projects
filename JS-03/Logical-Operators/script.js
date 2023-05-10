//! --------------LOGITAL OPERATORS------------------

//? --------------AND OPERATOR----------------------

// Hersey true olmali, bir tane false olmayacak. en az iki secenek olmali

let Ad="Helen";
let Soyad="Kuttery";
let password="123";
let phone="120552";
console.log(Ad && Soyad && password && phone); // iceriklerin hepsinde bir deger varsa yani true ise en sonuncu icerigin degerini aliyor.
let a=true
let b=true;
let c=false;
let d=true;
console.log( a && b && c && d); // degerlerden biri false ise sonuc: false
console.clear();

//? --------------OR OPERATOR----------------------

// degerlerden biri sarti tasiyorsa yani true ise ilk degeri yazar 
let inst1="Harvey";
let inst2="Helen";
console.log(false || false || inst1 || inst2 );

// AND ve OR da tüm degerler true ise yani bir deger varsa: AND de en sonki true degeri alir , OR da ise ilk true degerini alir. 

//? !--------------NOT OPERATOR----------------------

let isOpen=true;  // Siteye giris yaptim, oturumu actim.
isOut=!isOpen;    // Siteden Oturumu kapat butonuna basinca cikis yaptim.
console.log(!isOpen);
console.log(isOut);

