
const resim = document.querySelector("#resim")

const cuzdanBtn = document.querySelector("#cuzdanBtn");
const cuzdanGoster = () => {resim.src = "./images/cuzdan.jpg"}
cuzdanBtn.addEventListener("click", cuzdanGoster)

const cantaBtn = document.querySelector("#cantaBtn");
const cantaGoster = () => {resim.src = "./images/canta.jpg"}
cantaBtn.addEventListener("click", cantaGoster)

const kemerBtn = document.querySelector("#kemerBtn");
const kemerGoster = () => {resim.src = "./images/kemer.jpg"}
kemerBtn.addEventListener("click", kemerGoster)

const ekleBtn = document.querySelector("#ekleBtn");
const inputBolum = document.querySelector("#input")

const urun = document.querySelector(".urun");
const liste = document.querySelector("#liste")
const ekle = () => {
    urun.innerHTML = `<p> ${inputBolum.value} </p>`
       liste.innerHTML += `<li class="list-group-item"> ${inputBolum.value} </li>`
       inputBolum.value=""
}

ekleBtn.addEventListener("click",ekle);

const kucukBtn = document.querySelector("#kucukBtn");
const kucuk = () => {urun.innerHTML=urun.innerHTML.toLowerCase()}
kucukBtn.addEventListener("click", kucuk)

const buyukBtn = document.querySelector("#buyukBtn");
const buyuk = () => {urun.innerHTML=urun.innerHTML.toUpperCase()}
buyukBtn.addEventListener("click", buyuk)

const toggleBtn = document.querySelector("#toggleBtn");
const toggle = () => {

    urun.innerHTML===urun.innerHTML.toLowerCase() ? urun.innerHTML=urun.innerHTML.toUpperCase() : urun.innerHTML=urun.innerHTML.toLowerCase()
}
toggleBtn.addEventListener("click", toggle)

const del = document.querySelector("#del");

const delButton = () => {
   liste.removeChild(liste.lastElementChild);
}
del.addEventListener("keydown",delButton);