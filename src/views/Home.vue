<template>
  <div class="home">
    <the-button>홈 버튼</the-button>
    <el-select v-model="selectValue" autocomplete filterable>
      <el-option
        class="Site-Option"
        v-for="(option,index) in optionList"
        :key="'option'+index"
        :label="option"
        :value="index"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selectValue: "",
      optionList: ["hi", "hello", "bye", "goodbye"]
    };
  }
};
</script>

<style lang="scss" scoped>
// @import "@/assets/css/index.scss";
</style>

