<template>
  <div class="Search">
    <base-slide :option="slideOption" :data="data"></base-slide>
    <div class="Search-Content">
      <div class="Search-Content-Container">
        <the-filter class="Search-Content-Filter" />
        <base-board class="Search-Content-Board" />
      </div>
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
    "the-filter": () => import("@/components/Filter/TheFilter.vue"),
    "base-board": () => import("@/components/Board/BaseBoard.vue")
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Search {
  &-Content {
    display: flex;
    justify-content: center;
    &-Container {
      margin: auto;
      display: flex;
      align-items: flex-start;
    }
    &-Filter{
      margin-right:10px;
    }
    &-Board {
      width: 630px;
    }
  }
}
</style>