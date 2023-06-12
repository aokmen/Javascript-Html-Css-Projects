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