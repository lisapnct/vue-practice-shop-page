<template>
  <div class="grid">
    <ProductCard
      v-for="(product, i) in filteredByPrice"
      :key="i"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/product-card.vue";

export default {
  name: "products-grid",
  components: {
    ProductCard
  },

  computed: {
    filteredByPrice() {
      return this.$store.state.products.filter(
        product => product.price <= this.$store.state.maxPrice
      );
    }
  }
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
}
</style>