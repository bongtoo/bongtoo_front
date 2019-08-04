<template>
  <div id="app">
    <the-navigation />
    <router-view />
  </div>
</template>


<script>
import TheNavigationVue from "./components/Navigation/TheNavigation.vue";
export default {
  components: {
    "the-navigation": TheNavigationVue
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+KR:300,400&display=swap");
@font-face {
  font-family: "NanumBarunpen";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunpen.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: NanumBarunpen, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  // min-width: 800px;
}
</style>
