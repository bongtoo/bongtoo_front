<template>
  <div class="home">
    <div class="home-banner">

    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selectValue: "",
      optionList: ["hi", "hello", "bye", "goodbye"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.home {
}
</style>

