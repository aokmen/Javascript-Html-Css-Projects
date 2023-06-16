/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */
// document.title = "DOM"
// const h1=document.querySelector("h1")
// h1.textContent="Merhaba"

/* -------------------------------------------------------------------------- */
/*                        Elementlere Erisim Metotlari                        */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//?                            getElementById("id")                           */
/* -------------------------------------------------------------------------- */

const kiraz = document.getElementById("kiraz");
console.log(kiraz);

// icindeki yazi, stil degistirebilirim

//TODO NOT: Icerigi degistirmek icin 3 yöntem var:
// textContent
// innerText
// innerHTML

kiraz.textContent="Karpuz" // textContent o alandaki sadece metinleri gösterir
console.log(kiraz.textContent);
const kayisi = document.getElementById("kayisi");

console.log(kayisi.textContent);

//TODO ekrana display:none olan icerikleri göstermiyor

/* -------------------------------------------------------------------------- */
/*                                  innerText                                 */
/* -------------------------------------------------------------------------- */

console.log(kayisi.innerText);
// kendisi kodu parse ediyor ve ekrana display:none olan icerikleri göstermiyor

/* -------------------------------------------------------------------------- */
/*                                  innerHTML                                 */
/* -------------------------------------------------------------------------- */
//tamamen html kodu olarak
kayisi.innerHTML=`<a href="www.apple.com">apple</a>`


/* -------------------------------------------------------------------------- */
/*                            getElementsByTagName                            */
/* -------------------------------------------------------------------------- */

// Tek eleman bile olsa bir HTML collection döner
const ul = document.getElementsByTagName("ul");
console.log(ul);
console.log("ul icerigi:",ul[0]);

const li = document.getElementsByTagName("li");  // Array gibi bir yapiya benziyor. 
console.log(li);
console.log(li[0]);
console.log(li[1]);

// HTML collection spread yapilabiliyor >> [...item]
console.log(...li);
[...li].forEach((x)=>console.log(x))
const arr=[...li];
arr.map((x)=>console.log(x))

/* -------------------------------------------------------------------------- */
/*                           getElementsByClassName                           */
/* -------------------------------------------------------------------------- */
const main = document.getElementsByClassName("main")
console.clear();
console.log(main);
console.log(main[1]);

console.log(...main);
console.log(main.length);

// main.forEach((x)=>console.log(x))  >> calismadi
[...main].forEach((x)=>console.log(x))

/* -------------------------------------------------------------------------- */
/*                                querySelector                               */
/* -------------------------------------------------------------------------- */

//document.querySelector  >> tag ise tagName,class - id ise # ile kullanilir
// CSS ile secim yapma islemlerinin hepsi burada kullanilir. tag, id, class ile


/* --------------------------- Tag ile secim yapma -------------------------- */

document.querySelector("h2").textContent = "Meyvelerimiz"

const h2Title = document.querySelector("h2");
h2Title.textContent="Meyvelerin Isimleri";
h2Title.id="kucukBaslik";

/* --------------------------- id ile secim yapma --------------------------- */

const btn = document.querySelector("#btn")
btn.style.backgroundColor = "blue";

/* --------------------------- className ile secim yapma --------------------------- */
const pag = document.querySelector(".pag")
pag.style.color = "red";

const muzText = document.querySelector(".muz")
muzText.className="yenistil";

const parNew = document.querySelector(".main p#par");
console.log(parNew);

const listItem = document.querySelectorAll("li");
console.log(listItem);
console.log(Object.entries(listItem));
console.log(Object.keys(listItem));
console.log(Object.values(listItem));
const section = document.querySelectorAll("section");
console.log(section);