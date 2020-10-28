<template>
  <div class="filter-container">
    <button>reset filters</button>
    <hr />
    <div class="price-filter">
      <p>price max</p>
      <div class="price-input">
        <input
          id="price-range"
          @change="$emit('price-change', maxPrice)"
          v-model.number="maxPrice"
          type="range"
          min="10"
          max="60"
          step="1"
        />
        <label for="price-range">{{ maxPrice }}€</label>
      </div>
    </div>
    <hr />
    <div class="color-filter">
      <p>colors</p>
      <div class="color-blocks">
        <div class="color-block" :style="{ 'background-color': 'red' }"></div>
        <div class="color-block" :style="{ 'background-color': 'blue' }"></div>
        <div class="color-block" :style="{ 'background-color': 'green' }"></div>
        <div class="color-block" :style="{ 'background-color': 'black' }"></div>
      </div>
    </div>
    <hr />
    <p>brands</p>
  </div>
</template>

<script>
export default {
  name: "Filters",
  components: {},
  data() {
    console.log("hello");
    return {
      maxPrice: 10
    };
  }
};
</script>

<style scoped>
.filter-container {
  margin: 0px 10px 0px 10px;
  padding: 10px;
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  align-items: flex-start;
}

p {
  text-align: start;
}

.price-input {
  display: flex;
}

.color-blocks {
  display: flex;
}

.color-block {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  cursor: pointer;
}
</style>