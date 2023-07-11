//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//? Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//? arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik



function Book(a,b,c){
this.title = a,
this.yazar = b,
this.year = c,
this.ozetFunction = function(){
    return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`
}
}

const book1 = new Book("karamazov kardesler","dostyevski",1980)
const book2 = new Book("yaprak dökümü","resat nuri",1950)
console.log(book1);
console.log(book1.ozetFunction);

// Kalipta prototype alanina ulasmak icin alttaki gibi bir syntax kullanilir
// Book un prototype alanina yeni bir parametre ekledik ama bellekte yer kaplamaz, ihtiyac olunca child lar kullanir.

Book.prototype.tür="roman"
Book.prototype.yilHesapla=function(){
    return 2023-this.year
}

//prototype bellekte yer kaplamadi, cagirinca geldi
console.log(book1.tür);
console.log(book2.yilHesapla());

//? Inheritance (Kalitim)

function Dergi(title,yazar,year,d){
    Book.call(this,title,yazar,year)
    this.mounth=d // book dan miras aldi ve mounth ekledi
}

//*Book object inden (kalıbından) türetilen Dergi kalıbına, Book un prototype alanındaki bilgiler (ES5 te) direk gelmez,gelmesini istiyorsak alttaki kodu (daha child oluşturmadan önce)yazmalıyız

Dergi.prototype = Object.create(Book.prototype)
const dergi1 = new Dergi("times","Johny Depp",1960,"september")
console.log(dergi1);
console.log(dergi1.ozetFunction());
console.log(dergi1.yilHesapla());