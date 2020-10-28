<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <img :src="product.image" alt="product-img" />
    <p>{{ product.price }}€</p>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: {
    product: Object
  }
};
</script>

<style scoped>
.card {
  width: 250px;
  height: 250px;
  margin: 0px 20px 20px 0px;
  border: 1px solid black;
}

img {
  max-width: 100px;
}
</style>