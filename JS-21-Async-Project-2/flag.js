const getirUlke = async (ülke) => {

    try {const res = await fetch(`https://restcountries.com/v3.1/name/${ülke}`);
    if(!res.ok){
        throw new Error("Url de hata var")
    }

    const data = await res.json()
    console.log(data[0]);
    ekranaBastir(data[0])} catch (error){
        console.log(error);
    }

}

let dizi = ["turkey","peru","japan","germany","belgium","canada"]
dizi.forEach((ülke) => getirUlke(ülke))

const ekranaBastir = (ülke) => {
    console.log(Object.values(ülke.currencies)[0].name);
    document.querySelector(".countries").innerHTML += `
    
    <div class="card w-50 shadow-lg">
        <img src=${ülke.flags.svg} class="card-img-top">
        <div class="card-body">
            <h5>${ülke.name.common}</h5>
            <ul class = "list-group-flush">
            <li class="list-group-item "><i class="me-2 fas fa-lg fa-landmark "></i>${ ülke.capital}</li>
            <li class="list-group-item"><i class="me-2 fas fa-lg fa-comments"></i>${Object.values(ülke.languages)}</li>
            <li class="list-group-item"><i class="me-2 fas fa-lg fa-money-bill-wave"></i>${Object.values(ülke.currencies)[0].name} ${Object.values(ülke.currencies)[0].symbol}</li>
            </ul>
        </div>
    </div>

    `
}
