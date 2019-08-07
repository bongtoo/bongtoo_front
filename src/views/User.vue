<template>
  <div class="User">
    <user-header></user-header>
    <hr />
    <user-tab :activedItem="selectedTab" @update="val => selectedTab = val"></user-tab>
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import userHeader from "@/components/User/UserHeader";
import userTab from "@/components/User/UserTab";
import userPost from "@/components/User/UserPosts";
export default {
  name: "User",
  data() {
    return {
      selectedTab: 1
    };
  },
  components: {
    "user-header": userHeader,
    "user-tab": userTab,
    "user-post": userPost
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.User {
  font-family: NanumGothic;
}
hr {
  margin: 0px;
  border: 0.5px solid #c4c4c4;
}
</style>