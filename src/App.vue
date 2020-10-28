<template>
  <div id="app">
    <div id="nav">
      <h3>T-shirts challenge</h3>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px 10px 20px 10px;
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
