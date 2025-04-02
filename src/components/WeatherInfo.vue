<template>
    <div class="weather-content">
        <div class="weather-header">
            <h2>Detalles del clima</h2>
        </div>
        
        <div class="weather-details-container">
            <WeatherCard />
            
            <!-- Aquí puedes añadir componentes adicionales -->
            
            <!-- <div class="weather-forecast" v-if="weatherStore.getWeatherInfo.length !== 0">
                Componente de pronóstico
            </div>
            
            <div class="weather-charts" v-if="weatherStore.getWeatherInfo.length !== 0">
                Componente de gráficos
            </div> -->
        </div>
    </div>
</template>

<script setup>

    import WeatherCard from './Weather.Card.vue';
    import { useWeatherStore } from '../store/weatherStore.js';
    const weatherStore = useWeatherStore();

</script>
<style scoped>
    .weather-content {
        padding: 20px;
        height: 100vh;
    }
    
    .weather-header {
        margin-bottom: 20px;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 10px;
    }
    
    .weather-details-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
</style>