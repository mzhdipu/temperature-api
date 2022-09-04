

const searchTemperature = (city) =>{
    const API_KEY = `3ed48e0bd88f97475eacc35f7faf55e7`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => displayWeatherInfo(data));
}

const displayWeatherInfo = (data) =>{
    console.log(data)
    const weather = document.getElementById("weather");
    
    const cityName = weather.children[1];
    cityName.innerText = data.name;

    const temperature = weather.children[2]
    temperature.innerHTML = data.main.temp + " &degC"
    // temperature.innerText = data.main.temp;

    const main = weather.children[3];
    main.innerText = data.weather[0].main
}

document.getElementById("search-city-btn").addEventListener("click", function(){
    const searchCity = document.getElementById("search-city");
    console.log(searchCity.value)
    searchTemperature(searchCity.value)
})
searchTemperature("Dhaka")
