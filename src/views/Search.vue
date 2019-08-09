<template>
  <div class="Search">
    <div class="base-slide__prv" v-if="!reviewList.length"></div>
    <base-slide v-else :option="slideOption" :data="reviewList"></base-slide>
    <div class="Search-Content">
      <div class="Search-Content-Container">
        <the-filter class="Search-Content-Filter" />
        <base-board :data="serviceList" class="Search-Content-Board" />
      </div>
    </div>
  </div>
</template>

<script>
import testSet from "../testset/home";
import BaseSlide from "@/components/Slide/BaseSlide.vue";
import axios from "@/utility/axios";
export default {
  name: "Search",
  data() {
    return {
      reviewList: [],
      serviceList: [],
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
  },
  created() {
    this.$nextTick(() => {
      axios
        .get("/api/search/reviews/", { query: this.$route.query })
        .then(res => {
          this.reviewList = this.reviewList.concat(res.data.results);
        })
        .catch(err => console.log(err));

      axios
        .get("/search/volunteer/", { query: this.$route.query })
        .then(res => {
          this.serviceList = this.serviceList.concat(res.data.results);
        })
        .catch(err=>console.log(err));
    });
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
    &-Filter {
      margin-right: 10px;
    }
    &-Board {
      width: 630px;
    }
  }
}
</style>