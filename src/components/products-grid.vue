<template>
  <div class="grid">
    <ProductCard
      v-for="(product, i) in filteredProducts"
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
    filteredProducts() {
      let filteredProdArr = this.$store.state.products.filter(
        product => this.$store.state.color.length === 0 
        ? product.price <= this.$store.state.maxPrice 
        : product.price <= this.$store.state.maxPrice && product.color === this.$store.state.color
      );
      return filteredProdArr;
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