//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book{
    constructor(a,b,c){
        this.title = a,
        this.yazar = b,
        this.year = c,
        this.ozetFunction = function(){
            return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`
        }
    }
    yilHesapla(){
        return 2023 - this.year
    }
}
const book1 = new Book("times","Johny Depp",1960,"september")
console.log(book1);
console.log(book1.yilHesapla());


class Dergi extends Book{
    constructor(yazar,title,year,d){
        super(yazar,title,year) //Book tan miras almak icin
        this.mounth = d
    }
}

// Eski yöntem:

// function Dergi(title,yazar,year,d){
//     Book.call(this,title,yazar,year)
//     this.mounth=d // book dan miras aldi ve mounth ekledi
// }

const dergi1 = new Dergi("Kasagi","Ömer seyfettin",1932,"aralik")
console.log(dergi1);
console.log(dergi1.ozetFunction());
console.log(dergi1.yilHesapla());

//? yukarıdaki Dergi (dedesi Book tan türeyen) den türettiğimiz bir kalıp
class Gazete extends Dergi {
    constructor(yazar, title, year, mounth, b) {
      super(yazar, title, year, mounth);
      this.fiyat = b;
    }
  }
  
  const gazete=new Gazete("sabah","aziz nesin", 1969, "aralik",50)
  console.log(gazete);