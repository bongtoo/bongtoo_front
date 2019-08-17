<template>
  <div class="BaseReview">
    <section class="BaseReview-Image">
      <vue-glide v-bind="glideOption" class="Slide" v-model="activeIndex">
        <vue-glide-slide v-for="(item,index) in reviewData.images" :key="index">
          <div
            class="Slide-Back"
            v-if="item.image"
            :style="{backgroundImage:`url(http://127.0.0.1:8000${item.image})`}"
          >asdf</div>
          <div class="SlideBack" v-else></div>
        </vue-glide-slide>
        <template class="Slide-Bullets" slot="control">
          <button
            v-for="(item,index) in reviewData.images"
            :key="'bullet'+index"
            class="Slide-Bullet"
            :class="{is_active:activeIndex==index}"
            :data-glide-dir="'='+index"
          ></button>
        </template>
      </vue-glide>
    </section>
    <section class="BaseReview-Review">
      <div class="BaseReview-Review-Header">
        <img class="Header-Avatar" :src="'http://127.0.0.1:8000'+reviewData.user.profile_image" />
        <div class="Header-Name" v-text="reviewData.user.username"></div>
        <div class="Header-Like">
          <img :src="redHeart" alt="like" srcset />
          <div>
            <b>좋아요 {{reviewData.like_count}} 개</b>
          </div>
        </div>
      </div>
      <div class="BaseReview-Review-Info">
        <span class="Info-Tag"></span>
        <span class="Info-Tag" v-for="(tagName,index) in tagList" :key="'tag'+index">
          <img :src="hashtag" alt="tag" srcset />
          <div class="Info-TagName">{{tagName}}</div>
        </span>
      </div>
      <div class="BaseReview-Review-Body" v-text="reviewData.body"></div>
      <div class="BaseReview-Review-Comment">
        <div class="Comment" v-for="(comment,index) in reviewData.comments" :key="'comment'+index">
          <div class="Comment-Avatar">
            <img :src="'http://127.0.0.1:8000'+comment.created_by.profile_image" alt="avatar" />
          </div>
          <div class="Comment-Body">
            <b>{{comment.created_by.username}}</b>
            {{comment.body}}
          </div>
          <div class="Comment-Date" v-text="getDate(comment.created_at)"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import left_arrow from "@/assets/icon/left_arrow.vue";
import right_arrow from "@/assets/icon/right_arrow.vue";
import reviewData from "@/utility/postest.data";
const redHeart = require("@/assets/icon/redheart.png");
const hashtag = require("@/assets/icon/hashtag.png");

export default {
  name: "base-post",
  data() {
    return {
      redHeart,
      hashtag,
      activeIndex: 0,
      glideOption: {
        perView: 1.1,
        focusAt: "center",
        gap: 10,
        rewind: false
      },
      reviewData
    };
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    "left-arrow": left_arrow,
    "right-arrow": right_arrow
  },
  computed: {
    tagList() {
      function mapName(list) {
        return list.map(elem => elem.name);
      }

      const { subject, activity } = this.reviewData;

      return mapName(subject).concat(mapName(activity));
      /**
      
      코드를 줄이진 않는데 알아보기는 편한가?
      이게 함수형 프로그래밍하는 건가?
      return subject
        .map(elem => elem.name)
        .concat(activity.map(elem => elem.name));
      
     */
    }
  },
  methods: {
    getDate(date) {
      const diffDate = new Date() - new Date(date);
  
      return diffDate;
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index.scss";
.BaseReview {
  // width: 900px;
  height: 100%;
  display: flex;

  &-Image {
    width: 55%;
  }
  &-Review {
    padding: 18px;
    width: 45%;
    &-Header {
      display: flex;
      padding-bottom: 20px;
      align-items: center;
      .Header {
        &-Avatar {
          border-radius: 100%;
          width: 44px;
          height: 44px;
        }
        &-Name {
          padding-left: 10px;
          flex-grow: 1;
          font-size: 18px;
          font-weight: bold;
        }
        &-Like {
          text-align: center;
          cursor: pointer;
        }
      }
    }
    &-Info {
      padding: 8px;
      min-height: 6px;
      border-top: 0.5px solid rgba(0, 0, 0, 0.2);
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
      font-family: NanumGothic;
      font-size: 14px;
      .Info {
        &-Tag {
          display: inline-flex;
          align-items: center;
          &Name {
            margin-left: 3px;
            margin-right: 10px;
          }
        }
      }
    }
    &-Body {
      color: #000;
      padding-top: 13px;
      padding-bottom: 30px;
    }
    &-Comment {
      max-height: 250px;
      color: #000;
      font-size: 16px;
      overflow-y: scroll;
      .Comment {
        padding-bottom: 15px;
        display: grid;
        grid-template-columns: 20% 80%;
        &-Avatar {
          padding-top: 3px;
          text-align: center;
          background-color: yellow;
          img {
            border-radius: 100%;
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
  .Slide {
    height: 100%;
    .glide__slides {
      margin-bottom: 7px;
    }
    &-Back {
      height: 100%;
      min-height: 400px;
    }
    div[data-glide-el="controls"] {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 8px;
      // background-color: yellow;
    }
    &-Bullet {
      all: unset;
      margin: 0px 6px;
      width: 12px;
      height: 12px;
      background-color: rgb(104, 104, 104);
      border-radius: 100%;
      transition: 0.3s ease-out;
      &.is_active {
        background-color: #ffffff;
      }
      &:hover {
        background-color: rgb(233, 233, 233);
      }
    }
  }
}
</style>