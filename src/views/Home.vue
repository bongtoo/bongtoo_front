<template>
  <div class="home">
    <the-banner></the-banner>
  </div>
</template>

<script>
import the_banner from "../components/Banner/TheBanner";
export default {
  name: "home",
  data() {
    return {
      selectValue: "",
      optionList: ["hi", "hello", "bye", "goodbye"]
    };
  },
  components: {
    "the-banner": the_banner
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.home {
}
</style>

