<template>
  <div id="app">
    <app-header></app-header>

    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

<script>
import "./scss/main.scss";
import Footer from './components/Footer';
import Header from './components/Header';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
}
</script>

