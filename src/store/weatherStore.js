import { defineStore } from "pinia";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


export const useWeatherStore = defineStore('weather', {
    state: () => ({ 
        weatherInfo: [],
        weatherForecast: [],
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
        getIcon: (state) => state.weatherInfo.weather[0].icon,
        
        // Forecast
        getWeatherForecast: (state) => state.weatherForecast,
        getForecastList: (state) => state.weatherForecast.list,
        getDailyForecast: (state) => {
            if (!state.weatherForecast.list || state.weatherForecast.list.length === 0) {
                return []; // Devuelve un array vacío si no hay datos
            }
        
            const dailyForecast = state.weatherForecast.list.filter(item => {
                return item.dt_txt.includes("12:00:00");
            });
        
            return dailyForecast.map(item => ({
                date: item.dt_txt.split(" ")[0],
                temp: item.main.temp,
                description: item.weather[0].description,
                icon: item.weather[0].icon
            }));
        }
    },
    actions:{
        async fetchWeather(city) {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data = await res.json()
            if (res.ok) {
                this.weatherInfo = data
                console.log('Peticion tiempo:' + this.weatherInfo)
            } else {
                this.message = 'Error: ' + data.message
            }
        },

        async fetchWeatherForecast(city) {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            const data = await res.json();
            console.log('Respuesta de la API de forecast:', data); 
            if (res.ok) {
                this.weatherForecast = data;
                console.log('Petición de pronóstico exitosa:', this.weatherForecast);
            } else {
                this.message = 'Error: ' + data.message;
            }
        }
    }
})