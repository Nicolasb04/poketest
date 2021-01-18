<template>
  <div id="app">
    <Navbar />
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Navbar: () => import("./components/Navbar"),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;

  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
