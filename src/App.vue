<template>
  <div id="app">
    <the-navigation></the-navigation>
    <router-view />
  </div>
</template>


<script>
import TheNavigation from "@/components/Navigation/TheNavigation.vue";
export default {
  components: { TheNavigation }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
