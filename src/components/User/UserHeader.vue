<template>
  <header class="UserHeader contents">
    <div class="UserHeader-ImageBox">
      <div
        class="UserHeader-Image"
        :style="{backgroundImage:`url(http://127.0.0.1:8000${userData.profile_image})`}"
      ></div>
    </div>
    <div class="UserHeader-Info">
      <div class="UserHeader-InfoName">{{userData.username}}</div>
      <div class="UserHeader-InfoItem">
        선호 활동
        <b>코딩봉사</b>
      </div>
      <!-- <div class="UserHeader-InfoItem">게시물 14</div> -->
      <div class="UserHeader-InfoButtons" v-if="isMinePage">
        <router-link :to="{name:'category_post'}">
          <base-button type="line">작성하기</base-button>
        </router-link>
        <base-button color="black" type="line">프로필 편집</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "@/utility/axios";
export default {
  data() {
    return {
      userData: false
    };
  },
  computed: {
    isMinePage() {
      return this.$store.getters.getMyId === this.$route.params.userId;
    }
  },
  created() {
    axios.get(`/users/${this.$route.params.userId}/`).then(res => {
      this.userData = res.data;
      console.log(res);
    });
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.UserHeader {
  display: flex;
  // background-color: yellow;
  padding-top: 60px;
  padding-bottom: 40px;
  &-Info {
    font-size: 16px;
    &Name {
      font-size: 28px;
      margin-bottom: 20px;
    }
    &Item {
      margin: 10px 0px;
    }
    // &Buttons{
    .BaseButton {
      margin: 15px 15px 15px 0px;
      width: 100px;
    }
    // }
  }
  &-Image {
    &Box {
      width: 30%;
    }
    margin: auto;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: {
      color: gray;
      size: cover;
      repeat: no-repeat;
      position: center;
    }
  }
}
</style>