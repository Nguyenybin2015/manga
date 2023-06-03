<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav><Navbar /></nav>
  <!-- <HomeView /> -->
  <router-view></router-view>
  <footer><Footer /></footer>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
html,
body {
  height: 100%;
}
body {
  background-color: rgb(18, 26, 36);
}
main {
  margin-left: 18px;
  align-items: center;
  display: flex;
}
nav{
  position: relative;
}
footer {
left: 0;
bottom: 0;
width: 100%;
}
</style>
