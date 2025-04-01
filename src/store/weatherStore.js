import { defineStore } from "pinia";

export const useWeatherStore = defineStore('weather', {
    state: () => ({ 
        weatherInfo: [],
        message: 'Bienvenido a Weather App',
    }),
    actions:{
        async fetchWeather(city) {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbc508e6af4e5ee25727f32f6e1071fc&units=metric`)
            const data = await res.json()
            console.log(data)
        }
    }
})