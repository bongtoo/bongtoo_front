<template>
  <ul class="Board">
    <li class="Board-Item" v-for="(item,index) in data" :key="'board'+index">
      <div class="Board-Info">
        <div class="Board-Info-Head">
          <div class="Board-Info-HeadText" v-text="item.title"></div>
          <div class="Board-Info-HeadState" v-text="isRecruit(item.endtime)"></div>
        </div>
        <div class="Board-Info-Body">
          <span class="Board-Info-BodyPeriod">모집기간 : {{item.term}}</span>
          <div class="Board-Info-BodyGroup">모집기관 : {{item.place}}</div>
        </div>
      </div>
      <div class="Board-Button">
        <a
          :href="`https://www.vms.or.kr/partspace/recruitView.do?seq=${item.value}`"
          target="blank"
        >
          <base-button type="line" color="ocean">검색하기</base-button>
        </a>
      </div>
    </li>
    <li class="Board-Item" style="display:block;textAlign:center;">
      <span @click="$emit('addList')">
        <base-button color="ocean" type="line">
          <img :src="plusIcon" width="25px" alt="ADD" />
        </base-button>
      </span>
    </li>
  </ul>
</template>

<script>
const plus_icon = require("@/assets/icon/plus.png");
export default {
  props: ["data"],
  data() {
    return {
      plusIcon: plus_icon
    };
  },
  computed: {
    presentDate() {
      return new Date();
    },
    disabled() {
      return this.loading;
    }
  },
  methods: {
    isRecruit(endtime) {
      return this.presentDate > new Date(endtime) ? "모집중" : "모집종료";
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Board {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: NanumGothic;

  &-Item {
    display: flex;
    margin-bottom: 10px;
    padding: 20px;
    border: 1px solid $ocean;
  }
  &-Info {
    flex-grow: 1;
    &-Head {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
      &Text {
        font-size: 22px;
        padding-right: 3px;
      }
      &State {
        font-size: 14px;
        border: 1px solid #c4c4c4;
        margin-left: auto;
        margin-right: 3px;
        padding: 1px 15px;
        min-width: fit-content;
      }
    }
    &-Body {
      font-size: 12px;
      &Date {
        padding-left: 15px;
      }
      &Group {
        padding: 10px 0px 0px 0px;
      }
    }
    // background-color: yellow;
  }
  &-Button {
    // background-color: green;
    text-align: center;
    display: flex;
    align-items: center;
    .BaseButton {
      display: box;
      width: 100px;
      // height:30px;
      padding: 6px;
      // margin: auto;
    }
    // margin: 0;
  }
}
</style>