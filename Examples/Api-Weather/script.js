
const btnSubmit = document.querySelector("button")
const inputText = document.querySelector("input")
const weather = document.querySelector(".row")
const url = "https://api.openweathermap.org/data/2.5/"
const key = "41439341552d09ccd6617f759d78c59c"
const units = "metric";
const lang = "tr";
let cityName ;



const setQuery = (e) => {

    if (e.keyCode =="13"){
        weatherApp(inputText.value)
  
    }
}


  const weatherApp = async() => {
    try{

    let query = `${url}weather?q=${cityName}&appid=${key}&units=${units}&lang=${lang}`;

    
    const res = await fetch(query)
    if (!res.ok){
        document.querySelector(".container").innerHTML = `<h1 >An error occured</h1>
        <img style="width:80%; opacity:0.7" src="./img/404.jpg" alt="404.jpg" />`
       
    
        throw new Error(`Error: ${res.status}`)
    }
    const data = await res.json()
    showWeather(data)}catch(error){
        console.log(error);
    }

}

const showWeather = (data) => {
    weather.innerHTML += ` 
  <div class="col-md-4 cards ">
    <div class=" text-dark ">
    <h4 >${data.name}, ${data.sys.country}</h4>
    <p class="display-2">${data.main.temp}°C</p>
    <p class="mb-2">Feels Like: <strong>${data.main.feels_like} °C</strong></p>
    <h5>${data.weather[0].main}</h5>
  </div>
  </div> 
    `
}

btnSubmit.onclick = () => {
   
    cityName = inputText.value;
    console.log(inputText.value);
    console.log(cityName);
    weatherApp()
}
















// const weatherApp = async() => {
//     const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//     const data = await res.json()
//     showWeather(data)
// }

// const showWeather = (data) => {


//     console.log(data);
// }


// btnSubmit.onclick = (e) => {
//     e.preventDefault();
   
//     weatherApp()
// }

// "https://api.openweathermap.org/data/2.5/weather?q={Hannover}&appid={41439341552d09ccd6617f759d78c59c}"