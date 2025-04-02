<template>
    <div class="content">
        <WeatherCard />
    </div>
</template>

<script setup>

    import WeatherCard from './Weather.Card.vue';
    import { useWeatherStore } from '../store/weatherStore.js';
    const weatherStore = useWeatherStore();

</script>
<style scoped>
    
</style>