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

console.clear();

/* -------------------------------------------------------------------------- */
/*                               OBJECT METHODS                               */
/* -------------------------------------------------------------------------- */

// ic ice (nested) objects
const workerList =

workersList = {
    person1: {
      name: "Hery",
      lastname: "Strevold",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
    person2: {
      name: "Harold",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 40000,
      drivingLicense: true,
    },
    person3: {
      name: "Gery",
      lastname: "Strevy",
      DateOfBirth: 1998,
      job: "devOps",
      salary: 30000,
      drivingLicense: true,
    },
  };
  // Personel 2 nin ad ve maasini yazdirin

  console.log(workerList.person2.DateOfBirth);
  console.log(workerList.person2.name);
  console.log(workerList.person2.salary);
//! Bu gösterimde köseli parantezler icinde degiskenler verilebilir
  console.log(workerList["person2"].name);
  console.log(workerList["person2"].salary);

  let pName="person2"
  console.log(workerList[pName].name);

  // For in
  //WorkerList icindeki salary'leri yazdiralim

  for (p in workerList) {
    console.log(workerList[p].DateOfBirth);
  }

// Object.keys (object icindeki degiskenler :keyler)
// Object.values (object icindeki degerler :value)
// Object.entries (object icindeki herseyi verir)

console.log(Object.keys(workerList));
console.log(Object.values(workerList));
for (x of Object.values(workerList)) {
    console.log(x.name);   
}
console.clear();
// DEveloper olan elemanlarin isimlerini ve maaslarini yazdirin
const developersList = Object.values(workerList).filter((arg) => arg.job === "developer")
console.log(developersList.map((p) => `Developer ${p.name}nin maasi: ${p.salary}`));

// const developersList = Object.values(workersList)
//   .filter((x) => x.job === "developer")
//   .map((p) => console.log(`Developer ${p.name}'nin maaşı: ${p.salary}`));

Object.values(workersList)
  .filter((x) => x.job === "developer")
  .forEach((p) => console.log(`Developer ${p.name}'nin maaşı: ${p.salary}`));

  /* -------------------------------------------------------------------------- */
  /*                     JSON => JAVASCRIPT OBJECT NOTATION                     */
  /* -------------------------------------------------------------------------- */

  const team = [
    {
      name: "Harold",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
    {
      name: "Harold",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 40000,
      drivingLicense: true,
    },
    {
      name: "Fernand",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 7000,
      drivingLicense: true,
    },
  ];

  console.log(team[0].name);

  team.map((arg) => console.log(arg.salary) )

  team.push(
    {
        name: "Neyron",
        lastname: "Gernary",
        DateOfBirth: 2003,
        job: "Tester",
        salary: 25000,
        drivingLicense: false,

    }
  )
  console.log(team);

// team dizisindeki her elemanin meslegini gösteriniz
team.forEach((arg) => console.log(arg.job));


// team dizisindeki masslarin 10% zam yapilmis yeni bir diziye aktarin
const newSalary= team.map((arg) => arg.salary +=arg.salary*0.1);
console.log(newSalary);

const teamFullname = team.map((arg) => {
    return {
        fullname : arg.name.toUpperCase()+" "+arg.lastname.toUpperCase(),
        salary : arg.salary += arg.salary*0.1
    }
})
console.log(teamFullname);

const newListe = team.filter((arg) => arg.salary < 10000)
.map((arg) => {
    return { lastSalary : arg.salary,
                name: arg.name    
    } 
});
console.log(newListe);

console.clear();
//Bir dizinin maas ortalamalari
const Avarage = team.reduce((sum,item)=>sum +=item.salary,0) / team.length;
console.log(Avarage);

