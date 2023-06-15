
// You are given an array of objects representing a collection of products, each with a name, price, and
// category. Your task is to use map, filter, and reduce to calculate the average price of products in each
// category, and then return an array of objects containing only the categories that have an average price
// above 50.


const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  ];


  // [
  //   { category: 'Clothes', average: 55 },
  //   { category: 'Electronics', average: 55 }
  // ]

const newList1 = products.filter(((arg) =>arg.category==="Electronics"))
const newList2 = products.filter(((arg) =>arg.category==="Clothes"))

const averageElectronics = newList1.reduce((sum,i)=>sum+i.price,0)/newList1.length
const averageClothes = newList2.reduce((sum,i)=>sum+i.price,0)/newList1.length

const findAverage = [
  {category:"Clothes", average:averageClothes},
  {category:"Electronics", average:averageElectronics},
]
console.log(findAverage);
console.clear();
/* ---------------------------- ---- ---------------------------------- */
const findAverage2 = () =>{
let sumElec = 0; countElec = 0; sumClot = 0; countClot = 0 ;
for (i of products) {
  
  if (i.category==="Electronics") {sumElec += i.price; countElec++;}
  if (i.category==="Clothes") {sumClot += i.price; countClot++;}
 

}
return [
  {category:"Clothes", average:sumClot/countClot},
 {category:"Electronics", average:sumElec/countElec},
]

}
console.log(findAverage2());
