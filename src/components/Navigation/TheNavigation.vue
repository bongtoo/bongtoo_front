<template>
  <nav>
    <img :src="logo" alt srcset />
  </nav>
</template>

<script>
import Logo from "@/assets/icon/logo.svg";
export default {
  data() {
    return {
      logo: Logo
    };
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
</style>