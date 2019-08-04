<template>
  <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.2222 1H1L9 9V17H10.2222V9L18.2222 1Z"
      fill="white"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      default: "#3f3f3f"
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
</style>