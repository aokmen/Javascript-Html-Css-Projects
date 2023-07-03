//* ======================================================================
//*                 Checkout Page Solution
//* =======================================================================
//!kargo ücreti indirim ve vergi oranlarını variable olarak atadık

const vergi = 0.18;
const indirim = 0.7;

//!verilerin bilgilerini 3 object le diziye sakladık
let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];
// sepettekiler dizisini DOM a for each ile eleman alma
ekranaBastir()
adetButton()
hesaplaCardTotal()
function ekranaBastir() {
  sepettekiler.forEach((ürün) => {
    //destructuring
    const {name,price,img,adet} = ürün
    document.querySelector("#ürün-panel").innerHTML += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-5">
        <img src=${img}   class="img-fluid  rounded" alt="..." />
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title">${name}  </h5>
               <div class="ürün-price">
                      <p class="text-warning h2">$
                        <span class="indirim-price">${(price*indirim).toFixed(2)}  </span>
                        <span class="h5 text-dark text-decoration-line-through"> ${price} </span>
                      </p>
                    </div>
  
                    
                    <div
                      class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                    >
                      <div class="adet-controller">
                        <button class="btn btn-secondary btn-sm">
                          <i class="fas fa-minus"></i>
                        </button>
                        <p class="d-inline mx-4" id="ürün-adet"> ${adet} </p>
                        <button class="btn btn-secondary btn-sm">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div class="ürün-removal mt-4">
                      <button class="btn btn-danger btn-sm w-100 remove-ürün">
                        <i class="fa-solid fa-trash-can me-2"></i>Remove
                      </button>
                    </div>
                    <div class="mt-2">
                      Ürün Toplam: $<span class="ürün-toplam">${(price*indirim*adet).toFixed(2)}  </span>
                    </div>
        </div>
      </div>
    </div>
  </div>`
  
  })

// Silme Olayi

document.querySelectorAll(".remove-ürün").forEach((btn)=>{

 //ekrandan sil

 btn.onclick=() => {

  btn.closest(".card").remove()
  //diziden sil
  sepettekiler = sepettekiler.filter((ürün) => ürün.name.trim() !== btn.closest(".card").querySelector("h5").textContent.trim());
  // sepettekiler = sepettekiler.filter((ürün) => ürün.name != btn.closest(".card").querySelector("h5").innerText);
  console.log(sepettekiler);

  hesaplaCardTotal()
  
 }

})

//adet degistirme

  // en alttaki total kismi
  document.querySelector("#card-prices").innerHTML=`<table class="table">
  <tbody>
    <tr class="text-end">
      <th class="text-start">Aratoplam</th>
      <td>$<span class="aratoplam">0.00</span></td>
    </tr>
    <tr class="text-end">
      <th class="text-start">Vergi(18%)</th>
      <td>$<span class="vergi">0.00</span></td>
    </tr>
    <tr class="text-end">
      <th class="text-start">Kargo</th>
      <td>$<span class="kargo">0.00</span></td>
    </tr>
    <tr class="text-end">
      <th class="text-start">Toplam</th>
      <td>$<span class="toplam">0.00</span></td>
    </tr>
  </tbody>
</table>`
}

function adetButton() {
  document.querySelectorAll(".adet-controller").forEach((i)=>{
    const minus = i.firstElementChild;
    const adet1 = i.children[1];
    const plus = i.lastElementChild;
    plus.onclick=() => {
      adet1.textContent=Number(adet1.textContent) + 1
      sepettekiler.map((ürün) => {
        //herbir name e bak tiklandiginda uyusuyorsa
        if(ürün.name==adet1.closest(".card").querySelector("h5").textContent)
        ürün.adet = adet1.textContent
      })
      const ürünToplam = adet1.closest(".card").querySelector(".indirim-price").textContent;

      adet1.closest(".card").querySelector(".ürün-toplam").textContent = (ürünToplam * adet1.textContent).toFixed(2);
      hesaplaCardTotal()
    }
  })

}


// calculate and update card total values
function hesaplaCardTotal(){
  const ürünToplam = document.querySelectorAll(".ürün-toplam")
const araToplam = Array.from(ürünToplam).reduce((acc,item)=>acc+Number(item.textContent),0)

document.querySelector(".aratoplam").textContent = araToplam.toFixed(2)
document.querySelector(".vergi").textContent = (araToplam*vergi).toFixed(2)
document.querySelector(".kargo").textContent = 15.0
document.querySelector(".toplam").textContent = araToplam +15.0 + Number((araToplam*vergi).toFixed(2))
}



