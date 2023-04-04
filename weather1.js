function11("Solihull");
const button = document.getElementById("search-button");
const inputValue = document.getElementById("search-box");
const cityName = document.getElementById("location");
const desc = document.getElementById("cloud");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const humi = document.getElementById("humidity");
const day = document.getElementById("day");
const date = document.getElementById("date");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feel");
const pressure = document.getElementById("pressure");

button.addEventListener('click', function12)

function function12(){
    function11(inputValue.value)
}

function function11(name){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+'&units=metric&appid=fee0c52216fcf74e6a02307994b0d6aa')
  .then(response => response.json())
  .then(data => {
    let lat=data["coord"]["lat"]
    let lon=data["coord"]["lon"]
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=fee0c52216fcf74e6a02307994b0d6aa')
    .then(res=>res.json())
    .then(dat=>{
        console.log("data is",dat)
        let rain=dat["rain"]["1h"];
        document.getElementById("rain").innerHTML=rain+"mm";
    })
    .catch(error=>document.getElementById("rain").innerHTML="N/A")
    
    console.log(data)
    var humidity=data['main']['humidity']
    var windSpeed = data['wind']['speed'];
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description']
    var iconValue = data['weather'][0]['icon']
    var feelsLikeValue = data['main']['feels_like'];
    var pressureq=data["main"]["pressure"]
    pressure.innerHTML=pressureq+"mb";
    cityName.innerHTML = nameValue;
    temp.innerHTML = tempValue+"°C";
    desc.innerHTML = descValue;
    humi.innerHTML="Humidity: "+humidity+"%";
    wind.innerHTML = "Wind: "+windSpeed + "m/s";
    feelsLike.innerHTML="Feels Like: "+feelsLikeValue+"°C";
    let currentDate = new Date().toJSON().slice(0, 10);
    console.log(currentDate); // "2022-06-17"
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let dayt = weekday[d.getDay()];
    console.log(dayt)
    day.innerHTML=dayt;
    date.innerHTML=currentDate;
    icon.src = 'http://openweathermap.org/img/w/'+ iconValue +'.png';
  })
  .catch(err => console.log("Wrong city name!"))
}