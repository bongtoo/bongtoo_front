<template>
  <div class="Home">
    <the-banner></the-banner>
    <div class="Home-moreReviewButton">
      <base-button>리뷰 더보기</base-button>
    </div>
    <base-slide :option="slideOption" :data="data"></base-slide>
  </div>
</template>

<script>
import the_banner from "../components/Banner/TheBanner";
import BaseSlide from "../components/Slide/BaseSlide";
import testSet from "../testset/home";

export default {
  name: "home",
  data() {
    return {
      data: testSet,
      slideOption: {
        perView: 4,
        gap: 0,
        peek: {
          before: 0,
          after: 100
        },
        animationDuration: 270,
        rewind: false
      },
      selectValue: "",
      optionList: ["hi", "hello", "bye", "goodbye"]
    };
  },
  components: {
    "the-banner": the_banner,
    [BaseSlide.name]: BaseSlide
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";

.Home {
  width: 100%;
  height: calc(100% - 72px);
  // background-color: aqua;
  &-moreReviewButton {
    text-align: right;
    padding-top: 2%;
    padding-right: 2%;
  }
}
</style>

