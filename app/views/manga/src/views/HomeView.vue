<template>
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
  <div class="pagination"><Pagination /></div>
</template>

<script setup>
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';
</script>
<style>
.pagination{
  position: relative;
  padding: 19px;
  display: flex;
  bottom: 0;
  align-items: center;
  justify-content: center;
}
</style>