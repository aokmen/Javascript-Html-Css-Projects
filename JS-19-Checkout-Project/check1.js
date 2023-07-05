const vergi = 0.18;
const indirim = 0.7;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

ekranaBastir();
/* ------------ function ekranaBastir() ------------------- */

function ekranaBastir() {
  sepettekiler.forEach((ürün) => {
    const { name, price, adet, img } = ürün;
    document.querySelector(
      "#ürün-panel"
    ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="${img}"   class="img-fluid  rounded" alt="..." />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
                   <div class="ürün-price" >
                          <p class="text-warning h2">$
                            <span class="indirim-price">${(
                              price * indirim
                            ).toFixed(2)}</span>
                            <span class="h5 text-dark text-decoration-line-through">${price}</span>
                          </p>
                        </div>  
                        <div
                          class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                        >
                          <div class="adet-controller">
                            <button class="btn btn-secondary btn-sm">
                              <i class="fas fa-minus"></i>
                            </button>
                            <p class="d-inline mx-4" id="ürün-adet">${adet}</p>
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
                          Ürün Toplam: $<span class="ürün-toplam">${(
                            price *
                            indirim *
                            adet
                          ).toFixed(2)}</span>
                        </div>
                       
            </div>
          </div>
        </div>
      </div>`;
  });

/* ------------- Remove Button >> click --------------------- */

  document.querySelectorAll(".remove-ürün").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".card").remove();
      sepettekiler = sepettekiler.filter((ürün) => ürün.name != btn.closest(".card").querySelector("h5").textContent);
      hesaplaCardTotal()
    });
  });
  adetButon();

  document.querySelector("#card-prices").innerHTML = `<table class="table">
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
  </table>`;
}

/* -------------- function adetButon() ---------------------- */

function adetButon() {
  document.querySelectorAll(".adet-controller").forEach((i) => {
    const minus = i.firstElementChild;
    const adet1 = i.children[1];
    const plus = i.lastElementChild;

/* ---------------------- plus >> click -------------------------- */

    plus.addEventListener("click", () => {
      adet1.textContent = Number(adet1.textContent) + 1;
      i.closest(".card").querySelector(".ürün-toplam").textContent = (i.closest(".card").querySelector(".indirim-price").textContent*adet1.textContent).toFixed(2);
      hesaplaCardTotal()
    });

/* ---------------------- minus >> click ------------------------- */

    minus.onclick = () => {
      if(adet1.textContent == 0) return
      adet1.textContent = Number(adet1.textContent) - 1;
      adet1.closest(".card-body").querySelector(".ürün-toplam").textContent = (adet1.closest(".card").querySelector(".indirim-price").textContent*adet1.textContent).toFixed(2);
      hesaplaCardTotal()
    }

  });
}

function hesaplaCardTotal(){
  const ürünToplam = document.querySelectorAll(".ürün-toplam")

  const araToplam = Array.from(ürünToplam).reduce((acc,item) => acc + Number(item.textContent),0)
document.querySelector(".aratoplam").textContent = araToplam.toFixed(2)
document.querySelector(".vergi").textContent = (araToplam*vergi).toFixed(2);
document.querySelector(".kargo").textContent = 15.0;
document.querySelector(".toplam").textContent =
  (araToplam + 15.0 + araToplam * vergi).toFixed(2);
}