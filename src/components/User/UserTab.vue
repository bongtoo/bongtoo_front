<template>
  <nav class="UserTabs">
    <router-link :to="{name:'userPosts'}" active-class="active" tag="span">게시물</router-link>
    <router-link :to="{name:'userLikes'}" active-class="active" tag="span">좋아요</router-link>
  </nav>
</template>

<script>
export default {
  props: {
    activedItem: {
      type: Number,
      default: 1
    }
  },
  methods: {
    clickTab(index) {
      this.$emit("update", index);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.UserTabs {
  font-family: NanumGothic;
  font-size: 14px;
  text-align: center;
  span {
    color: #999999;
    display: inline-block;
    margin: 19px;
    cursor: pointer;
    &.active {
      color: #000;
    }
  }
}
a {
  all: unset;
}
</style>