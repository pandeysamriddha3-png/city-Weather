const API_KEY = "81e71249fca24b914673fed677d36512";

async function getWeather() {
    let city = document.getElementById("city").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        let response = await fetch(url);
        let weather = await response.json();

        if (weather.cod == 200) {

            document.getElementById("result").innerHTML = `
                <hr>
                <h2>${weather.name}</h2>
                🌡 Temperature: ${weather.main.temp} °C <br>
                🤔 Feels like: ${weather.main.feels_like} °C <br>
                💧 Humidity: ${weather.main.humidity}% <br>
                ☁ Weather: ${weather.weather[0].description} <br>
                💨 Wind Speed: ${weather.wind.speed} m/s
                <hr>
            `;

        } else {
            document.getElementById("result").innerHTML =
            "Error: " + weather.message;
        }

    } catch(error) {
        document.getElementById("result").innerHTML =
        "Something went wrong";
    }
}
