<template>
  <div class="User">
    <user-header></user-header>
    <hr />
    <user-tab :activedItem="selectedTab"></user-tab>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import userHeader from "@/components/User/UserHeader";
import userTab from "@/components/User/UserTab";

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
  },
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