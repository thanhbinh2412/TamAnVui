<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router'

</script>

<template>
  <!-- HEADER -->
  <!-- <Header /> -->
  <router-view />
  <!-- FOOTER -->
  <!-- <Footer /> -->
</template>

<style>
/* Import luxurious fonts from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

/* Apply base font to body for overall elegance */
body {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Ensure smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Additional styling for a more polished look can be added here */
/* For example, custom scrollbar if desired, or specific link stylings */
</style>