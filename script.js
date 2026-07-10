const API_KEY = "81e71249fca24b914673fed677d36512";


async function getWeather(){

    let city = document.getElementById("city").value;

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    try{

        let response = await fetch(url);

        let weather = await response.json();

        console.log(weather);


        if(weather.cod == 200){

            document.getElementById("name").innerHTML =
            "📍 " + weather.name;


            document.getElementById("temmp").innerHTML =
            "🌡 Temp: " + weather.main.temp + " °C";


            document.getElementById("weatherr").innerHTML =
            "☁ " + weather.weather[0].description;

        }

        else{

            document.getElementById("name").innerHTML =
            "❌ " + weather.message;

        }

    }

    catch(error){

        document.getElementById("name").innerHTML =
        error;

        console.log(error);

    }

}
