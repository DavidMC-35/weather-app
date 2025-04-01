<template>
    <div class="search-bar">
        <form @submit.prevent="fetchWeather">
            <input type="text" v-model="city" placeholder="Escribe la ciudad" />
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
                    <g fill="#ffffff">
                        <path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"/>
                        <path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"/>
                    </g>
                </svg>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['fetchWeather']);
const city = ref('');

const fetchWeather = () => {
    if (city.value.trim() === '') {
        alert('Por favor, introduce una ciudad válida');
    } else {
        console.log("Evento emitido, ciudad: " + city.value);
        emit('fetchWeather', city.value);
        city.value = ''; 
    }
};
</script>

<style scoped>
    .search-bar {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    input[type="text"] {
        padding: 10px;
        /* border-radius: 5px; */
        margin-right: 10px;
        outline: none;
        border: none;
        color: white;
        background-color: transparent;
        border-bottom: 2px solid #a8a8a8;
    }

    button {
        padding: 10px 20px;
        background-color: transparent;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

    }

    button svg {
        width: 20px;
        height: 20px;
        fill: white;
        transition: all 0.3s ease-in-out;

    }

    button:hover svg {
        transform: translateY(-2px);
        transition: all 0.3s ease-in-out;
    }
</style>