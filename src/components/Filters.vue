<script setup>
    import filters from '../assets/brands.json';
    import { useFiltersStore } from '../store/filters';

    const store = useFiltersStore();

    function setFilters(filter) {
      const index = store.filters.findIndex((value) => value === filter);
      if (index === -1) {
        store.addFilter(filter);
      } else {
        store.removeFilter(index);
      }
    }
</script>

<template>
    <aside class="filters">
      <h3 class="filters__title">All Brands</h3>
      <form class="filters__form">
        <label v-for="filter in filters" :id="filter.id" :key="filter.id" class="filters__label">
          <input type="checkbox" :name="filter.code" class="filters__input" @click.stop="setFilters(filter.code)">
          <span class="filters__text">{{ filter.title }}</span>
        </label>
      </form>
    </aside>
</template>

<style scoped>
  .filters {
    min-width: 150px;
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

  .filters__label:hover {
    text-shadow: 1px 0 0 black;
  }

  .filters__input {
    display: none;
  }

  .filters__input:checked + .filters__text {
    text-shadow: 1px 0 0 black;
    border-bottom: 2px solid black;
  }
</style>