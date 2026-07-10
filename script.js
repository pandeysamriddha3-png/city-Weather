const API_KEY = "81e71249fca24b914673fed677d36512";


async function getWeather() {

    const city = document.getElementById("city").value;


    if (city === "") {

        document.getElementById("name").innerHTML =
        "⚠ Enter city name";

        return;
    }


    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    try {


        const response = await fetch(url);


        const weather = await response.json();


        console.log(weather);



        if (weather.cod == 200) {


            document.getElementById("name").innerHTML =
            `📍 ${weather.name}, ${weather.sys.country}`;


            document.getElementById("temmp").innerHTML =
            `
            🌡 Temperature: ${weather.main.temp} °C <br>
            🤔 Feels Like: ${weather.main.feels_like} °C <br>
            💧 Humidity: ${weather.main.humidity}%
            `;


            document.getElementById("weatherr").innerHTML =
            `
            ☁ Weather: ${weather.weather[0].description}<br>
            💨 Wind: ${weather.wind.speed} m/s
            `;


        }


        else {


            document.getElementById("name").innerHTML =
            "❌ City not found";


            document.getElementById("temmp").innerHTML = "";


            document.getElementById("weatherr").innerHTML = "";


        }


    }


    catch (error) {


        document.getElementById("name").innerHTML =
        "❌ Network Error";


        console.log(error);


    }


}
