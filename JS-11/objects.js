/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */


//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) yapısı kullanılır

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

/* -------------------------------------------------------------------------- */
//?                         Object Olusturma Metodlari                        */
/* -------------------------------------------------------------------------- */

// 1. Object() class inda New operatorüyle olusturma
const car = new Object();
car.brand="BMW"
car.model=2000
car.isCrashed=true
console.log(car);
console.log(car.brand);

const car1 = new Object();
car1.brand="Volvo"
car1.model=1998
car1.isCrashed=false
console.log(car1);
console.log(car1.brand);

// 2. Object Constructor ile object olusturma => OOP detaylari anlatilacak

function Personal(id,ad,maas) {
    this.id=id,
    this.ad=ad,
    this.maas=maas
}
const p1=new Personal("125222","Ferhat",15000);
console.log(p1);
console.log(p1.ad);
const p2 = new Personal("9125622","Ali",25000)
console.log(p2);
console.log(p2.id);

// 3. Object Literal {} parantezlerle olusturulur
// {} icine key value ciftleri olarak yazilir
const personelKayit={
    name:"Latif",
    lastName:"Gürsel",
    dateofBirth:2000,
    dirivingLicense:true,
    workExp:["tester","developer","team lead"],
    adress:{
        city:"Ankara",
        street:"Cankaya",
        postalCode:435000
    },
    calculateAge:function () {
        return new Date().getFullYear() - this.dateofBirth //personelKayit.dateofBirth
    },
    formattedAge:function (){
        return `${this.name}'nin yaşı ${this.calculateAge()}  yaşındadır`
    },
    // formattedAge2: ()=>{
    //     return `${this.name}'nin yaşı ${this.calculateAge()}  yaşındadır`
    // }
}


console.log(personelKayit.name);
console.log(personelKayit.calculateAge());

console.log(this.personelKayit);

console.log(personelKayit.address);
console.log(personelKayit.dirivingLisence);
console.log(personelKayit.calculateAge());

console.log(personelKayit.formattedAge());

console.log(this);