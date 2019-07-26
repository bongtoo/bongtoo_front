<template>
<div class="Search contents">
  <base-buttongroup />
</div>
</template>

<script>
import ButtonGroup from '@/components/ButtonGroup/BaseButtongroup.vue'
export default {
  components:{
    'base-buttongroup':ButtonGroup
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/css/index.scss';
.Search{
  background-color: yellowgreen;
}
</style>