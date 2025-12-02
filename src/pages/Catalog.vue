<script setup lang="ts">
  import Filters from '../components/Filters.vue';
import Products from '../components/Products.vue';
</script>

<template>
    <section class="catalog">
        <Filters/>
        <main>
          <h2 class="catalog__title">Catalog</h2>
          <Products/>
        </main>
    </section>
</template>

<style scoped>
  .catalog {
    display: flex;
  }

  .catalog__title {
    margin: 4px 0;
  }
</style>