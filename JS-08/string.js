//!------------STRING PROPERTIES AND METHODS------------

//--------------------STRING PROPERTY-------------------
//? length  : String degerinin uzunlugunu buluyor

let course="Clarusway";

console.log(course.length);
console.log("Merhaba".length);


let text="Javascript";


function yazi(text){
    for (let i = 0; i < text.length-1; i++) {
       console.log(text); 
    }
}
yazi("Javascript");
//---------------------------------------------------------------------------
console.clear();

const yazi1 = (metin) =>{
    for (let i = 0; i < metin.length-1; i++) {
        console.log(metin);
    }
}
yazi1("Merhaba");

console.clear();

const text1 = (yazi) => console.log(yazi[yazi.length-1]);

text1("Google");

console.clear();
/* -------------------------------------------------------------------------- */
/*                         String Yapısı ve Indexleme                         */
/* -------------------------------------------------------------------------- */
// Stringlerin her bir karakterine [index numarası] ile ulaşılabilir 


let course1 = "Clarusway";
course1[6] ="v";
console.log(course1);

console.clear();


let text2 = "Clarusway";
for (let i = 0; i < text2.length; i++) {
    console.log(text2[i]);  
}

console.clear();

/* -------------------------------------------------------------------------- */
/*                               String Methods                               */
/* -------------------------------------------------------------------------- */
// Stringlerin her bir karakterine [index numarası] ile ulaşılabilir 

//? str.toUpperCase() 
// Bu metot, bir dizeyi büyük harflere dönüştürür. Orijinal dizeyi değiştirmez, sadece büyük harflerden oluşan bir kopyasını döndürür.
//? str.toLowerCase()
//  Bu metot, bir dizeyi küçük harflere dönüştürür. Orijinal dizeyi değiştirmez, sadece küçük harflerden oluşan bir kopyasını döndürür.
//? str.split()
// Bu metot, bir dizeyi belirtilen ayırıcıya göre böler ve bir diziye dönüştürür. Ayırıcı parametresi belirtilmezse, dize boşluklara göre bölünür. Bölünmüş dizeyi dizi olarak döndürür.
//? str.slice()
// Bu metot, bir dizeden belirli bir bölümü keserek yeni bir dize döndürür. İki parametre alır: başlangıç ve bitiş indeksi. Başlangıç indeksi dahil olmak üzere, bitiş indeksi hariç tutulur. Negatif indeksler, dize sonundan geriye doğru saymayı sağlar.
//? str.substring()
//  Bu metot, bir dizeden belirli bir bölümü keserek yeni bir dize döndürür. İki parametre alır: başlangıç ve bitiş indeksi. Başlangıç indeksi dahil edilir, ancak bitiş indeksi dahil edilmez. Negatif indeksler, sıfır olarak kabul edilir.
//? str.substr()
// Bu metot, bir dizeden belirli bir bölümü keserek yeni bir dize döndürür. İki parametre alır: başlangıç indeksi ve uzunluk. Başlangıç indeksi dahil edilir ve kesilecek karakter sayısını belirlemek için uzunluk parametresi kullanılır.
//? str.replace()
// Bu metot, bir dizede belirli bir deseni başka bir desenle değiştirir. İki parametre alır: değiştirilecek desen ve yerine gelecek desen. Sadece ilk eşleşme değiştirilir. Dizeyi değiştirilmiş haliyle döndürür.
//? str.includes()
// Bu metot, bir dizenin belirli bir alt dizeyi içerip içermediğini kontrol eder. Eşleşme bulunduğunda true, bulunamadığında false döndürür.
//? str.indexOf()
// Bu metot, bir dizenin belirli bir alt dizenin ilk indeksini döndürür. Eşleşme bulunursa, alt dizenin başlangıç indeksini döndürür. Bulunamazsa -1 döndürür.
//? str.search()
// Bu metot, bir dizenin belirli bir deseni içerip içermediğini kontrol eder. Desen bir regular expression (düzenli ifade) olabilir. Eşleşme bulunursa, ilk eşleşmenin indeksini döndürür. Eşleşme bulunamazsa -1 döndürür.
//? str.trim()
// Bu metot, bir dizenin başındaki ve sonundaki boşlukları kaldırır. Orijinal dizeyi değiştirmez, sadece boşluklardan arındırılmış bir kopyasını döndürür.
//? str.startsWith()
// Bu metot, bir dizenin belirli bir alt dizeyle başlayıp başlamadığını kontrol eder. Eşleşme bulunursa true, bulunamazsa false döndürür.
//? str.endsWidth()
//  Bu metot, bir dizenin belirli bir alt dizeyle bittiğini kontrol eder. Eşleşme bulunursa true, bulunamazsa false döndürür.


let str= "Clarusway Full stack Wep devepoler";

//-----------------------------toUpperCase()-------------------------------------

console.log(str.toUpperCase());


//-----------------------------toLowerCase()-------------------------------------

console.log(str.toLowerCase());

//-----------------------------toLocaleUpperCase()---------------------------------

let city = "istanbul";
console.log(city.toLocaleUpperCase("tr"));  // İSTANBUL

console.clear();

//-----------------------------str.split()-------------------------------------

let atasoz="Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.";

let yenisoz= atasoz.split(" ");
console.log(yenisoz[4]);

let text5=" Clarusway";

console.clear();

const ayir = (atasoz) =>{

let yenisoz= atasoz.split(" ");
 for (let i = 0; i < yenisoz.length-1; i++) {
    yenisoz[i] === "ama" ? console.log("ama var")
     : null;
 }
}

console.log(ayir("ama"));

//-----------------------------str.reserve()-------------------------------------

//? reserve verilen arrayi tersinde siralar
//? join birlestirmek icin kullanilir

let message = "Harika bir gün";
console.log(message.split(" ").reverse().join(" "));

let word = "merhaba";
console.log(word.split("").reverse().join(""));

word === word.split("").reverse().join("") ? console.log("var") : console.log("yok");

date="23.05.2023";
console.log(date.split("."));

months="Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";
console.log(months.split(" / "));

//split ile sayı sınırı verilebilir. Kaç eleman alınacakonu sayıile belirtebiliriz.

console.log(months.split(" / ",5));
console.clear();

liste="Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand";
console.log(liste.split(";").join(" - "));

const text7 = (yazi) => console.log(yazi.split("").reverse().join(""));
text7("Javascript");

/* -------------------------------------------------------------------------- */
/*5-                                 Slice()                                  */
/* -------------------------------------------------------------------------- */

// slice(başlangıç index numarası , bitiş index numarası ) başlangıç ve bitiş arasındaki karakterleri alır

// - eksi degerler alarak sondan baslar

message = "Parcalama";

console.log(message.slice(3,5));  //ca

console.log(message.slice(3));     //calama

console.log(message.slice(-5,-3));
