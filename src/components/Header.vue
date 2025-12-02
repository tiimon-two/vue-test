<template>
    <header class="header">
      <a class="header__logo" href="">
        <img src="../assets/images/logo.png" width="250" height="100" alt="Astrio logo"/>
      </a>
      <a class="header__cart" href="">
        <img src="../assets/images/cart.svg" width="48" height="48" alt="Cart"/>
      </a>
  </header>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 0 10px;
    border-bottom: 1px solid gray;
  }

  .header__cart {
    position: relative;
  }

  .header__cart::after {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    right: -10px;
    top: -10px;
    border: 2px solid black;
    border-radius: 50%;
  }
</style>