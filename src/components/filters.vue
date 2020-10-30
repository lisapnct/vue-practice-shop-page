<template>
  <div class="filter-container">
    <button @click="resetState" >reset filters</button>
    <hr />
    <div class="price-filter">
      <p>price max</p>
      <div class="price-input">
        <input
          id="price-range"
          @change="setMaxPrice"
          v-model.number="maxPrice"
          type="range"
          min="20"
          max="80"
          step="1"
        />
        <label for="price-range">{{ maxPrice }}€</label>
      </div>
    </div>
    <hr />
    <div class="color-filter">
      <p>colors</p>
      <div class="color-blocks">
        <div id="red" @click="setColorFilter" class="color-block" :style="{ 'background-color': 'red' }"></div>
        <div id="blue" @click="setColorFilter" class="color-block" :style="{ 'background-color': 'blue' }"></div>
        <div id="green" @click="setColorFilter" class="color-block" :style="{ 'background-color': 'green' }"></div>
        <div id="black" @click="setColorFilter" class="color-block" :style="{ 'background-color': 'black' }"></div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Filters",
  components: {},
  data() {
    return {
      maxPrice: 50,
      color: '', 
    };
  },
  methods: {
    setMaxPrice() {
      this.$store.commit("setMaxPrice", this.maxPrice);
    },
    setColorFilter(evt) {
      this.color = evt.currentTarget.id;
      this.$store.commit("setFilterColor", this.color);
    },
    resetState() {
      this.$store.commit("resetFilters")
    }
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