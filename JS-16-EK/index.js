/* -------------------------------------------------------------------------- */
/*                                 Javascript                                 */
/* -------------------------------------------------------------------------- */

// Data Types - Operators - Variables
// Conditional - if - else
// Ternary
// Loops for, while, do-while
// Function >> declaration ,expression, arrow
// String Methodlari >> slice,split,join,reserve,repeat,toUppercase
// Array Methodlari >> for in, for of, forEach, map, filter, reduce
// Object >> descructure {.,.,}, rest {...rest}, ...spread >> Math.max-min
// DOM >> querySelector, getElementById >> Traversing >> child,parent,closest
// DOM manipulation - createelement, sreatTextNode, appendChild, after, before
// Events -onclick,onmouseover,onmouseout,onkeyup,onkeydown, addEventListener("click",function)


/* -------------------------------------------------------------------------- */
/*                                SHORT CIRCUIT                               */
/* -------------------------------------------------------------------------- */

// Elektrik devresindeki kisa devre örnegi gibi
// mantiksal operator and && or || not

console.log("isci" || "memur" || "doktor" ); //isci
console.log("isci" && "memur" && "doktor" ); //doktor
const personel = {
    name:"Ali",
    age:"34",
    job:"",
    license:false
}
console.log(personel.job || "issiz"); //issiz
console.log(false || "is kriter"); //is kriter

/* -------------------------------------------------------------------------- */
/*                           SELF INVOKING FUNCTION                           */
/* -------------------------------------------------------------------------- */

// kendi kendini cagiran fonksiyon >> sondaki parantez kendini cagirmasini saglar
//anonim isimsiz bir fonksiyondur
(function(){console.log("kendini cagiran fonksiyon");})();

// bu fonksiyonda parametre alabilir
(function(x,y,z){console.log(x+y+z);})(10,56,null)

/* ------------------------------------ - ----------------------------------- */
const isim ="Can";
if(isim){ // isim === true
    console.log(`${isim}`);
}
if(personel.job){ // personel.job:"" >>  personel.job === false >> "personel yok"
    console.log("personel var");
}
else console.log("personel yok");

/* ------------------------------------ - ----------------------------------- */
// degiskenler bu sekilde de taniniyor
let a = 40,b = 60,c = 100;

 /* --------------------------- OPTIONAL CHAINING ?.  -------------------------- */
// Verilen bir degerde hata yarsa veya ulasilamiyorsa ?. ile bu hatadan atlaniyor undefined döndürüyor
 const ad ="Azra";
 console.log(ad?.fullname?.());
 console.log("bu satirlara gecmek zorundayim");
 const eleman=null;
 console.log(eleman?.null);

 /* --------------------------------- CALLBACK -------------------------------- */

 const toplam = (x,y) => {
    return x+y;
 }
 const numbers=(x,y,toplam) => {
    return toplam(x,y)
 }
 console.log(numbers(5,7,toplam));

 /* -------------------------------------------------------------------------- */
 /*                                   CLOSURE                                  */
 /* -------------------------------------------------------------------------- */

 const dis = (disaGonderilenDegisken) =>{
    console.log(disaGonderilenDegisken);
    return function ic(iceGonderilenDegisken){
        console.log(disaGonderilenDegisken);
        console.log(iceGonderilenDegisken);
    }
 }
 console.log(dis(50));
 const fonksiyon = dis(50)
fonksiyon(100);
dis(50)(100);
// Ic ice fonksiyonlarda local, global durumu var
function enDis(x){
    return function ic(y){
        return function enIc(z){
            console.log(x+y+z);
        }
    }
}
 enDis(10)(20)(30)