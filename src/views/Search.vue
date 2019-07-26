<template>
  <div class="Search">
    <base-slide :option="slideOption" :data="data"></base-slide>
    <div class="Search-Board">
      <the-filter/>
    </div>
  </div>
</template>

<script>
import testSet from "../testset/home";
import BaseSlide from "@/components/Slide/BaseSlide.vue";

export default {
  name: "Search",
  data() {
    return {
      data: testSet,
      slideOption: {
        rewind: false,
        perView: 4,
        gap: 0,
        peek: {
          before: 0,
          after: 100
        }
      }
    };
  },
  components: {
    "base-slide": BaseSlide,
    "the-filter": () => import("@/components/Filter/TheFilter.vue")
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
</style>