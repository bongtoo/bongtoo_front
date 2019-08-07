<template>
  <section class="UserPosts-PostList">
    <div v-for="i in 9" :key="i" class="UserPosts-PostItem">
      <div class="imageCard" :style="{backgroundImage:`url(${url})`}"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["url"],
  name: "UserPosts"
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.UserPosts {
  &-Post {
    &List {
      display: grid;
      margin: auto;
      width: fit-content;
      grid-template-columns: repeat(3, 250px);
      grid-auto-rows: 250px;
    }
    &Item {
      margin: 2%;
    }
  }
}
</style>