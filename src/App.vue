<template>
  <div>
    <div class="sideBar">
      <h1>Weather App</h1>
      <h3>{{ weatherStore.message }}</h3>
      <p>Comprueba que tiempo hace en tu ciudad</p>
    <SearchBar @fetchWeather="handleFetchWeather" />

    </div>
    <div class="weather-info"></div>
  </div>
</template>

<script setup>

  import { useWeatherStore } from './store/weatherStore';
  import SearchBar from './components/SearchBar.vue';

  const weatherStore = useWeatherStore();

  const handleFetchWeather = (city) => {
    weatherStore.fetchWeather(city);
  };



</script>

<style scoped>
  .sideBar{
    width: 300px;
    height: 100vh;
    background-color: #c3c2c2;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
  }
</style>