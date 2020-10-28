<template>
  <div class="grid">
    <ProductCard v-for="(product, i) in products" :key="i" :product="product" />
  </div>
</template>

<script>
import ProductCard from "@/components/product-card.vue";

export default {
  name: "products-grid",
  components: {
    ProductCard
  },

  data() {
    return {
      products: [
        {
          name: "blue tshirt",
          price: 45,
          image:
            "https://i.pinimg.com/originals/06/14/28/0614281c43fda3ad87fa9a82371032c4.png"
        },
        {
          name: "red tshirt",
          price: 30,
          image:
            "https://i.pinimg.com/originals/33/ed/7f/33ed7f9cfde40c9ebc21f5d7ccf42e29.png"
        },
        {
          name: "green tshirt",
          price: 52,
          image:
            "https://i.pinimg.com/originals/a5/73/d8/a573d87027a882332ae8aff5f19da24a.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
}
</style>