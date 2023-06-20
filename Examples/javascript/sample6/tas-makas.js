const comH1 = document.querySelector("#comH1");
const userH1 = document.querySelector("#userH1");
const puanC = document.querySelector("#puanC");
const puanU = document.querySelector("#puanU");
const tas = "Tas";
const makas = "Makas";
const kagit = "Kagit";
let result;
const random = () => {
    const rand = Math.trunc(Math.random(3)*3);
    if(rand === 0) result = tas;
    else if (rand === 1) result = makas;
    else result = kagit;
    comH1.innerHTML = result;
}


const tasBtn = document.querySelector("#tasBtn")
const makasBtn = document.querySelector("#makasBtn")
const kagitBtn = document.querySelector("#kagitBtn")

tasBtn.addEventListener("click",function() {
    userH1.innerHTML=tas;
    random();
    results();
})
makasBtn.addEventListener("click",function() {
    userH1.innerHTML=makas;
    random();
    results();
})
kagitBtn.addEventListener("click",function() {
    userH1.innerHTML=kagit;
    random();
    results();
})


const win = document.querySelector("#win");
let kaz = "Tebrikler Kazandiniz :)"
let kay = "Üzgünüm Kaybettiniz :("
let ber = "Berabere Kaldiniz :|"

const results = () => {
let u = userH1.innerHTML;
let c = comH1.innerHTML;
if(u===tas && c===tas || u===makas && c===makas || u===kagit && c===kagit) 
if(u===tas && c===kagit || u===makas && c===tas || u===kagit && c===makas) {
    puanU.innerHTML--; 
    puanC.innerHTML++;  }  

if(u===kagit && c===tas || u===tas && c===makas || u===makas && c===kagit)
{puanU.innerHTML++; 
puanC.innerHTML--; }

if(puanU.innerHTML==0) {win.innerHTML=kay;}
if(puanU.innerHTML==10) {win.innerHTML=kaz;}

}

