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
    Navbar: () => import("./components/Navbar")
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
  height: 100%;
}
@import url("https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap");

html,
body {
  font-family: "Miltonian Tattoo", cursive;
}

#app {
  font-family: "Miltonian Tattoo", cursive;
}
</style>
