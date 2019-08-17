<template>
  <nav class="TheBanner">
    <div class="TheBanner-Container contents">
      <h1 class="TheBanner-Head">보람을 나누는 공간, 봉투</h1>
      <pre class="TheBanner-Body" v-text="text"></pre>
      <router-link v-if="getAuth" :to="{name:'category_post'}">
        <base-button class="TheBanner-Postbuton">작성하기</base-button>
      </router-link>
      <div class="TheBanner-Search">
        <base-select
          :optionList="activityList"
          :multiple="true"
          :filterable="true"
          placeholder="봉사활동 검색하기"
          :checkedData="checkedActivity"
          @update:checked="v => checkedActivity = v"
        ></base-select>
        <span @click="search">
          <base-button :radius="2">
            <search-icon style="height:17px"></search-icon>
          </base-button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import backTop from "@/assets/icon/banner_background_top.svg";
import backBottom from "@/assets/icon/banner_background_bottom.svg";
import searchIcon from "@/assets/icon/search_blue";
import activityList from "@/utility/activity.data";
import { mapGetters } from "vuex";
export default {
  components: {
    "search-icon": searchIcon
  },
  data() {
    return {
      checkedActivity: [],
      text:
        "당신의 봉사활동, 간직하고 싶나요?\n보람을 봉투에 담아 사람들과 나눠보세요.\n서로의 따뜻한 마음으로.",
      backTop: backTop,
      backBottom: backBottom
    };
  },
  computed: {
    getHash() {
      return this.checkedActivity.reduce((prv, val) => {
        return prv + `activites=${val}&`;
      }, "#");
    },
    activityList() {
      return activityList.map(item => item.name);
    },
    ...mapGetters([["getAuth"]])
  },
  methods: {
    search() {
      this.$router.push({
        name: "search",
        hash: this.getHash
      });
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index.scss";

.TheBanner {
  // &-Container {

  // }
  &-Head {
    color: $blue;
    font-size: 40px;
    font-weight: 400;
    margin: 0px 0px 20px 0px;
    padding-top: 20px;
  }
  &-Body {
    font-family: "Noto Serif KR", serif;
    margin: 0;
    padding: 0;
    color: #999;
    font-size: 30px;
    font-weight: 300;
    line-height: 40px;
  }
  &-Postbuton {
    margin: 30px 0px;
  }
  &-Search {
    display: flex;
    align-items: stretch;
    margin-top: 80px;
    .BaseSelect {
      width: 100%;
    }
    .el-input__inner {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .BaseButton.button__radius2 {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}
</style>