<template>
  <button class="BaseButton">
    <slot>버튼</slot>
  </button>
</template>

<script>
// require('../../assets/css/index.scss')
export default {
  name: "BaseButton"
};
</script>

<style lang='scss' scoped>
// @import "../../assets/css/index.scss";
@import '@/assets/css/index.scss';

button {
  padding: 7px 15px;
  // color
  color: $button-font__blue;
  background: $button-back__blue;
  // line
  outline: none;
  border: 1px solid $button-line__blue;
  border-radius: 12px;
  transition: 0.3s;
}
button:hover {
  background: lighten($color: $button-back__blue, $amount: 1);
}
button:active {
  background: darken($color: $button-back__blue, $amount: 5);
  border-color: darken($color: $button-line__blue, $amount: 10);
}
</style>