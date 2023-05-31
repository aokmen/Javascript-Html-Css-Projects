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
let ff = "sen bir gun ama geleceksin";
let dd = ff.split(" ");
for (let i = 0; i < dd.length; i++)  {(dd[i]==="ama1") ? console.log("evet") : null;}

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
/*                                   Slice()                                  */
/* -------------------------------------------------------------------------- */

// slice(başlangıç index numarası , bitiş index numarası ) başlangıç ve bitiş arasındaki karakterleri alır

// - eksi degerler alarak sondan baslar

message = "Parcalama";

console.log(message.slice(3,5));  //ca

console.log(message.slice(3));     //calama

console.log(message.slice(-5,-3)); //al



/* -------------------------------------------------------------------------- */
/*                                 substring()                                */
/* -------------------------------------------------------------------------- */
// substring(başlangıç index numarası , bitiş index numarası ) başlangıç ve bitiş arasındaki karakterleri alır
// slice metodu ile tek fark - negatif sayi degeri kullanilmaz yani sondan baslayamaz

console.log(message.substring(6,8));

/* -------------------------------------------------------------------------- */
/*                                 substr()   - Deprecated                             */
/* -------------------------------------------------------------------------- */
// substr(başlangıç index numarası ,kac adet karakter alacak)

console.log(message.substr(3,5));  // 5 kac adet karakter sayisi

/* -------------------------------------------------------------------------- */
/*                                 replace()                             */
/* -------------------------------------------------------------------------- */
// String degerinde degisiklik yapma yerine yazma

 message="Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.";
 console.log(message.replace("kel","ihtiyaci"));  // tek bir bosluk degisir

 console.log(message.replaceAll(" ","-")); // tüm bolsluklar degisir

 let variable = "kullanıcı adı";

 console.log(variable.replaceAll("ı","i").replace(" ", "_").toUpperCase());


/* -------------------------------------------------------------------------- */
/*                                 search()                                   */
/* -------------------------------------------------------------------------- */
// includes, indexOf, search, match gibi benzer metotlarla cumle veya kelime icinde karakterleri bulma

//? includes() metodu "..." degerini iceriyor mu? => true ya da false döndürür(casesensitive)

console.log(message.includes("kel"));

message.includes("zaman") ? console.log("bu cümle icinde zaman kelimesi gecer") : console.log("bu cümle icinde zaman kelimesi icermez");

let url = "https://www.clarusway.com";
url.includes("https") ? console.log("güvenli bir site") : console.log("guvenli degil");

let mail = "clarusway@web.com";
mail.includes("@") ? console.log("bu bir mail adresidir") : console.log("bu bir mail adresidi degil");

const adress = (mail) => console.log(mail.includes("@"));

adress("clarusway@web.com");


//--------------------------------------indexOf--------------------------

//? indexOf(aranacak metin, konum) Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir

console.log(message.indexOf("kel"));  //40
console.log(message.indexOf("keli"));  //-1 (ifade olmadigi icin)
word="yenigün";
console.log(word.indexOf("i",4)); //-1 (ifade olmadigi icin)

//? search metodu > metin icinde baska bir metni arar. Bulmazsa -1 döner.
console.log(message.search("hayat"));
//regex > regular expressions : search metodunda regex kullanilabilir

word="yenigün";
// /i : büyük kücük harf farketmez
// /g :global olarak arama yapar
console.clear();
console.log(word.search(/Ü/i));

let kelimeKontrol = "Bu cümlede türkce karakterler vardir"

console.log(kelimeKontrol.search(/[aeioöü]/i));

console.log(kelimeKontrol.replaceAll(/[üc]/gi,"")); 

/* -------------------------------------------------------------------------- */
/*                                 trim()                                     */
/* -------------------------------------------------------------------------- */

// bastan ve sondan bosluklari siler

let cumle = "   Clarus Full Stack    ";
console.log(cumle.trim());
console.log(cumle.trimStart());
console.log(cumle.trimEnd());

/* -------------------------------------------------------------------------- */
/*                                 startsWith()                               */
/* -------------------------------------------------------------------------- */

// startsWith() ve endsWith() bastan veya sondan boyle bir karakter var mi? true ve false döndürür
metin = "Clarusway";

 console.log(metin.startsWith("C"));  //true
 console.log(metin.startsWith("Cl"));  //true
 console.log(metin.endsWith("ayi"));  //false

console.clear();
console.log(word.search(/Ü/i));



kelimeKontrol = "Bu cumlede türkce karakterler vardir"

console.log(kelimeKontrol.search(/[aueioöü]/i));

console.log(kelimeKontrol.replaceAll(/[üc]/gi,"")); 

console.clear();

// -----------------------------------1- Hosgeldin Kullanici Adi--------------------------


const user = () => {
    let ad = prompt("Kullanici adini giriniz:")
    return `${ad.toUpperCase()} Sitemize Hoşgeldiniz`
}
 console.log(user());

// -----------------------------------2- Romen Rakami-------------------------------------
const cevir = (romen) =>{
    romen = romen.split("");
    let sum = 0;
    for (let i = 0; i < romen.length; i++) {
    
    
        switch (romen[i]) {
            case "X":
             sum +=10;   
                break;
            case "V":
             sum +=5;   
                break;
            case "I":
             sum +=1;   
                break;
    
            default:
                break;
        }
        
    }
    return sum;
}

console.log(cevir("XXV"));
// -----------------------------------3- Email Kullanici Adi------------------------------

// let email = "martin@clarusway.com";
// console.log((email.split("@"))[0]);

// -----------------------------------4- Kelimeyi substring ayirma------------------------

// function Substrings(word) {
//     let word2="";
//     for (var i = 0; i < word.length; i++) {
//       for (var j = i + 1; j <= word.length; j++) {
//        word2 += (word.slice(i, j)).concat(" ");
//       } 
//     }
//     return word2;
//   }

//   console.log(Substrings("abc"));
  
//   console.clear();

// -----------------------------------5- Kelimeyi camelcase yapma------------------------

// let cumlem = "Bugün günesli bir gün";
//  words = cumlem.toLowerCase().split(" ");
// for (let i = 1; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);  
// }

// console.log(words.join(""));


