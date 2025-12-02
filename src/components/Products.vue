<script setup>
  import products from '../assets/products.json';
</script>

<template>
  <div class="products">
    <ul class="products__list">
      <li class="products__item" v-for="product in products" :key="product.id">
        <img :src="`src/assets/${ product.image }`" class="products__image" width="190" height="190" :alt="product.title"/>
        <p class="products__title">{{ product.title }}</p>
        <p class="products__brand">Brand {{ product.brand }}</p>
        <p class="products__price">{{product.regular_price.currency === 'USD' ? '$' : '?'}} {{ product.regular_price.value }}</p>
        <button class="products__add-button">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .products__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    row-gap: 20px;
  }

  .products__item {
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 10px;
    border: 1px solid black;
  }

  .products__title,
  .products__brand,
  .products__price {
    margin: 0;
    margin-bottom: 10px;
  }

  .products__add-button {
    align-self: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: burlywood;
  }

  .products__add-button:hover {
    border-radius: 30px;
    box-shadow: 0 2px 5px gray;
  }
</style>