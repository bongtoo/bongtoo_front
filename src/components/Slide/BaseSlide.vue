<template>
  <vue-glide v-bind="option" class="Slide">
    <vue-glide-slide v-for="(item,index) in data" :key="index">
      <div class="SlideInfo" @click="watchDetailReview(item.id)">
        <div class="SlideInfo-Container">
          <h1 class="SlideInfo-Head" v-text="item.title"></h1>
          <pre class="SlideInfo-Body" v-text="item.body"></pre>
        </div>
      </div>
      <div
        class="SlideBack"
        v-if="item.get_thumnail"
        :style="{backgroundImage:`url(http://127.0.0.1:8000${item.get_thumnail.image})`}"
      ></div>
      <div class="SlideBack" v-else></div>
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
import axios from "@/utility/axios";
import { async } from "q";
export default {
  props: {
    option: {
      default: null
    },
    data: {}
  },
  name: "base-slide",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    "left-arrow": left_arrow,
    "right-arrow": right_arrow
  },
  methods: {
    watchDetailReview(id) {
      axios
        .get(`/reviews/${id}/`)
        .then(res => {
          console.log(res.data);
          this.$store.commit("setPost", res.data);
        })
        .then(() => {
          axios
            .get(`/reviews/${id}/comments/`)
            .then(res => {
              this.$store.commit("setComments", res.data);
            })
            .then(() => {
              this.$emit("updated:visible");
            });
        });
    }
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