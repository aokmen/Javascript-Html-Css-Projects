/* -------------------------------------------------------------------------- */
/*                                CREATEELEMENT                               */
/* -------------------------------------------------------------------------- */

//!HTML üzerinde yeni bir eleman eklemek istiyorsak :


//1 document.createElement(element ismi) -yeni element
//! sadece element oluşturuluyor ama düğüm oluşturmamız gerekiyor
//2 document.createTextNode(text)  - Bir eleman için text düğümü oluşturur
//3 Element.appendChild(text düğüm) - bir text düğümünü elemana bağlar

/* ------------------------------- Uzun Yöntem ------------------------------ */

//1.adım Ne?  -anne
const h3=document.createElement("h3")

//2.adım  İçinde ne var -çocuk
const text=document.createTextNode("---------------------")

//3.adım -içerik neye eklenecek- anneyi çocuğa bağlıyoruz
h3.appendChild(text)

//4.adım oluşturlan bu element nereye eklenecek
const resimAlani=document.querySelector("#resimAlani")
resimAlani.before(h3)
h3.style.textAlign="center"

/* ------------------------------- Kisa Yöntem ------------------------------ */
//Bu yöntem disardan erisilebilir. Güvenli olarak React JSX yapisidir
const baslik = document.querySelector(".baslik")
baslik.innerHTML = `<h3 style="text-align:center">ALIŞVERİŞ LİSTESİ</h3>`

/* -------------------------------------------------------------------------- */
/*                                   EVENTS                                   */
/* -------------------------------------------------------------------------- */

//TODO 1.Yöntem
// HTML etiketi icinde >> onmouseover=" style.width='30%' " onmouseout=" style.width='50%' "

//TODO 2.Yöntem
// Fonksiyon kullanarak cagirma >> onmouseover="resimKucult()" onmouseout="resimDuzelt()"
const resim = document.getElementById("resim");
const resimKucult = () => {
    resim.style.width = "30%";
}
const resimDuzelt = () => {
    resim.style.width = "50%";
}
//TODO 3.Yöntem
// Dom üzerinden elemana ulasip (getElementById, queryselector gibi yapilarla), o elemanin metodu olarak event tanimliyoruz

const resim2 = document.querySelector("#resim");
// resim.onmouseover = function () {
//     resim.style.width="30%";
// }

document.querySelector("#resim").onmouseover = () => {
    resim2.style.width="49%";
}
document.querySelector("#resim").onmouseout = () => {
    resim2.style.width="50%";
}

//? Javascript eventleri bir API'den cekerek kullaniyor

//TODO 4.Yöntem - addEventListener ekleme

const kemerBtn = document.getElementById("kemerBtn")
// addEventListener iki parametre alir
// 1.event adi
// 2. (fonksiyon) Event calisinca ne yapilacak onu fonksiyon olarak tanimlama
kemerBtn.addEventListener("click",function () {
    resim.src="./images/kemer.jpg"  
})

const cuzdanBtn = document.getElementById("cuzdanBtn")
cuzdanBtn.addEventListener("click",function () {
    resim.src="./images/cuzdan.jpg"  
})

const cantaBtn = document.getElementById("cantaBtn")
cantaBtn.addEventListener("click",function () {
    resim.src="./images/canta.jpg"  
})

/* ------------------------------------ - ----------------------------------- */

//en yaygin kullanimi fonksiyonu ayri tanimlayip cagirma

const cuzdanGoster = () => {
    resim.src ="./images/cuzdan.jpg"
}
cuzdanBtn.addEventListener("click",cuzdanGoster)

/* ------------------------------------ Ekle Butonu ----------------------------------- */

const inputBolum = document.querySelector("#input");
const ekleBtn = document.querySelector("#ekleBtn");
// ekleBtn.addEventListener("click",function () {
//     console.log(inputBolum.value);
//     const urun = document.querySelector(".urun");
//     urun.innerHTML = `<p> ${inputBolum.value} </p>` 
//     inputBolum.value = "";  // ekle butona basarak input alani bosaltiliyor
// })

// klavyeden bir tusa basildigi anda arkaplan gri olsun   >> onkeyup  >> bir tusa basilma bittiginde

inputBolum.onkeydown=()=>{
inputBolum.style.backgroundColor="lightgray"
}
const buyukBtn = document.getElementById("buyukBtn");
const kucukBtn = document.getElementById("kucukBtn");
const toggleBtn = document.getElementById("toggleBtn");
buyukBtn.addEventListener("click",function(){
    inputBolum.value = inputBolum.value.toUpperCase();
})

kucukBtn.addEventListener("click",function(){
    inputBolum.value = inputBolum.value.toLowerCase();
})

toggleBtn.addEventListener("click",function(){
    inputBolum.value === inputBolum.value.toLowerCase() ? inputBolum.value = inputBolum.value.toUpperCase() : inputBolum.value = inputBolum.value.toLowerCase();
})

/* -------------------------------------------------------------------------- */
/*                Input alanindan alinan degeri elemana ekleme                */
/* -------------------------------------------------------------------------- */

//1.adim
// const h3=document.createElement("h3")

//2.adım  İçinde ne var -çocuk
// const text=document.createTextNode("ALIŞVERİŞ LİSTESİ")

//3.adım -içerik neye eklenecek- anneyi çocuğa bağlıyoruz
// h3.appendChild(text)

//4.adım oluşturlan bu element nereye eklenecek
// const resimAlani=document.querySelector("#resimAlani")
// resimAlani.before(h3)
// h3.style.textAlign="center"

const liste = document.getElementById("liste");
// ekleBtn.addEventListener("click", function () {
//     if (inputBolum.value != "") {
//       const li = document.createElement("li");
  
//       const liText = document.createTextNode(inputBolum.value);
//       li.appendChild(liText);
//       li.className = "list-group-item";
//        liste.appendChild(li);
//       inputBolum.value = "";
//     }
//     else {
//       alert("Bir ürün girişi yapın")
//     }
//   });

  /* -----------------------------Kisa Yöntem----------------------------------- */

  ekleBtn.addEventListener("click",function(){
    liste.innerHTML += `<li class = "list-group-item"> ${inputBolum.value} </li>`
    inputBolum.value = "";
    // React de bu yapi güvenli seklinde JSX olarak görecegiz
  });

   /* -----------------------------Delete Yöntemi----------------------------------- */

const del = document.querySelector("#del");
del.addEventListener("click", function(){
    liste.removeChild(liste.lastElementChild);
    // liste.removeChild(liste.firstElementChild);
    // liste.removeChild(liste.childNodes[2]);
})

// keyCode >> klavyedeki karakterlerin ascii kodu;

//delete tusu >> 46
//enter tusu >> 13
inputBolum.onkeydown=(tus)=>{
    if(tus.keyCode===13) ekleBtn.click();
    if(tus.keyCode===46) inputBolum.value = "";
}

/* --------------------------- e event parametresi--------------------------------- */

ekleBtn.onclick = (e) => {
console.log(e.target);
}
const keycodeYaz = (event) =>{
    console.log(event);
}

inputBolum.onkeyup = (e)=>{
    console.log(e.target.value);
    keycodeYaz(e.keyCode)
}