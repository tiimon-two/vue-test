<script setup>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
</script>

<template>
  <div class="container">
    <Header class="header"></Header>
    <main>
      <slot></slot>
    </main>
    <Footer class="footer"></Footer>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 60px;
  }

  .header {
    grid-row: 1 / 2;
  }

  .footer {
    grid-row: -1 / -2;
  }
</style>