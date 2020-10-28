<template>
  <div class="filter-container">
    <button>reset filters</button>
    <p>price max</p>
    <input type="range" />
    <p>brands</p>
    <p>colors</p>
  </div>
</template>

<script>
export default {
  name: "Filters",
  components: {}
};
</script>

<style>
.filter-container {
  margin: 0px 10px 0px 10px;
  padding: 10px;
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  align-items: flex-start;
}
</style>