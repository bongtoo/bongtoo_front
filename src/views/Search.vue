<template>
  <div class="Search">
    <div class="base-slide__prv" v-if="!reviewList.length">
      리뷰가 없습니다. 한번 작성하실?
      <router-link :to="{name:'post'}" tag="span">
        <base-button
          style="marginLeft:20px;"
          class="TheBanner-Postbuton"
          color="ocean"
          type="fill"
        >작성하기</base-button>
      </router-link>
    </div>
    <base-slide v-else :option="slideOption" :data="reviewList"></base-slide>
    <div class="Search-Content">
      <div class="Search-Content-Container">
        <the-filter class="Search-Content-Filter" />
        <base-board :data="serviceList" @addList="addServiceList" class="Search-Content-Board" />
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
  components: {
    "base-slide": BaseSlide,
    "the-filter": () => import("@/components/Filter/TheFilter.vue"),
    "base-board": () => import("@/components/Board/BaseBoard.vue")
  },
  data() {
    return {
      reviewList: [],
      serviceList: [],
      query: null,
      servicePage: 1,
      reviewPage: 1,
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
  watch: {
    $route: "fetchQuery"
  },
  methods: {
    fetchQuery() {
      console.log("주소변화");
      console.log(this.$route.hash.slice(1));
      this.query = this.$route.hash.slice(1);
      this.servicePage = 1;
      this.reviewPage = 1;
      this.reviewList = [];
      this.serviceList = [];
      this.addReviewList();
      this.addServiceList();
    },
    addServiceList() {
      axios
        .get(`/search/volunteer/?page=${this.servicePage}&${this.query}`)
        .then(res => {
          this.serviceList = this.serviceList.concat(res.data.results);
        })
        .catch(err => console.log(err));
    },
    addReviewList() {
      axios
        .get(`/search/reviews/?page=${this.reviewPage}&${this.query}`)
        .then(res => {
          this.reviewList = this.reviewList.concat(res.data.results);
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.$nextTick(() => {
      this.fetchQuery();
      this.addReviewList();
      this.addServiceList();
    });
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.base-slide__prv {
  text-align: center;
  margin: 10px 0px;
  margin-bottom: 15px;
  padding: 4vw;
  background-color: $ocean-lighten1;
}
.Search {
  overflow: auto;
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