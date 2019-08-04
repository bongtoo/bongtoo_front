<template>
  <ul class="Board">
    <li class="Board-Item" v-for="i in 8" :key="i">
      <div class="Board-Info">
        <div class="Board-Info-Head">
          <div class="Board-Info-HeadText">서신 수영장 노인 수영봉사</div>
          <div class="Board-Info-HeadState">모집중</div>
        </div>
        <div class="Board-Info-Body">
          <span class="Board-Info-BodyPeriod">모집기간 : 2019-08-24 ~ 2019-08-31</span>
          <span class="Board-Info-BodyDate">봉사기간 : 2019-09-02 ~ 2019-09-02</span>
          <div class="Board-Info-BodyGroup">모집기관 : 전주시 완산구 서신동 수영장</div>
        </div>
      </div>
      <div class="Board-Button">
        <base-button type="line" color="ocean">검색하기</base-button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
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
      }
      &State {
        font-size: 14px;
        border: 1px solid #c4c4c4;
        margin-left: 13px;
        padding: 1px 15px;
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