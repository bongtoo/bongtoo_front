<template>
  <div class="Home">
    <the-banner></the-banner>
    <div class="Home-moreReviewButton">
      <!-- <base-button>리뷰 더보기</base-button> -->
    </div>
    <base-slide v-if="reviewList.length" :option="slideOption" :data="reviewList"></base-slide>
  </div>
</template>

<script>
import the_banner from "../components/Banner/TheBanner";
import BaseSlide from "../components/Slide/BaseSlide";
import axios from "@/utility/axios";

export default {
  name: "home",
  components: {
    "the-banner": the_banner,
    [BaseSlide.name]: BaseSlide
  },
  data() {
    return {
      reviewList: [],
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
  methods: {
    addReviewList() {
      axios
        .get(`/api/search/reviews/`)
        .then(res => {
          this.reviewList = this.reviewList.concat(res.data.results);
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.addReviewList();
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

