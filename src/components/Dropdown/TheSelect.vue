<template>
  <div class="TheSelect">
    <div class="TheSelect-Head" ref="head-button" @click="onOpen" tabindex="1">
      {{options[index]}}
      <!-- <img class="TheSelect-Head-Arrow" src="@/assets/icon/down_arrow.png" /> -->
    </div>
    <div
      class="TheSelect-Menu"
      v-if="showMenu"
      v-closable="{
        exclude: ['head-button'],
        handler: 'onClose'
      }"
    >
      <div
        class="TheSelect-Option"
        v-for="(item, index) in options"
        :key="'select'+index"
        @click="onSelect(index)"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      index: 0,
      isVisible: false,
      showMenu: false
    };
  },
  methods: {
    onOpen() {
      this.showMenu = true;
    },
    onClose() {
      this.showMenu = false;
    },
    onSelect(index) {
      console.log(index);
      this.showMenu = false;
      this.index = index;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.TheSelect {
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  &-Head {
    padding-left: 10px;
    width: 100%;
    z-index: 1;
    border-radius: 10px;
    position: absolute;
    border: 1.5px solid #fff;
    box-sizing: border-box;
    background-color: #fff;
    &:focus {
      outline: none;
      border: 2px solid $orange;
    }
    &-Arrow {
      position: absolute;
      right: 0px;
      top: 4px;
    }
  }
  &-Menu {
    position: absolute;
    width: 100%;
    transition: ease-in-out 0.28s, z-index 0s;
    height: 250px;
    transform: translateY(54px);
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 10px;
    background-color: #fff;
  }

  &-Option {
    padding-left: 11px;
    width: 100%;
    background-color: #fff;
    pointer-events: none;
  }
}

.head-visible {
  border: 1.5px solid $orange;
}
.visible {
  visibility: visible;
  transform: translateY(55px);
  opacity: 1;
}
</style>