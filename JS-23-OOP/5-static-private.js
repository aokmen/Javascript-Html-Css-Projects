//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book{
    //!private degisken tanimlamasi
    #id;
    //!static degisken tanimlamasi
    static sayac=0;

    constructor(title,yazar,year){
        this.title=title,
        this.yazar=yazar,
        this.year=year,
        this.#id=44,
        this.getirTitle=function(){
            return this.title
        }
        Book.sayac++
    }

    getId(){
        return this.#id
    }
    setId(id){
        this.#id=id
    }
}
const book = new Book("simyaci","ipek bilir",1980)
console.log(book);

console.log(Book.sayac);
console.log(book.id);
console.log(book.year);
console.log(book.getId());
console.log(++Book.sayac);


book.setId("55")
console.log(book.getId());

//! OOP
// 1-INHERİTANCE
// 2-POLYMORPHISM
// 3-ENCAPSULAION
// 4-ABSTRACT

//?INHERITANCE(kalıtım). bir kalıp oluşturulup o kalıp a ait new keywordüyle child lar yazılır, ayrıca extends keyword üyle ilk kalıptan aynı özelliklerde yeni kalıplar oluşturulup, yeni yakıplara ek veriler eklenir. (prototype ten de bahsedilebilir)

//*2- In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )
//!3- ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.