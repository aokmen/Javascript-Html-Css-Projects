let showList = [];

fetch("./tv-shows.json")
.then((res)=>res.json())
.then((data)=>{
    showList = data;
   showScreen(showList)
})

const showScreen = (data) => {
    document.querySelector(".tvShowList").innerHTML = ""
   data.forEach(element => {
  
    document.querySelector(".tvShowList").innerHTML += `

    <div class="col-md-3">
    <div class="card h-100">
    <img src="${Object.values(element.show.image)[1]}" class="card-img-top img-fluid" style="width: 100%; height: 400px;
    object-fit: cover;">
      <div class="card-body">
      <h5 class="card-title">${element.show.name}</h5>
      <a class="btn btn-success" href="${element.show.url}">Detaylar</a>
      </div>
    </div>
  </div>
    `;

   });
}



document.querySelector("input").oninput = (e) => {
    
    let newArr = showList.filter((a) =>
    
      a.show.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
  
    showScreen(newArr); 
}



