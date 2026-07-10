const API_KEY = "81e71249fca24b914673fed677d36512";

async function getWeather(){

    let city = document.getElementById("city").value.trim();

    if(city === ""){
        document.getElementById("name").innerHTML = "Enter city ⚠️";
        return;
    }


    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;


    try{

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);


        if(data.cod == 200){

            document.getElementById("name").innerHTML =
            "📍 " + data.name;


            document.getElementById("temp").innerHTML =
            `
            🌡 ${data.main.temp} °C <br>
            🤔 Feels ${data.main.feels_like} °C <br>
            💧 ${data.main.humidity}% Humidity
            `;


            document.getElementById("weather").innerHTML =
            `
            ☁ ${data.weather[0].description}<br>
            💨 ${data.wind.speed} m/s
            `;

        }

        else{

            document.getElementById("name").innerHTML =
            "❌ " + data.message;

            document.getElementById("temp").innerHTML = "";
            document.getElementById("weather").innerHTML = "";

        }

    }


    catch(error){

        console.log(error);

        document.getElementById("name").innerHTML =
        "❌ API connection failed";

    }

}
