//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

const book1 = {
    title:"Karamazov Kardesler",
    yazar:"dostyevski",
    year:1980,
    ozetFunction:function (){
        console.log(`${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir`);
    }
}

// object ler içinde fonksiyon yazacaksak this keyword ü (object teki değişkenleri kullandığımı anlasın diye) kullanıyoruz. arrow function this keyword ünü desteklemediği için bu şekil kullanımlarda decleration function yolunu tercih ediyoruz
console.log(book1);
book1.ozetFunction()

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir. Cünkü cok fazla yeni obje olusturdugumuz zaman book1 deki gibi ayni sekilde ayri obje olusacak,cok kod kalabaligi olusacak. Ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
  // DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)