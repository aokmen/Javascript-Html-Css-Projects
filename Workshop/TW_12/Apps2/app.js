const metinInput = document.getElementById("metinInput")
const sonucElementi = document.getElementById("sonuc")
const sesliHarflerElementi = document.getElementById("sesliHarfler")
const temizleButton = document.getElementById("temizleButton")

function hesapla(){
    let metin=metinInput.value

    let karakter = metin.toLowerCase().split("");
    console.log(karakter);
    let sesliHarfler = karakter.filter(function (karakter) {
        return ["a","e","i","o","u"].includes(karakter)
    });
console.log(sesliHarfler);
let sesliHarfSayisi = sesliHarfler.length
console.log(sesliHarfSayisi);

sonucElementi.textContent = `Sesli harf sayisi: ${sesliHarfSayisi}`
sesliHarflerElementi.textContent = `Sesli harf sayisi: ${sesliHarfler}`
temizleButton.style.display="inline-block"
}
const temizle = () => {
    metinInput.value = "";
    sonucElementi.textContent = "";
    sesliHarflerElementi.textContent = "";
  temizleButton.style.display="none"
}