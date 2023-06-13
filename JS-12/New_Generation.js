/* -------------------------------------------------------------------------- */
/*                                DESTRUCTURING                               */
/* -------------------------------------------------------------------------- */
const cars={
    name:"BMW",
    model:1999,
    engine:1.6,
    color:["red","black"]
}
//TODO 1. Klasik Yöntem 

console.log(cars.name);
console.log(cars["name"]);

//TODO 2. Yöntem Destructuring
const {name,engine,model} = cars;

//! objenin valuelarını atacağımız değişken isimleri objenin propertyleri ile aynı ismi taşımalı

console.log(name);
console.log(model);
console.log(engine);

// Alinan degeri farkli bir degisken olarak tanimlamak icin

const{color:renk} = cars;
console.log(renk);
console.clear();
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
      name: "Hery",
      lastname: "Ford",
      DateOfBirth: 2002,
      job: "developer",
      salary: 40000,
      drivingLicense: true,
    },
    {
      name: "Fernand",
      lastname: "Lody",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 7000,
      drivingLicense: true,
    },
  ];

 team.forEach((arg) => {
    console.log("Name:",arg.name);
    console.log("Job:",arg.job);
    console.log("Salary:",arg.salary);
    console.log("---------------------");
 })

 team.forEach((arg) => {
    const {name,job,salary} = arg
    console.log("Name:",name);
    console.log("Job:",job);
    console.log("Salary:",salary);
    console.log(". . . . . . . . . . . .");
 })
// Fonksiyon olusturma

 const getIngo = () =>{
    return {
        id:new Date().getTime(),
        productName:"MacBook",
        price:45000
    }
 }
 console.log(getIngo());

 const {id,productName,price } = getIngo();
 console.log(`${productName} ürününün fiyati:${price}`);

 /* -------------------------------------------------------------------------- */

//   Primitive veri türlerinde fonsiyona değer gönderme

const showName=(name)=> console.log(name);
showName("Sema")

//   non -primitive Array, obje

const calculate=(liste)=>{
 return  liste.reduce((t,i)=>t+i)
}
console.log(calculate([4,6,8,12,34,56]));
/* -------------------------------------------------------------------------- */

const data={
  id:new Date().getTime(),
  productName:"Microphone",
  price:2000
}

// const showProducts=(data)=>{
// const {productName,price} =data

// console.log(productName);
// console.log(`${productName} ürünün indirimli fiyatı: ${price *0.8}`);

// }

const showProducts=({productName,price})=>{
   
    
    console.log(productName);
    console.log(`${productName} ürünün indirimli fiyatı: ${price *0.8}`);
    
    }

showProducts(data)

const stock = ({productName,id}) =>{
    return id%2===1 ? console.log(`${productName} ürünü merkez depodadir`) : console.log(`${productName} ürünü sube depodadir`) 
}
stock(data);
console.clear();


workersList = [
    {
      names: "Harvey",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
  {
      names: "Harold",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 40000,
      drivingLicense: true,
    },
    {
      names: "Hans",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 30000,
      drivingLicense: true,
    },
];
const {drivingLicense,names} = workersList
console.log(drivingLicense);

/* -------------------------------------------------------------------------- */
/TODO                             Önemli bir kullanim                         */
/* -------------------------------------------------------------------------- */
const checkDriving = ({drivingLicense,names}) => {
return drivingLicense ? console.log(names) : null;
}

workersList.map((p)=> checkDriving(p))

/* --- ------------------------------------------------------------------ --- */
const nameList =["Ayse","Elif"]
const[p1,p2]=nameList
console.log(p1);

/* -------------------------------------------------------------------------- */
/*                                    REST (...)                              */
/* -------------------------------------------------------------------------- */

// fonksiyonlarda islemistik
// function decleration cok fazla gönderilen parametreleri => arguments
function argCheck() {
  console.log(arguments);
}
argCheck(45,7,44,9,4,"Merhaba")

/* ------------------------------------ - ----------------------------------- */

// arrow funtionlarda ...(rest) gelen parametreleri almak icin kullanilir.
// fonksiyona gelen primitive degerleri de bir diziye dönüstürmüs olu.
const arrowCheck=(a,b,...deger)=>{
  console.log(a);
  console.log(b);
  console.log(deger);
}
arrowCheck(45,7,44,9,4,"Merhaba")

/* -------------------------------------------------------------------------- */
//Rest parameter must be last formal parameter
// rest operatoru mutlaka sonda olmalı
// const arrowCheck=(...deger,a,b)=>{
//   console.log(a);
//   console.log(b);
//   console.log(deger);
//   }
  
//   arrowCheck(45,56,7,8,34,5,6,7,8,"Merhaba")

//? Rest Operatörünün Arraylerde kullanimi

const car=["BMW","Mercedes","audi","renault","ferrari","opel","Mazda","togg"];

const [a,b,...restCars] = car;

console.log(a);
console.log(b);
console.log(restCars);

//? Rest Operatörünün Objectlerde kullanimi

personel = 
    {
      pName: "David",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    }

const {pName,lastname,...info} = personel;
console.log(`personelimizin adi ${pName}`);
console.log(`personelimizin soyadi ${lastname}`);

console.log(info);  // Console da her zaman icerinin ne tür oldugunu bilmek lazim >> Bu bir Object

console.log(info.DateOfBirth);
console.log(info.drivingLicense);

const {...hepsi}=personel; 
console.log(hepsi.pName);
console.log(hepsi.job);
console.log(hepsi["pName"]);
console.log(hepsi["job"]);

/* ----------------------------------- --- ---------------------------------- */

const total =(...deger)=>{
  return deger.reduce((sum,i) => sum+i)
}
console.log(total(42,12,55,3,8,2));

/* -------------------------------------------------------------------------- */
/*                             SPREAD ISLEMI (...)                            */
/* -------------------------------------------------------------------------- */

// Array concatanation

const flyingVehicles = ["aircraft", "helicopter", "drone"];
const automobile = ["truck", "suv", "Car"];

const allVehicles = [flyingVehicles,automobile]; // [Array(3), Array(3)]
console.log(allVehicles);

const allVehicles2 = [...flyingVehicles,...automobile] // ['aircraft', 'helicopter', 'drone', 'truck', 'suv', 'Car']
console.log(allVehicles2);

const flyingVehicles2 = ["aircraft", "helicopter", "drone"];
const automobile2 = ["truck", "suv", "Car"];

// Araya bu sekilde eklemeler de yapilir
const allVehicles3 = [...flyingVehicles,"bicyle",...automobile]
console.log(allVehicles3);

//stringi harf harf parcalamak
let statement = "Havalar cok sicak";
const charSt = [...statement];
console.log(charSt);

const str = [..."Piknik"];
console.log(str);

/* -------------------------------------------------------------------------- */
console.log( Math.max(3,5,7,9,12,3));

const numberList = [3,5,7,9,12,3];
console.log(Math.max(...numberList));


 /* ------------------------- Object'leri birlestirme ------------------------ */
const myObj={ a:4,b:6}
const yourObj={c:8, d:9}
console.log(myObj);
// Object kopyalama icin kullanilabilir

const copiedObj = {...myObj};
console.log(copiedObj);

copiedObj.b=34;

console.log(myObj);
console.log(copiedObj);

 /* ------------------------- Object'leri birlestirme ------------------------ */

const combinedObj ={...myObj,...yourObj};
console.log(combinedObj);
