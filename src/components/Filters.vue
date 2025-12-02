<script setup>
    import filters from '../assets/brands.json';
</script>

<template>
    <aside class="filters">
      <h3 class="filters__title">All Brands</h3>
      <form class="filters__form">
        <label v-for="filter in filters" :id="filter.id" class="filters__label">
          <input type="checkbox" :name="filter.code" class="filters__input">
          <span class="filters__text">{{ filter.title }}</span>
        </label>
      </form>
    </aside>
</template>

<style scoped>
  .filters {
    border-right: 1px solid gray;
    margin-right: 60px;
    padding-right: 30px;
  }

  .filters__title {
    margin: 6px 0;
  }

  .filters__form {
    display: flex;
    flex-direction: column;
  }

  .filters__label {
    margin-bottom: 10px;
    cursor: pointer;
  }

  .filters__input {
    display: none;
  }

  .filters__input:checked + .filters__text {
    text-shadow: 1px 0 0 black;
    border-bottom: 2px solid black;
  }
</style>