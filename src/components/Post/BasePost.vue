<template>
  <div class="BaseReview">
    <section class="BaseReview-Image">
      <vue-glide
        v-if="reviewData.images.length!==0"
        v-bind="glideOption"
        class="Slide"
        v-model="activeIndex"
      >
        <vue-glide-slide v-for="(item,index) in reviewData.images" :key="index">
          <div
            class="Slide-Back"
            v-if="item.image"
            :style="{backgroundImage:`url(${BASEURL}${item.image})`}"
          ></div>
          <div class="SlideBack" v-else></div>
        </vue-glide-slide>
        <template slot="control">
          <span
            class="Slide-Bullet__bg"
            v-for="(item,index) in reviewData.images"
            :key="'bullet'+index"
            :data-glide-dir="'='+index"
          >
            <button class="Slide-Bullet" :class="{is_active:activeIndex==index}"></button>
          </span>
        </template>
      </vue-glide>
      <div v-else class="BaseReview-Image none">이미지가 없습니다.</div>
    </section>
    <section class="BaseReview-Review">
      <div class="BaseReview-Review-Header">
        <img
          class="Header-Avatar"
          v-show="reviewData.user.profile_image"
          :src="BASEURL+reviewData.user.profile_image"
        />
        <img v-show="!reviewData.user.profile_image" class="Header-Avatar" />
        <router-link
          class="Header-Name link"
          :to="{name:'userPosts',params:{userId:reviewData.user.id}}"
        >
          <div v-text="reviewData.user.username"></div>
        </router-link>
        <div class="Header-Like" @click="submitLike">
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
        <div class="Comment" v-for="(comment,index) in comments" :key="'comment'+index">
          <div class="Comment-Avatar">
            <img :src="BASEURL+comment.created_by.profile_image" alt="avatar" />
          </div>
          <div class="Comment-Body">
            <router-link
              class="link"
              :to="{name:'userPosts',params:{userId:comment.created_by.id}}"
            >
              <b>{{comment.created_by.username}}</b>
            </router-link>
            {{comment.body}}
            <div class="Comment-Date" v-text="getDate(comment.created_at)"></div>
          </div>
        </div>
      </div>
      <div class="BaseReview-Review-Submit">
        <input type="text" v-model="commentText" @keypress.enter="submitComment" />
        <button @click="submitComment">게시</button>
      </div>
    </section>
  </div>
</template>

<script>
// external
import { Glide, GlideSlide } from "vue-glide-js";
import { subDays, distanceInWordsToNow } from "date-fns";
import koLocal from "date-fns/locale/ko";
// icon
import left_arrow from "@/assets/icon/left_arrow.vue";
import right_arrow from "@/assets/icon/right_arrow.vue";
const redHeart = require("@/assets/icon/redheart.png");
const hashtag = require("@/assets/icon/hashtag.png");
// utility
import reviewData from "@/utility/postest.data";
import axios, { BASEURL } from "@/utility/axios";
import { goUserView } from "@/utility/mixin";
import { mapGetters } from "vuex";

export default {
  name: "base-post",
  mixins: [goUserView],
  data() {
    return {
      BASEURL,
      redHeart,
      hashtag,
      activeIndex: 0,
      commentText: "",
      glideOption: {
        perView: 1.1,
        focusAt: "center",
        gap: 10,
        rewind: false
      }
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
    },
    ...mapGetters({
      reviewData: "getPost",
      comments: "getComments",
      isAuth: "getAuth",
      jwt: "getJwt"
    })
  },
  methods: {
    getDate(date) {
      return distanceInWordsToNow(new Date(date), { locale: koLocal }) + "전";
    },
    submitLike() {
      if (this.isAuth) {
        axios({
          method: "post",
          url: `/reviews/${this.reviewData.id}/like/`,
          headers: {
            Authorization: `JWT ${this.jwt}`
          }
        }).then(res => {
          console.log(res);
          this.commentText = "";
          axios
            .get(`/reviews/${this.reviewData.id}/`)
            .then(res => {
              this.$store.commit("setPost", res.data);
            })
            .catch();
        });
      } else {
        alert("로그인이 필요합니다.");
      }
    },
    submitComment() {
      if (this.isAuth) {
        axios({
          method: "post",
          url: `/reviews/${this.reviewData.id}/comments/`,
          headers: {
            Authorization: `JWT ${this.jwt}`
          },
          data: {
            body: this.commentText
          }
        }).then(res => {
          console.log(res);
          this.commentText = "";
          axios.get(`/reviews/${this.reviewData.id}/comments/`).then(res => {
            this.$store.commit("setComments", res.data);
          });
        });
      } else {
        alert("로그인이 필요합니다.");
      }
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index.scss";
.BaseReview {
  // width: 900px;
  height: 100%;
  min-height: 440px;
  display: flex;

  &-Image {
    width: 55%;
    &.none {
      height: 100%;
      width: 100%;
      font-size: 20px;
      text-align: center;
      background-color: rgb(163, 163, 163);
    }
  }
  &-Review {
    width: 45%;
    padding: 18px;
    padding-bottom: 32px;
    position: relative;
    &-Header {
      display: flex;
      padding-bottom: 20px;
      align-items: center;
      .Header {
        &-Avatar {
          border-radius: 100%;
          width: 44px;
          height: 44px;
          background-color: gray;
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
          background: #fff;
          transition: 0.25s;
          &:hover {
            transition: 0.25s;
            background: rgba(184, 184, 184, 0.678);
          }
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
      height: 56%;
      max-height: 250px;
      color: #000;
      font-size: 16px;
      overflow-y: scroll;
      .Comment {
        padding-bottom: 10px;
        margin-bottom: 8px;
        display: grid;
        grid-template-columns: 20% 80%;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
        &-Avatar {
          padding-top: 3px;
          text-align: center;
          img {
            border-radius: 100%;
            width: 35px;
            height: 35px;
          }
        }
        &-Date {
          font-family: NanumGothic;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.4);
          padding-top: 13px;
        }
      }
    }
    &-Submit {
      display: flex;
      position: absolute;
      width: 95.5%;
      bottom: 0;
      box-sizing: border-box;
      border-top: 0.5px solid rgba(0, 0, 0, 0.5);
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      padding: 0.5px;
      input {
        flex-grow: 1;
        border: none;
      }
      button {
        all: unset;
        padding: 6px 10px;
        font-size: 16px;
        font-weight: bold;
        background-color: #fff;
        border: none;
        color: #1095f7;
      }
    }
  }
  .Slide {
    height: 100%;
    .glide__track {
      height: 100%;
    }
    .glide__slides {
      height: 100%;
      // padding-bottom: 5%;
    }
    &-Back {
      height: 100%;
      min-height: 400px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
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
      width: 12px;
      height: 12px;
      background-color: rgb(104, 104, 104);
      border-radius: 100%;
      transition: 0.3s ease-out;
      margin: 0px 6px;
      &__bg {
        display: inline-block;
        padding: 2px;
        // height:14px;
        background: rgba(0, 0, 0, 0.5);
      }
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