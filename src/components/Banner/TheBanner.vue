<template>
  <nav class="TheBanner">
    <div class="TheBanner-Back">
      <img class="TheBanner-Back-Item TheBanner-Back-Item__top" :src="backTop" />
      <img class="TheBanner-Back-Item TheBanner-Back-Item__bottom" :src="backBottom" />
    </div>
  </nav>
</template>

<script>
import backTop from "@/assets/icon/banner_background_top.svg";
import backBottom from "@/assets/icon/banner_background_bottom.svg";
export default {
  data() {
    return {
      backTop: backTop,
      backBottom: backBottom
    };
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.TheBanner {
  width: 100%;
  background-color: yellow;
  &-Back {
    width: 100%;
    // height: 520px;
    background-color: wheat;
    position: relative;
    &-Item {
      width: 100%;
      &__top {
        /* Vector */

        position: absolute;
        height: 301px;
        left: 389px;
        top: -30px;
      }
      &__bottom {
        position: absolute;
        height: 422.54px;
        left: -154px;
        top: 514px;
        // background: linear-gradient(90deg, #1193f6 -2.71%, #fa029f 100.03%);
      }
    }
  }
}
</style>