<template>
  <nav class="TheBanner">
    <div class="TheBanner-Container">
      <h1 class="TheBanner-Head">보람을 나누는 공간, 봉투</h1>
      <pre class="TheBanner-Body" v-text="text"></pre>
      <base-button class="TheBanner-Postbuton">작성하기</base-button>
      <div class="TheBanner-Search">
        <base-select></base-select>
        <base-button :radius="3"></base-button>
      </div>
    </div>
  </nav>
</template>

<script>
import backTop from "@/assets/icon/banner_background_top.svg";
import backBottom from "@/assets/icon/banner_background_bottom.svg";
export default {
  data() {
    return {
      text:
        "당신의 봉사활동, 간직하고 싶나요?\n보람을 봉투에 담아 사람들과 나눠보세요.\n서로의 따뜻한 마음으로.",
      backTop: backTop,
      backBottom: backBottom
    };
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index.scss";
.TheBanner {
  &-Container {
    background-color: yellow;
    width: 800px;
    margin: auto;
  }
  &-Head {
    color: $blue;
    font-size: 40px;
    font-weight: 400;
    margin: 20px 0px;
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
    .el-input__inner {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .BaseButton{
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}
</style>