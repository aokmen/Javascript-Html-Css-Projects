//! 15.soru
//Verilen dizideki her pozitif elemanın toplamını almak için bir kod yazın.
const input = [1, -4, 12, 0, -3, 30, 42, -150];
const pozitifSayilar = input.filter((item) => item > 0);
// console.log(pozitifSayilar);
const newArray = pozitifSayilar.reduce((acc, x) => (acc += x));
console.log(newArray);
//!16.soru
// Verilen adı kısaltmak ve adın baş harflerini döndürmek için bir kod yazın.
const input2 = "John Ronald Reuel Tolkien";
// const basHarfYazdir = (input2) => {
//   const isimDizisi = input2.split(" ");
//   const basHarf = isimDizisi.map((item) => item[0]).join("");
//   return basHarf;
// };
// console.log(basHarfYazdir(input2));
const yazdir = input2
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(yazdir);
//! 1. Yüksek Fiyatlı Ürün Kategorileri
// Size, her biri bir ad, fiyat ve kategoriye sahip bir ürün koleksiyonunu temsil eden bir dizi nesne verilir. Göreviniz, her kategorideki ürünlerin ortalama fiyatını hesaplamak için map, filter ve reduce kullanmak ve ardından yalnızca ortalama fiyatı 50'nin üzerinde olan kategorileri içeren bir dizi nesne döndürmektir.
//? soru
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
//******cozum */
const urunKategorisi = products.reduce((acc, product) => {
  const category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});
// Her kategori için ortalama fiyatı hesaplamak için mapi kullanın
const kategoriOrt = Object.keys(urunKategorisi).map((category) => {
  const sum = urunKategorisi[category].reduce(
    (acc, product) => acc + product.price,
    0
  );
  return {
    category: category,
    average: sum / urunKategorisi[category].length,
  };
});
console.log(kategoriOrt);
// Yalnızca ortalama değeri belirli bir eşiğin üzerinde olan kategorileri seçmek için filtreyi kullanın
const istenenOrt = kategoriOrt.filter((category) => category.average > 50);
console.log(istenenOrt);
//    beklenen sonuc
//    [
//     { category: 'Clothes', average: 55 },
//     { category: 'Electronics', average: 55 }
//    ]
//! 2. İK ve BT Departmanı
//Görev : Size, her birinin adı, maaşı ve bölümü olan, bir grup çalışanı temsil eden bir dizi nesne verilir. Göreviniz, her departman için ortalama maaşı hesaplamak için map, filter ve reduce kullanmak ve ardından yalnızca ortalama maaşı 65000'in üzerinde olan departmanları içeren bir dizi nesne döndürmektir.
const calisanlar = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];
//beklenen sonuc[
//  { department: 'HR', average: 71666 }
// ]
//?----------cozum----------------
//-------------önce departmentlara ayiralim----------
const calisanDepartmani = calisanlar.reduce((acc, x) => {
  const department = x.department;
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(x);
  return acc;
}, {});
console.log(calisanDepartmani);
//--simdi her departmentin ortalama maasini bulalim map ile---
const ortalamaMaas = Object.keys(calisanDepartmani).map((department) => {
  const sum = calisanDepartmani[department].reduce(
    (acc, x) => acc + x.salary,
    0
  );
  return {
    department: department,
    average: (sum / calisanDepartmani[department].length).toFixed(1),
  };
});
console.log(ortalamaMaas);
const yuksekOrtalama = ortalamaMaas.filter(
  (department) => department.average > 65000
);
console.log(yuksekOrtalama);


//! 1. Yüksek Fiyatlı Ürün Kategorileri
// Size, her biri bir ad, fiyat ve kategoriye sahip bir ürün koleksiyonunu temsil eden bir dizi nesne verilir. Göreviniz, her kategorideki ürünlerin ortalama fiyatını hesaplamak için map, filter ve reduce kullanmak ve ardından yalnızca ortalama fiyatı 50'nin üzerinde olan kategorileri içeren bir dizi nesne döndürmektir.
//? soru
// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
//? uzun yol
// const arr = products.filter((item) => item.category === "Electronics");
// const ort = arr.reduce((acc, x) => (acc += x.price), 0) / arr.length;
// console.log(arr);
// console.log(ort);
// const arr1 = products.filter((item) => item.category === "Clothes");
// const ort1 = arr.reduce((acc, x) => (acc += x.price), 0) / arr.length;
// console.log(arr1);
// console.log(ort1);
//? 2.yol
const products2 = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];

//   const urunKategorisi = products.reduce((acc, product) => {
//     const category = product.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});


  // Her kategori için ortalama fiyatı hesaplamak için mapi kullanın

//   const kategoriOrt = Object.keys(urunKategorisi).map((category) => {
//     const sum = urunKategorisi[category].reduce(
//       (acc, product) => acc + product.price,
//       0
//     );
//     return {
//       category: category,
//       average: sum / urunKategorisi[category].length,
//     };
//   });
//   console.log(kategoriOrt);


  //productsteki urunleri kategoriye ayirmak icin once reduce kullandik.(reducedan sonra obje doner)
  //reduce islemi sirasinda categoriAyir dizinine urunun kategorisini atiyoruz.
  //if (!acc[categoriAyir]) bu kosulu kullanarak acc adinda bir objenin categoriAyir adinda bir ozelligi var mi kontrol ediliyor.her bir kategorinin urunlerinin icine atilacagi bos bir array tanimlandi
  //ardindan acc[categoriAyir] (kategoriye ait dizi) uzreindeki push methodu ile urunler kategorilerine gore dizilere atilir
  //son olarak her dongu adiminda guncellenen acc objesi bir sonraki adima devredilir
  //reduce işlemi sırasında tanımlanan boş {} objesi, başlangıç değeri olarak kullanılan bir birikimci (accumulator) olarak hizmet eder. Bu, reduce fonksiyonunun ilk döngü adımında birikimciye atanacak başlangıç değeridir.
  // Başlangıç değeri olarak boş bir obje kullanıldığı için {} ifadesi kullanılmıştır. Bu, kategorilere göre gruplanacak olan ürünleri tutmak için bir nesne oluşturmaya başlamak için uygun bir başlangıç noktasıdır.
  //acc[categoriAyir] ifadesi, JavaScript'te bir objenin özelliğine erişmek veya bir objeye yeni bir özellik eklemek için kullanılan bir gösterimdir.
  // JavaScript'te objeler, key-value (anahtar-değer) çiftleri şeklinde bilgi saklamak için kullanılır. Bir objenin bir özelliğine erişmek veya bir objeye yeni bir özellik eklemek için, obje üzerinde nokta (.) veya köşeli parantez ([]) gösterimini kullanabilirsiniz.
  // acc[categoriAyir] ifadesinde, acc bir objeyi temsil eder. categoriAyir ise bir değişken olup, bir özelliğin adını tutar. Bu ifade, acc objesinin categoriAyir adlı özelliğine erişmek veya bu özelliği oluşturmak için kullanılır.

  const newArray2 = products2.reduce((acc, x) => {
    const kategori = x.category;
    if (!acc[kategori]) {
      acc[kategori] = [];
    }
    acc[kategori].push(x);
    return acc;
  }, {});
  console.log(newArray2);
  //-----------------------------------------------------------
  const fiyatOrtalama = Object.keys(newArray).map((category) => {
    const sum = newArray2[category].reduce((acc, x) => acc + x.price, 0);
    return {
      category: category,
      ortalama: (sum / newArray2[category].length).toFixed(1),
    };
  });
  console.log(fiyatOrtalama);

  
 console.clear();

  let students = [
    { name: "John", exam1: 50, exam2: 90, class: "11", hobby: "trekking" },
    { name: "Jane", exam1: 60, exam2: 80, class: "10", hobby: "football" },
    { name: "Bob", exam1: 55, exam2: 40, class: "9", hobby: "trekking"},
    { name: "Sophie", exam1: 75, exam2: 95, class: "10", hobby: "basketball" },
    { name: "Mike", exam1: 65, exam2: 75, class: "12", hobby: "football" },
    { name: "Emily", exam1: 80, exam2: 68, class: "11", hobby: "trekking" },
    { name: "David", exam1: 70, exam2: 82, class: "9", hobby: "tennis" },
    { name: "Leroy", exam1: 50, exam2: 90, class: "12", hobby: "trekking" },
    { name: "Bernard", exam1: 60, exam2: 80, class: "10", hobby: "football" },
    { name: "Kevin", exam1: 85, exam2: 40, class: "9", hobby: "basketball" },
    { name: "Bob", exam1: 78, exam2: 95, class: "10", hobby: "tennis" },
    { name: "Nicholas", exam1: 69, exam2: 75, class: "12", hobby: "tennis" },
    { name: "Sebastian", exam1: 93, exam2: 68, class: "11", hobby: "tennis" },
    { name: "Sybille", exam1: 100, exam2: 82, class: "12", hobby: "football" },
    { name: "Tom", exam1: 50, exam2: 90, class: "11", hobby: "football" },
    { name: "Harry", exam1: 60, exam2: 90, class: "10", hobby: "trekking" },
    { name: "Hans", exam1: 55, exam2: 40, class: "9", hobby: "trekking" },
    { name: "Toni", exam1: 75, exam2: 95, class: "10", hobby: "football" },
    { name: "Johnny", exam1: 45, exam2: 75, class: "12", hobby: "tennis" },
    { name: "Herkel", exam1: 80, exam2: 68, class: "11", hobby: "tennis" },
    { name: "Frank", exam1: 50, exam2: 82, class: "9", hobby: "trekking" },
    { name: "Christian", exam1: 50, exam2: 92, class: "12", hobby: "trekking" },
    { name: "Omar", exam1: 60, exam2: 90, class: "10", hobby: "football" },
    { name: "Kylian", exam1: 85, exam2: 40, class: "9", hobby: "trekking" },
    { name: "Francis", exam1: 78, exam2: 95, class: "10", hobby: "trekking" },
    { name: "Murat", exam1: 69, exam2: 75, class: "12", hobby: "basketball" },
    { name: "Jannick", exam1: 93, exam2: 68, class: "11", hobby: "football" },
    { name: "Kumar", exam1: 80, exam2: 82, class: "12", hobby: "basketball" },
  ];
  for(let i =0; i< students.length; i++){
    const totalGrade = (students[i].exam1 * 0.4 + students[i].exam2 * 0.6).toFixed(1)
    students[i].totalGrade = totalGrade;
  }

 const studentsByClasses = students.reduce((acc, student) => {
    const classLevel = student.class;
    if(!acc[classLevel]){
      acc[classLevel] = []
    }
    acc[classLevel].push(student)
    return acc;
  }, {})
  console.log(studentsByClasses);
  //Now we are using map to calculate average grade level of all classes
  const avgGradeByClass = Object.keys(studentsByClasses).map((classLevel) =>
  {
    const total = studentsByClasses[classLevel].reduce((acc, student) => acc + Number(student.totalGrade), 0);
    return {
      class: classLevel,
      average: (total / studentsByClasses[classLevel].length).toFixed(1)
    };
  }
);




console.log(avgGradeByClass);
console.log("üst");

const calisanlar2 = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];

  const depart = calisanlar2.reduce((acc,dep) => {
    const sube = dep.department;
    if(!acc[sube]) acc[sube] = [];
    acc[sube].push(dep);
    return acc;
  },{})
  console.log(depart);

  const orta = Object.keys(depart).map(department =>{
    const sum = depart[department].reduce((acc,item)=>acc+item.salary,0)
            return {
                department:department,
                avegSalary:(sum/depart[department].length).toFixed(1)
            }
  })
  console.log(orta);


  let student = [
    { name: "John", exam1: 50, exam2: 90, class: "11", hobby: "trekking" },
    { name: "Jane", exam1: 60, exam2: 80, class: "10", hobby: "football" },
    { name: "Bob", exam1: 55, exam2: 40, class: "9", hobby: "trekking"},
    { name: "Sophie", exam1: 75, exam2: 95, class: "10", hobby: "basketball" },
    { name: "Mike", exam1: 65, exam2: 75, class: "12", hobby: "football" },
    { name: "Emily", exam1: 80, exam2: 68, class: "11", hobby: "trekking" },
    { name: "David", exam1: 70, exam2: 82, class: "9", hobby: "tennis" },
    { name: "Leroy", exam1: 50, exam2: 90, class: "12", hobby: "trekking" },
    { name: "Bernard", exam1: 60, exam2: 80, class: "10", hobby: "football" },
    { name: "Kevin", exam1: 85, exam2: 40, class: "9", hobby: "basketball" },
    { name: "Bob", exam1: 78, exam2: 95, class: "10", hobby: "tennis" },
    { name: "Nicholas", exam1: 69, exam2: 75, class: "12", hobby: "tennis" },
    { name: "Sebastian", exam1: 93, exam2: 68, class: "11", hobby: "tennis" },
    { name: "Sybille", exam1: 100, exam2: 82, class: "12", hobby: "football" },
    { name: "Tom", exam1: 50, exam2: 90, class: "11", hobby: "football" },
    { name: "Harry", exam1: 60, exam2: 90, class: "10", hobby: "trekking" },
    { name: "Hans", exam1: 55, exam2: 40, class: "9", hobby: "trekking" },
    { name: "Toni", exam1: 75, exam2: 95, class: "10", hobby: "football" },
    { name: "Johnny", exam1: 45, exam2: 75, class: "12", hobby: "tennis" },
    { name: "Herkel", exam1: 80, exam2: 68, class: "11", hobby: "tennis" },
    { name: "Frank", exam1: 50, exam2: 82, class: "9", hobby: "trekking" },
    { name: "Christian", exam1: 50, exam2: 92, class: "12", hobby: "trekking" },
    { name: "Omar", exam1: 60, exam2: 90, class: "10", hobby: "football" },
    { name: "Kylian", exam1: 85, exam2: 40, class: "9", hobby: "trekking" },
    { name: "Francis", exam1: 78, exam2: 95, class: "10", hobby: "trekking" },
    { name: "Murat", exam1: 69, exam2: 75, class: "12", hobby: "basketball" },
    { name: "Jannick", exam1: 93, exam2: 68, class: "11", hobby: "football" },
    { name: "Kumar", exam1: 80, exam2: 82, class: "12", hobby: "basketball" },
  ];

  const siniflar = student.reduce((acc,ogr)=>{
    const sinif = ogr.class;
    if(!acc[sinif]) {acc[sinif]=[];}
    acc[sinif].push(ogr);
    return acc;
  },{})

  console.log(siniflar);

  const ayir = Object.keys(siniflar).map((sinif)=>{
    const sumOrt = siniflar[sinif].reduce((acc,i)=>acc+(i.exam1+i.exam2)/2,0);
        return {
            class: sinif,
            Ortalama:(sumOrt/siniflar[sinif].length).toFixed(1)
        }
  })
  console.log(ayir);