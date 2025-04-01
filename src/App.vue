<template>
  <div>
    <div class="sideBar">
      <h1>Weather App</h1>
      <p>Comprueba que tiempo hace en tu ciudad</p>
    <SearchBar />

    </div>
    <div class="weather-info"></div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SearchBar from './components/SearchBar.vue';
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