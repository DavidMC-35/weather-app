<template>
  <div class="app-container">
    <div class="sidebar">
      <h1>Weather App</h1>
      <SearchBar @fetchWeather="handleFetchWeather" />
      <SidebarWeatherSummary v-if="weatherStore.getWeatherInfo.length !== 0" />      
      <p v-else>{{ weatherStore.message }}</p>
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
  import SidebarWeatherSummary from './components/SidebarWeatherSummary.vue';

  const weatherStore = useWeatherStore();

  const handleFetchWeather =  (city) => {
    weatherStore.fetchWeather(city);
    weatherStore.fetchWeatherForecast(city); 
  };

</script>

<style scoped>
  .app-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
    background-image: url('https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .sidebar {
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.4);
    overflow-y: auto;
  }

  .main-content {
    flex: 1;
    margin-left: 350px;
    padding: 20px;
    min-height: 100vh;
    box-sizing: border-box;
  }
</style>