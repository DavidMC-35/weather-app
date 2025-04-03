<template>
    <div>
        <div class="weather-info" v-if="weatherStore.getWeatherInfo.length !== 0">
            <ul>
                <li><strong>Temperatura mínima:</strong> {{ weatherStore.getMinTemperature }}°C</li>
                <li><strong>Temperatura máxima:</strong> {{ weatherStore.getMaxTemperature }}°C</li>
                <li><strong>Humedad:</strong> {{ weatherStore.getHumidity }}%</li>
                <li><strong>Viento:</strong> {{ weatherStore.getWind }} m/s</li>
                <li><strong>Descripción:</strong> {{ weatherStore.getDescription }}</li>
            </ul>
        </div>
        <div v-else class="weather-info">
            <p>Busca una ciudad para ver el clima</p>
        </div>
    </div>
</template>

<script setup>
    import { useWeatherStore } from '../store/weatherStore.js';
    const weatherStore = useWeatherStore();

</script>

<style scoped>
    .weather-info{
        margin-top: 20px;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        margin-bottom: 8px;
    }
</style>