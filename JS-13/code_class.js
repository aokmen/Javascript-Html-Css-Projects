/* -------------------------------------------------------------------------- */
/*                                   1.Soru                                   */
/* -------------------------------------------------------------------------- */




ogrenciNotlarList = [
    { name: "Sema", notes: [70, 90, 60] },
    { name: "Neva", notes: [50, 70, 60] },
    { name: "Salih", notes: [40, 20, 30] },
    { name: "Ahmet", notes: [80, 90, 100] },
    { name: "şevval", notes: [30, 40, 55] },
    { name: "Zeki", notes: [90, 100, 100] },
  ];


// notlarin icinden en büyügünü bulma
const maxNote = ({name,notes}) => {
    return {
        name:name,
        EnYüksekNotu:Math.max(...notes)
    }
    }
    const newList = ogrenciNotlarList.map((p)=> maxNote(p))

console.log(newList);

const newArray = newList.filter((item) => item.EnYüksekNotu > 90);
console.log(newArray);

// notlarin icinden en kücügünü bulma
const EnDusukListesi = ({ name, notes }) => {
    return {
      name: name,
      EnDusukNotu: Math.min(...notes),
    };
  };
  
  const alinanDusukNotlar = ogrenciNotlarList.map((x) => EnDusukListesi(x));
  console.log("Öğrencilerin aldığı düsük notlar listesi");
  console.log(alinanDusukNotlar);
  console.log("---------------------------------------------");

// notlarin ortalamasini bulma
const ortNote = ({name,notes}) => {
    const ort = (notes.reduce((sum,x)=>sum+x)/notes.length).toFixed(1)
        return {
            name:name,
            Ortalama:ort
        }
    }
const newList2 = ogrenciNotlarList.map((p)=> ortNote(p))
    
console.log(newList2);


const guncelNot = ({name,notes}) => {
    const ort = (notes.reduce((sum,x)=>sum+x)/notes.length).toFixed(1)
        return {
            name:name,
            Ortalama:ort
        }
    }
const newList3 = ogrenciNotlarList.map((p)=> ortNote(p))
    
console.log(newList3);

  // d- Notları 70den büyük olanlara 10 puan , 70 den az olanlara 5 puan kanaat notu verecek. notu 100 den büyükse 100den büyük olamayacağı için 100 olarak geçecek
  // Beklenen Sonuç:
// [
// {name: 'Sema', guncelOrtalama: 83.3}
// {name: 'Neva', guncelOrtalama: 65}
// {name: 'Salih', guncelOrtalama: 35}
// {name: 'Ahmet', guncelOrtalama: 100}
// {name: 'şevval', guncelOrtalama: 46.7}
// {name: 'Zeki', guncelOrtalama: 100}
// ]

const newOrt = ({name,Ortalama}) => {
   let ort= parseFloat(Ortalama)  // Number(Ortalama) >> String i Number cevirme (Not: parseInt ondalikli kismi almiyor)

   ort = ort >=70 ? ort + 10 : ort + 5
   
   ort = ort > 100 ? 100 : ort

        return {
            name : name,
            guncelOrtalama : ort
        }
    }
const yeniOrtalamalar = newList3.map((p)=> newOrt(p))
    
console.log(yeniOrtalamalar);





/* -------------------------------------------------------------------------- */
//?                                   2.SORU                                  */
/* -------------------------------------------------------------------------- */
// Bir firmanın müsterilerinin bilgilerinin bululnduğu JSON yapısı aşağıdadır.
const customerList = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];

console.clear();

/* -------------------------------------------------------------------------- */
/*                                 Tebrik Notu                                */
/* -------------------------------------------------------------------------- */

//- Ortalaması 100 olan öğrencilerine tebrik notu yazmak istiyor.
// 100 olan öğrencilerinin adlarını ve adlarına yazılan tebrik notunu yeni bir liste oluşturun

const tebrik = ({name,guncelOrtalama,tebrikNotu}) => {
    let not = `Tebrikler ${name}! Not ortalaman:${guncelOrtalama}. Basarilarinin devamini diliyorum` ;
    tebrikNotu = guncelOrtalama === 100 ? not : null
    return {
        name:name,
        guncelOrtalama:guncelOrtalama,
        tebrikNotu:tebrikNotu
    }
}
const tebrikListe = yeniOrtalamalar.map((arg) => tebrik(arg)).filter((item) => item.guncelOrtalama===100)
console.log(tebrikListe);





/* -------------------------------------------------------------------------- */
/*                   Yeni bir liste: isim - adres - telefon                   */
/* -------------------------------------------------------------------------- */

// Müşteri bilgilerini düzenli bir şekilde göstermek istiyor.Bunun için
//   İsim - adres ve telefonlarını yeni bir listeye alarak düzenli bir şekide gösterecektir.

const newInfo = ({name,address,phone}) =>{
    return {
        name:name,
        address:address,
        phone:phone
    }
}
const newList_1 = customerList.map((i) => newInfo(i))
console.log(newList_1);





/* -------------------------------------------------------------------------- */
/*                                Arama Günleri                               */
/* -------------------------------------------------------------------------- */

// Müşterilerinin bazılarına telefon ile arayıp memnuniyet anketi yapacaktır
// Baş harfi e ile başlıyorsa Pazartesi,
// Baş harfi C ile başlıyorsa Çarşamba arayacaktır

const call = ({name}) => {
    const callTag = name[0] === "E" ? `Pazartesi` :  name[0]=== "C" ? `Çarşamba` : null;
    return {
        name:name,
        callTag:callTag
    }
}

const newList_2 = customerList.map((i) => call(i)).filter((i)=>i.callTag !== null)
console.log(newList_2);





/* -------------------------------------------------------------------------- */
/*                       Id numarasina göre mesaj ekleme                      */
/* -------------------------------------------------------------------------- */

// id Ad-ve email adreslerini ayrı bir listeye alıp, id numaraları tek sayı olanlara yeni çıkan elektronik cihazları ile ilgili mesaj ekleyecek, çift sayı olanlara yeni çıkan küçük ev aleti mesajını ekleyecektir

const newMessage = ({id,name,email}) => {
    let message = id % 2 === 1 ? `yeni çıkan elektronik cihazlari` : `yeni çıkan küçük ev aleti`
    return {
        id:id,
        name:name,
        email:email,
        message:message
    }
}

const newList_3 = customerList.map((item) => newMessage(item));
console.log(newList_3 );

console.clear();

const input = "John Ronald Reuel Tolkien"
// Write Your code here
//output: JRRT
const ad = ((input.split(" ")).map((i)=>i[0])).join("")

console.log(ad);

console.clear();
/* -------------------------------------------------------------------------- */
/*                          Workshop Coding Challenge                         */
/* -------------------------------------------------------------------------- */

//? ------------------------------------ 1 ---------------------------------- */

// 1. Yüksek Fiyatlı Ürün Kategorileri
// Size, her birinin adı, fiyatı ve fiyatı olan bir ürün koleksiyonunu temsil eden bir dizi nesne verilir.
// kategori. Göreviniz, her bir ürünün ortalama fiyatını hesaplamak için map, filter ve reduce kullanmaktır.
// kategori ve ardından yalnızca ortalama fiyatı olan kategorileri içeren bir dizi nesne döndürür
// 50'nin üzerinde.

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
    //     { category: 'Clothes', average: 55 },
    //     { category: 'Electronics', average: 55 }
    // ]

//? ------------------------------------ 2 ---------------------------------- */

// Size, her biri bir ad, maaş,ve departman. Göreviniz, her biri için ortalama maaşı hesaplamak için map, filter ve reduce kullanmaktır.
// departman ve ardından yalnızca ortalamaya sahip departmanları içeren bir dizi nesne döndürür.
// 65000 üzeri maaş.
// Örnek giriş:

const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
    ];


    // [
    // { department: 'HR', average: 71666 }
    // ]