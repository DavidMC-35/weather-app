<template>
    <div class="weather-summary">
        <div class="weather-summary-item">
            <h3>Ciudad</h3>
            <p>{{ weatherStore.getCity }}</p>
            <img :src="`https://openweathermap.org/img/wn/${weatherStore.getIcon}@2x.png`" alt="Weather Icon">
        </div>
        <div class="weather-summary-item">
            <h3>Temperatura</h3>
            <p>{{ weatherStore.getTemperature }}°C</p>
        </div>
        <!-- <div class="weather-summary-item">
            <h3>Temperatura</h3>
            <p>{{ weatherStore.getTemperature }}°C</p>
        </div> -->
    </div>
</template>

<script setup>

import { useWeatherStore } from '../store/weatherStore.js';
const weatherStore = useWeatherStore();

</script>

<style scoped>
    .weather-summary {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        margin-top: 20px;
        gap: 10px;
    }

    .weather-summary-item{
        padding: 0 25px ;
        background-color: #f5f5f542;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;

    }
</style>