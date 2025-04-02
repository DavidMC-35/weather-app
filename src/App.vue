<template>
  <div class="app-container">
    <div class="sidebar">
      <h1>Weather App</h1>
      <h3>{{ weatherStore.message }}</h3>
      <p>Comprueba que tiempo hace en tu ciudad</p>
      <SearchBar @fetchWeather="handleFetchWeather" />
    </div>
    <div class="main-content">
      <WeatherInfo />
    </div>
  </div>
</template>

<script setup>
  import { useWeatherStore } from './store/weatherStore';
  import SearchBar from './components/SearchBar.vue';
  import WeatherInfo from './components/WeatherInfo.vue';

  const weatherStore = useWeatherStore();

  const handleFetchWeather = (city) => {
    weatherStore.fetchWeather(city);
  };
</script>

<style scoped>
  .app-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  .sidebar {
    width: 300px;
    height: 100vh;
    background-color: #c3c2c2;
    position: fixed;
    top: 0;
    left: 0;
    padding:20px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .main-content {
    flex: 1;
    margin-left: 350px;
    padding: 20px;
    min-height: 100vh;

  }
</style>