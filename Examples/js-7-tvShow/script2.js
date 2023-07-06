let showList = [];

fetch("./tv-shows.json")
.then((res)=>{
    if(!res.ok) throw new Error("This  is a wrong URL")
   return res.json()
})
.then((data)=>{
    showList = data;
   showScreen(showList)
})

const showScreen = (data) => {

    const tvShowList = document.querySelector(".tvShowList");
    tvShowList.innerHTML = "";

   data.forEach(element => {
  
    if (element.show && element.show.image) {
        tvShowList.innerHTML += `
          <div class="col-md-3">
            <div class="card h-100">
              <img src="${Object.values(element.show.image)[1]}" class="card-img-top img-fluid" style="width: 100%; height: 400px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title">${element.show.name}</h5>
                <a class="btn btn-success" href="${element.show.url}">Detaylar</a>
              </div>
            </div>
          </div>
        `;
      }


    // console.log(Object.values(element.show.image)[0]);
   });
}

document.querySelector("input").oninput = (e) => {
    const searchValue = e.target.value.toLowerCase();
    
    const filteredList = showList.filter((item) => 
      item.show && item.show.name && item.show.name.toLowerCase().includes(searchValue)
    );
  
    showScreen(filteredList);
  };



