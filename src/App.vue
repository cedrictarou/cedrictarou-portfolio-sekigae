<template>
  <div id="app">
    <NavbarVue></NavbarVue>
    <div class="container">
      <HeaderVue></HeaderVue>
      <SekigaeVue></SekigaeVue>
    </div>
  </div>
</template>

<script>
import NavbarVue from "./components/Navbar.vue";
import HeaderVue from "./components/Header.vue";
import SekigaeVue from "./components/Sekigae.vue";

export default {
  components: {
    NavbarVue,
    HeaderVue,
    SekigaeVue
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
