<template>
<nav><Navbar /></nav>
<main>
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
</main>
<main>
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
</main>
</template>

<script setup>
import Card from './components/Card.vue';
import Navbar from './components/Navbar.vue'
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
html,
body {
  height: 100%;
}
body{
  background-color: rgb(18, 26, 36);
}
main{
  margin-left: 18px;
  align-items: center;
  display: flex;
}

</style>