function textArea() {
    let text = document.getElementById("textarea").value;
    let paragraf = document.getElementById("pag");
    let textSearch = (text.match(/[aeıioöuü]/gi) || []).length;
    textSearch > 1 ? paragraf.innerHTML = `There are ${textSearch} vowels in <span>${text}</span>` : paragraf.innerHTML = `There is ${textSearch} vowel in <span>${text}</span>`
    ;

  }
// Clarusway is the best

// let x = "Clarusway bugün nasil";

// console.log((x.match(/[aeıioöuü]/gi)).length);
const raNum = Math.trunc(Math.random()*100);
console.log(raNum);
let cal = 0;
let puan = 1000;
function checkBtn() {
    let inputGuess = document.getElementById("guess").value;
    let guessPag = document.getElementById("guessPag");
    let raIn = inputGuess;
    let nuIn = Number(raIn);
    let result = guessPag.innerText;
    console.log(raNum);
        if (nuIn===raNum) {result = "Tebrikler sayiyi buldun :)";}
        else {
            cal++;
            puan -= 100;
            if(nuIn > raNum) {
                result = "Sayini düsür";
            }
            else if (nuIn < raNum) {
                result = "Sayini yükselt";
            }
        }
        if (puan === 0) {
            result = "Üzgünüm kaybettin :( ";
            document.getElementById("guess").value = "";
            document.getElementsByClassName("checkBtn");
        }
        guessPag.innerText = result;
        document.getElementById("cal").innerText = cal;
        document.getElementById("puan").innerText = puan;

    }
    
function gider() {
    let inHar = document.getElementById("inHar").value;
    let tarih = document.getElementById("tarih").value;
    let miktar = document.getElementById("miktar").value;
    document.getElementById("tdate").innerHTML = `<td>${inHar}</td>`;
    document.getElementById("tplace").innerHTML = `<td>${tarih}</td>`;
    document.getElementById("titem").innerHTML = `<td>${miktar}</td>`;
    let newElement = document.createElement("td");
    newElement.innerHTML = `${inHar}`;
    let newElement2 = document.createElement("td");
    newElement2.innerHTML = `${tarih}`;
    let newElement3 = document.createElement("td");
    newElement3.innerHTML = `${miktar}`;
    document.getElementById("tr2").appendChild(newElement);
   
 
}
