
// var hesap = [];

// function dugmeTiklama(deger) {
//   hesap.push(deger);
//   var ekran = document.getElementById("ekran");
//   ekran.textContent = hesap.join('');
// }

// function hesapla() {
//   var sonuc = eval(hesap.join(''));
//   var ekran = document.getElementById("ekran");
//   ekran.textContent = sonuc;
//   hesap = [];
// }

// function temizle() {
//   var ekran = document.getElementById("ekran");
//   ekran.textContent = '0';
//   hesap = [];
// }

// function negatif() {
//   var ekran = document.getElementById("ekran");
//   var deger = parseFloat(ekran.textContent);
//   ekran.textContent = -deger;
// }

// function yuzde() {
//   var ekran = document.getElementById("ekran");
//   var deger = parseFloat(ekran.textContent);
//   ekran.textContent = deger / 100;
// }
var hesap = [];
function tikla(deger) {
  hesap.push(deger) 
  document.getElementById("ekran").textContent = hesap.join("") ; 
}

function temizle() {
    document.getElementById("ekran").textContent = 0;
    hesap = [];
}

function negatif() {
    var ekran = document.getElementById("ekran");
    var deger = parseFloat(ekran.textContent);
    ekran.textContent = -deger;
    // hesap.unshift("-");
}

function hesapla() {
    var sonuc = eval(hesap.join(""))
    document.getElementById("ekran").textContent = sonuc;
    hesap = [];
}