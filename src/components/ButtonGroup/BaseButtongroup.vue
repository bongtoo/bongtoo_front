<template>
  <div class="BaseButtongroup" :style="{width:getWidth,height:height}">
    <div class="Item" v-for="i in item" :key="i">
      <base-button class="Item-Button"></base-button>
    </div>
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
      default: "500px"
    },
    height: {
      default: null
    }
  },
  computed: {
    getWidth() {
      const width = this.width;
      const widthType = typeof width;
      const computedWidth = new Map()
        .set("string", res => res)
        .set("number", res => res + "px");
      const result = computedWidth.get(widthType)(width);
      console.log(result);
      return result;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.BaseButtongroup {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: red;
  .Item {
    margin: auto;
    flex-basis: 25%;
    text-align: center;
  }
}
</style>