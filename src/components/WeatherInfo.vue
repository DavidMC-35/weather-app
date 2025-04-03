<template>
    <div class="weather-content">
        <div class="weather-header">
            <h2>Detalles del clima</h2>
        </div>
        
        <div class="weather-details-container">
            <WeatherCard />
            <WeatherForecast />
        </div>
    </div>
</template>

<script setup>
    import WeatherCard from './Weather.Card.vue';
    import WeatherForecast from './WeatherForecast.vue';
    import { useWeatherStore } from '../store/weatherStore.js';
    const weatherStore = useWeatherStore();
</script>

<style scoped>
    .weather-content {
        padding: 20px;
        height: 100%;
        box-sizing: border-box;
    }
    
    .weather-header {
        margin-bottom: 20px;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 10px;
    }
    
    .weather-details-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
</style>