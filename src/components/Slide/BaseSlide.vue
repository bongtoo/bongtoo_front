<template>
  <vue-glide v-bind="optionObject" class="Slide">
    <vue-glide-slide v-for="(item,index) in data.images" :key="index">
      <div class="SlideInfo">
        <div class="SlideInfo-Container">
          <h1 class="SlideInfo-Head">포스트 대학생 2기</h1>
          <p class="SlideInfo-Body">2년만에 하게 된 봉사. 이번엔 포스요 봉사를 갔어요. 신나 네 하하 와! 너무 최고인…</p>
        </div>
      </div>
      <div class="SlideBack" :style="{backgroundImage:`url(${item.url})`}"></div>
    </vue-glide-slide>
    <template slot="control">
      <button class="Slide-Button" data-glide-dir="<">
        <left-arrow />
      </button>
      <button class="Slide-Button" data-glide-dir=">">
        <right-arrow />
      </button>
    </template>
  </vue-glide>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import left_arrow from "@/assets/icon/left_arrow.vue";
import right_arrow from "@/assets/icon/right_arrow.vue";

export default {
  props: {
    optionObject: {
      default: null
    },
    data: {
      type: Object,
      default: null
    }
  },
  name: "base-slide",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    "left-arrow": left_arrow,
    "right-arrow": right_arrow
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Slide {
  margin: 10px 0px;
  &-Button {
    border: none;
    width: 3%;
    height: calc(100% - 40px);
    background-color: rgba(51, 51, 51, 0.5);
    top: 20px;
    position: absolute;
    &:nth-last-child(1) {
      right: 0;
    }
  }
  .glide__slide {
    height: 21vw;
    min-height: 168px;
    // background-color: yellow;
    overflow: hidden;
    position: relative;
  }
  &Back {
    // top: 0;
    // position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
  &Info {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.3);
    color: white;
    transition: 0.3s;
    &-Container {
      padding: 30px 20px;
      position: absolute;
      bottom: 0;
    }
    &-Head {
      margin: 12px 0px;
      font-size: 2vw;
    }
    &-Body {
      font-weight: bold;
      margin: 12px 0px;
      font-size: 1.1vw;
    }
    &:hover {
      background-color: rgba(51, 51, 51, 0.5);
    }
    &:hover + .SlideBack {
      transform: scale(1.05);
    }
  }
}
</style>