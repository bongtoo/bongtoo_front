<template>
<svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6666 24.6667L2.33329 13.3334L13.6666 2.00002" :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>

<script>
export default {
  name:'left-arrow',
  props:{
    color:{
      default:'white'
    }
  }
}
</script>
