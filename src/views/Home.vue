<template>
  <div class="main-container">
    <div class="left-container">
      <Filters />
    </div>
    <div class="right-container">
      <ProductsGrid />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from "@/components/filters.vue";
import ProductsGrid from "@/components/products-grid.vue";

export default {
  name: "Home",
  components: {
    Filters,
    ProductsGrid
  }
};
</script>

<style>
.main-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  height: 80vh;
}

.left-container {
  grid-area: 1 / 1 / 6 / 2;
  border-right: 1px solid black;
}
.right-container {
  grid-area: 1 / 2 / 6 / 5;
}
</style>
