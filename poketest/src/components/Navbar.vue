<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand><img src="../assets/logo.png"/></b-navbar-brand>
      <router-link class="homeLink" to="/home">Home</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<style scoped lang="scss">
.homeLink {
  color: yellow;
  font-weight: bold;
}
</style>
