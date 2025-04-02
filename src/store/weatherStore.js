import { defineStore } from "pinia";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


export const useWeatherStore = defineStore('weather', {
    state: () => ({ 
        weatherInfo: [],
        message: 'Bienvenido a Weather App',
    }),
    getters: {
        getWeatherInfo: (state) => state.weatherInfo,
        getCity: (state) => state.weatherInfo.name,
        getTemperature: (state) => state.weatherInfo.main.temp,
        getMinTemperature: (state) => state.weatherInfo.main.temp_min,
        getMaxTemperature: (state) => state.weatherInfo.main.temp_max,
        getHumidity: (state) => state.weatherInfo.main.humidity,
        getWind: (state) => state.weatherInfo.wind.speed,
        getDescription: (state) => state.weatherInfo.weather[0].description,
        getMessage: (state) => state.message, 
    },
    actions:{
        async fetchWeather(city) {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data = await res.json()
            console.log(data)
            if (res.ok) {
                this.weatherInfo = data
                console.log(this.weatherInfo)
            } else {
                this.message = 'Error: ' + data.message
            }
        }
    }
})