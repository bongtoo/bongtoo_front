<template>
  <div class="Signin">
    <img class="Signin-Logo" :src="logo" alt="logo" />
    <input class="Signin-Input" type="text" v-model="id" />
    <input class="Signin-Input" type="text" v-model="pw" />
    <base-button color="ocean" type="fill">로그인</base-button>
    <router-link :to="{name:'category'}">회원가입</router-link>
  </div>
</template>

<script>
const logo_color = require("@/assets/icon/logo_color.svg");

export default {
  data() {
    return {
      logo: logo_color,
      id: "",
      pw: ""
    };
  },
  computed: {
    // logo() {
    //   return () => import("@/assets/icon/logo_color.svg");
    // }
  }
};
</script>

<style lang='scss' scoped>
.Signin {
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  &-Logo {
    height: 270px;
  }
  &-Input {
    all: unset;
    box-sizing: border-box;
    margin: 15px 0px;
    padding: 3px 15px;
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid #999;
    border-radius: 32px;
  }
  .BaseButton {
    margin-top: 25px;
    width: 100%;
    height: 50px;
    font-size: 24px;
  }
}
</style>