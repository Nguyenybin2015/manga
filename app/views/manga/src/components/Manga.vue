<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {
      chapter: '/src/assets/manga-assets/Mashle/chap-1.png'
    }
  }
}
</script>

<template>
  <div class="justify-center">
    <img :src="chapter" class="justify-items-center" style="width: 100%"/>
  </div>
  <div class="pagination"><Pagination /></div>
</template>

<script setup>
import Pagination from '../components/Pagination.vue'
</script>
