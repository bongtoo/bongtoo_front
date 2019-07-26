<template>
  <div class="BaseButtongroup">
    <!-- <div class="Item" v-for="i in item" :key="i"> -->
    <base-button v-for="i in item" :key="i" :style="buttonStyleObject" class="Item-Button"></base-button>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "base-buttongroup",
  props: {
    item: {
      default: 8
    },
    width: {
      default: "auto"
    },
    height: {
      default: null
    }
  },
  components: {},
  computed: {
    getWidth() {
      const width = this.width;
      const widthType = typeof width;
      const computedWidth = new Map()
        .set("string", res => res)
        .set("number", res => res + "px");
      const result = computedWidth.get(widthType)(width);
      return result;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.BaseButtongroup {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
  width: 100%;
  background-color: red;
  text-align: center;
  .Item {
    &-Button {
      margin: auto;
      height: 47px;
      // width: 100%;
    }
  }
}
</style>