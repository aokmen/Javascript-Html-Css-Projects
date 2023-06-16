//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

// parent >> kendisinin bir üst elementi
// child-children >> kendisinin bir alt elementi
// sibling >> ayni seviyedeki  alt elementler

// 1. Yukariya dogru (Parent) parentNode, parentElement
// 2. Asagiya dogru children, firstElementChild, lastElementChild, lastChild
// 3. Yatayda hareket etme. previousSibling, nextsibling

/* --------------------------------- parent --------------------------------- */
const h2 = document.querySelector("h2");
console.log(h2);
console.log(h2.parentElement);
console.log(h2.parentNode.parentNode);
console.log(h2.parentNode.parentNode.parentNode);
console.log(h2.parentNode.parentNode.parentNode.parentNode);
console.log(h2.parentNode.parentNode.parentNode.parentNode.parentNode);
console.log(h2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

const p = document.querySelector("p")
console.log(p);
const myDiv = p.parentNode;
myDiv.style.display = "none"

/* --------------------------------- children --------------------------------- */


const header = document.querySelector("header");
console.log(header.children);
const listSection = document.querySelector(".item-list");
console.log(listSection.firstElementChild);
console.log(listSection.lastElementChild.children);
const last = listSection.lastElementChild;
console.log(last.innerText);

/* --------------------------------- sibling --------------------------------- */

// kendinden önceki kardesi bulur
const js=document.querySelector(".listJs");
console.log(js.previousElementSibling.textContent);

// kendinden sonraki kardesi bulur
console.log(js.nextElementSibling.textContent);

/* -------------------------------------------------------------------------- */
/*                                   CLOSEST                                  */
/* -------------------------------------------------------------------------- */

// closest => en yakin anlamina gelir
// Verilen kritere uygun en yakin parenti verir
console.log(js.closest("section"));
console.log(js.closest("ul"));
console.log(js.closest("div")); // parent div olmadigi icin null degeri verir
console.log(p.closest("div"));

//bu önemli, kullanisli bir yapidir
const newVal = js.closest("body").querySelector("div p");
console.log(newVal);