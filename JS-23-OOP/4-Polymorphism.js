//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )


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
//Overriding

class Dergi extends Book{
    constructor(yazar,title,year,d){
        super(yazar,title,year) 
        this.mounth = d
    }
//Overriding yaptigimiz fonksiyon
    yilHesapla(){
        return `${this.title} dergisi cok güzeldir`
    }
}
const dergi = new Dergi("Stientific","Ein Stein",1900,"üylül")
console.log(dergi.yilHesapla());

//Overloading


function getir(arg1,arg2,arg3) {
    console.log(arg1,arg2,arg3);
}
function getir(arg1) {
    console.log(arg1);
}

getir("naber")
getir("naber1","Hi","merhaba")