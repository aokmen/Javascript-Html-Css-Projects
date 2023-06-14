let hastaKayit = [
    "Merve",
    "Sema",
    "Ayse",
    "Ali",
    "Ahmet",
    "Mustafa",
    "Hasan"
  ];
//   const yeniHasta =hastaKayit.map((arg) => arg.toUpperCase());
//   console.log(yeniHasta);

//   const yeniHasta2 =hastaKayit.map(function(arg) {return arg.toUpperCase()} );
//   console.log(yeniHasta2);

// const isCheck = hastaKayit.map((i) => i === "Ali" ? true : false );
// console.log(isCheck);
// const isCheck2 = hastaKayit.filter((i) => i === "Ali");
// console.log(isCheck2);

// const adj = ["clever","add"];
// const ly = adj.map((i) => i+"ly");
// console.log(ly);

// const newName = hastaKayit.filter((i) => i[0]==="A").forEach((i) => console.log( i.toUpperCase()));
// newName;

// const newName = hastaKayit.filter((i) => i.startsWith("A")).map((i) => i.toUpperCase()).filter((i) => i.length===4)
// console.log(newName);
// const statement = ["Merhaba","bugün","sicak"];

// console.log(statement.reduce((st,item)=>`${st} ${item}`,"hey"));

// const num=[3,6,8,9];
// const findTotal = num.reduce((sum,i) => { sum.push(i**2)
//     return sum
// },[] )
// console.log(findTotal);
// const person = new Object();
// person.name = "Ali";
// person.age = 30;

// const person2 =  person;

// console.log(person.name);
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person("Ahmet",40);
// const person2 = new Person("Azra",11);

// console.log(person1)
// console.log(person2)

// İşlev constructor'ı - this kullanılmadan
// function Person10(name, age) {
//     Person10.name = name;
//     Person10.age = age;
//   }
  
//   var person = new Person("John", 30);
//   console.log(person.name); // undefined
//   console.log(person.age); // undefined
  
  // Nesne constructor'ı - this kullanılmadan
//   var person = new Object();
//   person.name = "John";
//   person.age = 30;
//   console.log(person.name); // "John"
//   console.log(person.age); // 30

// const personelKayit={
//     name:"Latif",
//     lastName:"Gürsel",
//     dateofBirth:2000,
//     dirivingLicense:true,
//     workExp:["tester","developer","team lead"],
//     adress:{
//         city:"Ankara",
//         street:"Cankaya",
//         postalCode:45215,
//     },
//     cal : function () {
//         return new Date().getFullYear() - this.dateofBirth;
//     },
//     ages : function () {
//         return `${this.name}'in yasi ${this.cal()} yasindadir`
//     }
// }
// console.log(personelKayit.ages());

// const workerList = {
//     person1: {
//     name: "Hery",
//     lastname: "Strevold",
//     DateOfBirth: 2000,
//     job: "developer",
//     salary: 8000,
//     drivingLicense: true,
//   },
//   person2: {
//     name: "Harold",
//     lastname: "Strevy",
//     DateOfBirth: 2002,
//     job: "developer",
//     salary: 40000,
//     drivingLicense: true,
//   },
//   person3: {
//     name: "Gery",
//     lastname: "Strevy",
//     DateOfBirth: 1998,
//     job: "devOps",
//     salary: 30000,
//     drivingLicense: true,
//   },
// };
// console.log(workerList.person2.name);
// console.log(workerList.person2.lastname);
// console.log(workerList["person3"].job);

// let pName = "person1";
// console.log(workerList[pName].name);

// for ( p in workerList) {
//     console.log(workerList[p].name);
// }
// console.log(Object.entries(workerList)[0][0]);

// console.log(Object.values(workerList)[0]);
// for (i in Object.values(workerList)) {
// Object.values(workerList)[i].job === "developer" ? console.log(`${Object.values(workerList)[i].name}'in maasi: ${Object.values(workerList)[i].salary}`)  : null
// }
// const obj = Object.values(workerList)
// const newList = obj.filter((i) => i.job==="developer");
// const result = newList.map((i) => `${i.name}'in maasi:${i.salary}`);

// for (const iterator of result) {
//     console.log(iterator);
// }

// const team = [
//     {
//       name: "Harold",
//       lastname: "Strevy",
//       DateOfBirth: 2000,
//       job: "developer",
//       salary: 8000,
//       drivingLicense: true,
//     },
//     {
//       name: "Harold",
//       lastname: "Strevy",
//       DateOfBirth: 2002,
//       job: "developer",
//       salary: 40000,
//       drivingLicense: true,
//     },
//     {
//       name: "Fernand",
//       lastname: "Strevy",
//       DateOfBirth: 2000,
//       job: "devOps",
//       salary: 7000,
//       drivingLicense: true,
//     },
//   ];

// team.forEach((i)=>console.log( i.job) );
// const newSalary = team.map((i) => console.log( i.salary +=i.salary*0.1));
// newSalary;

// const newList = team.map((i) => {
//     return{
//         fullName : i.name.toUpperCase() + " " + i.lastname.toUpperCase(),
//         salary : i.salary +=i.salary*0.1
//     }
// })
// console.log(newList);

// const newLists = team.filter((i) => i.salary < 10000).map((i) => {
//     return{
//         leastSalary: i.salary,
//         name: i.name
//     };
// });
// console.log(newLists);

// const Avarage = team.reduce((sum,item)=>sum +=item.salary,0) / team.length;
// console.log(Avarage);

// const cars={
//     name:"BMW",
//     model:1999,
//     engine:1.6,
//     color:["red","black"]
// }

// const {name,model:yil} = cars;
// console.log(yil);

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
      name: "Henry",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 40000,
      drivingLicense: true,
    },
    {
      name: "Fernando",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 7000,
      drivingLicense: true,
    },
  ];
team.forEach((i) => {
    console.log("Name:",i.name);
    console.log("Job:",i.job);
    console.log("Salary:",i.salary);
    console.log("------------------");
})
team.forEach((i) => {
    const {name,job,salary} = i;
    console.log("Name:",name);
    console.log("Job:",job);
    console.log("Salary:",salary);
    console.log("__________________");
})

console.clear();

// const getInfo = () =>{
//     return {
//         id:new Date().getTime(),
//         pName:"Mac",
//         price:45000
//     }
// }
// console.log(getInfo());
// const {id,pName,price} = getInfo();

// console.log(`"${id}" nuramali ${pName} ürününün fiyati: ${price}`);

const cal = (list) => {
    return list.reduce((sum,i) =>sum+i )
}
console.log(cal([4,6,8,12,34,56]));

const data={
    id:new Date().getTime(),
    productName:"Microphone",
    price:2000
  }
  const showPro = ({productName,price})=>{
        console.log(productName);
        console.log(price);
  }
  showPro(data);
  const stock = ({productName,id}) => {
    return id % 2 === 1 ?console.log(`${productName} id: ${id} ürünü merkez depoda`)  : console.log(`${productName} id: ${id} ürünü sube depoda`); 
  }
stock(data);

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

const checkDriving = ({drivingLicense,names}) => {
    return drivingLicense ? console.log(names) : null;
    }
    
    workersList.map((p)=> checkDriving(p))

    console.clear();

    const nameList=["John","Henry","David","John","David","Nathan","Scott"]

// const isimTekrarlari=nameList.reduce((isimToplami,isim)=>{
//     if (isim in isimToplami)
//      return console.log(isimToplami[isim]++); 
  
// }, {})
// console.log(isimTekrarlari);

const tekrar = nameList.reduce((sum,i) => {
  if(i in sum) {sum[i]++;
  console.log("i:",i);
  console.log("sum[i]:",sum[i]);
}
    else sum[i] = 1;
    console.log("sum:",sum);
    return sum;   
  },{}) 




// result
// {John: 2, Henry: 1, David: 2, Nathan: 1, Scott: 1}
// David: 2
// Henry: 1
// John: 2
// Nathan: 1
// Scott: 1