console.clear();


function islem(par1,par2,par3){
    console.log(par1);
    console.log(par2);
    return par1 + par2 + par3;
}
console.log(islem(3,5,2));

console.clear();

let isim = "Harvey Watson";
console.log(isim.length);
console.log(isim[0]);

console.clear();

const topla = function(a,b){

}

const toplam = (a,b) => console.log("object");
toplam(1,2);

console.clear();

// Celsius degerini Fahrenheit

const cal = (deger) => (deger*9/5) + 32

console.log(cal(30))

console.clear();



// Belirli bir string ifadesini tersini bulma

// const ifade = (string) => {
//     let cumle="";
//     for (let i = string.length-1; i >=0; i--) {
//       cumle += string[i];       
//     }
//     return cumle;
// }

// console.log(ifade(string));

console.clear();
//belirli bir ifadenin tersini kontrol ederek eğer aynı ise palindrom olduğunu bulan bir JavaScript kodu

let string = "selles";
const ifade = (string) => {

    let cumle="";
    for (let i = string.length-1; i >=0; i--) {
      cumle += string[i];       
    }
    return string === cumle; 
}

console.log(ifade("selles"));

console.clear();


const bolen = (sayi) =>{
    let toplam=0;

    for (let i = 1; i <= sayi; i++) {

        sayi%i===0 ? toplam +=i : null;
        console.log(toplam);
    }
    return toplam;
}
console.log(bolen(12));

//6 => 1 2 3 6const 

// const bolen = (sayi) =>{

//     for (let i = 1; i <= sayi; i++) {

//         if(sayi%i===0){
//             console.log(i)
//         }
//     }
// }
// console.log(bolen(36));
// 6 => 1 2 3 6

console.clear();
const sayi = (cap) =>{
    let cevre = (2*cap*Math.PI).toFixed(2)
    let area = (Math.PI*(cap**2)).toFixed(2);
return `Cevresi: ${cevre} Alani: ${area}`
}

console.log(sayi(12));
// Asal Sayi bulma
console.clear();

const asal = (num) =>{
    
    if(num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(asal(7));

// üs alma

function tran(v1,v2,v3) {
    var result = Math.pow(v1*v2,v3)
}

console.clear();


// const ters = (sayi) => {
//     let cevirin = toString(sayi)
//     let ekle="";

//     for (let i = cevirin.length-1; i >=0; i--) {
//       ekle += cevirin[i];       
//     }
    
//     return ekle;
// }
// console.log(ters("123"));


// const ters = (sayi) => {
//     let cevir = sayi.toString();
//     let ekle="";
//     for (let i = cevir.length-1; i >=0; i--) {
//         ekle += cevir[i];       
//     }
//     return ekle;
// }

// console.log(ters(123));

// ters sayi cevir

const ters = (sayi) => {
    let cevir = sayi.toString();
    let ekle="";
    for (let i = cevir.length-1; i >=0; i--) {
        ekle += cevir[i];       
    }
    return parseInt(ekle);
}

console.log(ters(123));

console.clear();

function reserveNum1(num) {
    let reserve = 0;
    while(num != 0) {
       reserve *= 10;
       reserve += num%10;
       num = Math.trunc(num/10);
       console.log("nmu",num);
    }
    return reserve;
}

console.log(reserveNum1(123));
console.clear();


// 1000 e kadar ters sayi ile polindrom kontrolu

function reserveNum1(number) {
    let reserve = 0;
    let num = number;
    while(num != 0) {
       reserve *= 10;
       reserve += num%10;
       num = Math.trunc(num/10);
    }
    return reserve === number ? `${number} Polindromdur` : null;
}

for (let i = 0; i < 1000; i++) {
    let x = reserveNum1(i);
    x===null ? null : console.log(x);   
}

console.clear();

const bolen1 = (sayi) =>{
    let toplam=0;

    for (let i = 1; i <= sayi; i++) {

        sayi%i===0 ? toplam +=i : null;

    }
    if(toplam===sayi*2) {
        return "mükemmel sayi";
    }
    else return "mükemmel sayi degildir";

}
console.log(bolen1(6));


let bolenToplami = 0;

function mukemmelMi(number){
    for(let i = 1; i <= number; i++){
        if(number % i === 0) bolenToplami += i
    }
    return bolenToplami === number*2 ? `${number} mükemmel sayidir.` : `${number} mükemmel sayi degildir.`
}

console.log(mukemmelMi(6));
console.clear();

function pozitif(params) {
    sum="";
    for (let i = 1; i <=params; i++){ 
        if(params%i===0){
            sum += i.toString() + " "
        }
    } return `bölenler: ${sum}`;
}

console.log(pozitif(12));