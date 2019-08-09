<template>
  <nav class="TheNavigation" :class="navColor">
    <router-link :to="{name:'home'}" tag="span" class="TheNavigation-Logo">
      <img :src="logoColor" alt />
      <span>봉투</span>
    </router-link>
    <span class="TheNavigation-Buttons">
      <router-link v-if="!getAuth" :to="{name:'userPosts'}">
        <base-button :color="buttonColor">{{getUsername}}</base-button>
      </router-link>
      <router-link v-if="!getAuth" :to="{name:'post'}">
        <base-button :color="buttonColor">작성하기</base-button>
      </router-link>
      <router-link v-if="getAuth" :to="{name:'signin'}" tag="span">
        <base-button :color="buttonColor">로그인</base-button>
      </router-link>
      <router-link v-if="getAuth" :to="{name:'signup'}" tag="span">
        <base-button :color="buttonColor">회원가입</base-button>
      </router-link>
    </span>
  </nav>
</template>

<script>
const logo_color = require("@/assets/icon/logo_color.svg");
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      navColor: null,
      buttonColor: "black",
      logoColor: logo_color
    };
  },
  computed: {
    ...mapGetters(["getAuth", "getUsername"])
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      if (this.$router.currentRoute.name === "home") {
        console.log(this.$router.currentRoute.name);
        this.navColor = "home";
        this.buttonColor = "white";
      } else {
        this.navColor = null;
        this.buttonColor = "black";
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.username {
  font-size: 120%;
  margin-right: 10px;
}
.TheNavigation {
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 1.3%;
  &-Logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .BaseButton {
    font-size: 14px;
    width: 80px;
    padding: 5px 9px;
    margin: 0px 8px;
  }
  &.home {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f9f9f9+25,0b97f9+55,fa029f+88&0+25,1+67,1+67,1+100 */
    background: -moz-linear-gradient(
      45deg,
      rgba(249, 249, 249, 0) 25%,
      rgba(11, 151, 249, 0.71) 55%,
      rgba(98, 97, 216, 1) 67%,
      rgba(250, 2, 159, 1) 88%,
      rgba(250, 2, 159, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      45deg,
      rgba(249, 249, 249, 0) 25%,
      rgba(11, 151, 249, 0.71) 55%,
      rgba(98, 97, 216, 1) 67%,
      rgba(250, 2, 159, 1) 88%,
      rgba(250, 2, 159, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      45deg,
      rgba(249, 249, 249, 0) 25%,
      rgba(11, 151, 249, 0.71) 55%,
      rgba(98, 97, 216, 1) 67%,
      rgba(250, 2, 159, 1) 88%,
      rgba(250, 2, 159, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00f9f9f9', endColorstr='#fa029f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
}
</style>