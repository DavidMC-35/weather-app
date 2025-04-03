<template>
    <div class="forecast-container">
        <div class="header-forecast">
            <h2>Pronostico del Clima</h2>
        </div>
        <div class="forecast-info">
            <p>Ciudad: {{ weatherStore.getCity }}</p>
            <p>Pronostico</p>
            <div v-if="dailyForecast.length > 0" class="forecast-cards">
                <div v-for="(day, index) in dailyForecast" :key="index" class="forecast-card">
                    <p>{{ day.date }}</p>
                    <p>Temperatura: {{ day.temp }} °C</p>
                    <p>{{ day.description }}</p>
                    <img :src="`https://openweathermap.org/img/wn/${day.icon}@2x.png`" alt="Icono del clima" />
                </div>
            </div>
            <p v-else>Cargando datos del pronóstico...</p>
        </div>
    </div>
</template>

<script setup>
    import { useWeatherStore } from '../store/weatherStore.js';
    import { computed } from 'vue'; 
    
    const weatherStore = useWeatherStore(); 
    const dailyForecast = computed(() => weatherStore.getDailyForecast);
</script>

<style scoped>
    .forecast-container {
        padding: 20px;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(17, 25, 40, 0.75);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);        
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 100%;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .header-forecast {
        margin-bottom: 10px;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 5px;
        color: #fff;
    }

    .forecast-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
    .forecast-info p {
        /* margin: 0; */
        color: #fff;
    }
    .forecast-info ul {
        list-style: none;
        padding: 0;
    }

    .forecast-info li {
        margin-bottom: 5px;
    }
    
    .forecast-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: flex-start;
        width: 100%;
    }
    
    .forecast-card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        border: 1px solid #e0e0e0;
        padding: 10px;
        border-radius: 5px;
        background-color: rgba(165, 165, 165, 0.5);
        min-width: 120px;
        box-sizing: border-box;
    }
    
</style>