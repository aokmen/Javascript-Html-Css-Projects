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