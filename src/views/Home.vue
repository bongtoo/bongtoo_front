<template>
  <div class="Home">
    <the-banner></the-banner>
    <div class="Home-moreReviewButton">
      <!-- <base-button>리뷰 더보기</base-button> -->
    </div>
    <base-slide
      v-if="reviewList.length"
      :option="slideOption"
      :data="reviewList"
      @updated:visible="toggleDialog"
    ></base-slide>
    <el-dialog :visible.sync="dialogVisible">
      <base-post></base-post>
    </el-dialog>
  </div>
</template>

<script>
import the_banner from "../components/Banner/TheBanner";
import BaseSlide from "../components/Slide/BaseSlide";
import BasePost from "@/components/Post/BasePost";

import axios from "@/utility/axios";

export default {
  name: "home",
  components: {
    "the-banner": the_banner,
    [BaseSlide.name]: BaseSlide,
    "base-post": BasePost
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
      dialogVisible: false,
      selectValue: "",
      optionList: ["hi", "hello", "bye", "goodbye"]
    };
  },
  methods: {
    toggleDialog(id) {
      console.log(id);
      this.dialogVisible = true;
    },
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

<style lang="scss">
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
  .el-dialog {
    width: 940px;
    &__body {
      padding: 0;
    }
  }
}
</style>

