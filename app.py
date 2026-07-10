import requests

API_KEY = "81e71249fca24b914673fed677d36512"

while True:
    city = input("Enter city name: ")

    url =   f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={81e71249fca24b914673fed677d36512}&units=metric"

    response = requests.get(url)
    weather = response.json()

    if str(weather["cod"]) == "200":
        print("--------------------")
        print("City:", weather["name"])
        print("Temperature:", weather["main"]["temp"], "°C")
        print("Feels like:", weather["main"]["feels_like"], "°C")
        print("Humidity:", weather["main"]["humidity"], "%")
        print("Weather:", weather["weather"][0]["description"])
        print("Wind Speed:", weather["wind"]["speed"], "m/s")
        print("--------------------")
    else:
        print("Error:", weather["message"])
