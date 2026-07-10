const API_KEY = "81e71249fca24b914673fed677d36512";


async function getWeather() {

    let city = document.getElementById("city").value;


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    try {

        let response = await fetch(url);

        let weather = await response.json();


        if (weather.cod == 200) {


            document.getElementById("name").innerHTML =
            "📍 " + weather.name;


            document.getElementById("temmp").innerHTML =
            `
            🌡 Temperature: ${weather.main.temp} °C <br>
            🤔 Feels like: ${weather.main.feels_like} °C <br>
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
            "❌ " + weather.message;

            document.getElementById("temmp").innerHTML = "";

            document.getElementById("weatherr").innerHTML = "";
        }

    }


    catch(error){

        document.getElementById("name").innerHTML =
        "Something went wrong 😭";

    }

}
