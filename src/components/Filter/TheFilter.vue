<template>
  <div class="Filter">
    <header class="Filter-Head">
      <span class="Filter-Head-Logo">
        <filter-icon class="Filter-Head-LogoImg" />
        <span class="Filter-Head-LogoTxt">필터</span>
      </span>
      <recycle-icon class="Filter-Head-Cycle" />
    </header>
    <div class="FilterForm SelectBox">
      <div class="Info">
        <location-icon width="34px" color="ocean" />
        <div>봉사지역</div>
      </div>
      <div class="SelectGroup">
        <base-select
          class="SelectItem"
          color="ocean"
          type="line"
          :round="true"
          v-for="s in 3"
          :key="s"
        ></base-select>
      </div>
    </div>
    <div class="FilterForm Checkbox">
      <div class="Info">
        <subject-icon width="25px" color="ocean" />
        <div>봉사대상</div>
      </div>
      <div class="ButtonGroup">
        <base-button color="ocean" v-for="i in 8" :key="i" type="line" class="ButtonGroup-Item"></base-button>
      </div>
    </div>
    <div class="FilterForm Checkbox">
      <div class="Info">
        <activity-icon width="35px" color="ocean" />
        <div>봉사활동</div>
      </div>
      <div class="ButtonGroup">
        <base-button color="ocean" v-for="j in 8" :key="j" type="line" class="ButtonGroup-Item"></base-button>
      </div>
    </div>

    <div class="FilterForm submitButton">
      <base-button color="ocean">다음</base-button>
    </div>
  </div>
</template>

<script>
import volunteerSubject from "@/assets/icon/volunteer_subject.vue";
import volunteerActivity from "@/assets/icon/volunteer_activity.vue";
import volunteerLocation from "@/assets/icon/volunteer_location.vue";
import recycle from "@/assets/icon/recycle.vue";
import filter from "@/assets/icon/filter.vue";
export default {
  components: {
    "subject-icon": volunteerSubject,
    "activity-icon": volunteerActivity,
    "location-icon": volunteerLocation,
    "filter-icon": filter,
    "recycle-icon": recycle
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Info {
  display: flex;
  align-items: center;
  color: $ocean;
  font-size: 16px;
  // padding-left:6%;
  padding-bottom: 10px;
  div {
    padding: 8px 0px 0px 7px;
  }
}
.Filter {
  border: 1px solid $ocean;
  // width: 100%;
  padding: 25px;
  padding-top: 15px;
  &-Head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-Logo {
      display: inline-flex;
      align-items: center;
      &Img {
        width: 30px;
      }
      &Txt {
        padding-left: 11px;
        font-size: 19px;
      }
    }
  }
}
.FilterForm {
  padding-top: 44px;
}
.ButtonGroup {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3%;
  width: 100%;
  text-align: center;
  &-Item {
    width: 100%;
    height: 40px;
    margin: auto;
  }
  .BaseButton {
    padding: 0px;
    margin: 2% 0%;
  }
}
.SelectGroup {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-left: 7%;
  .SelectItem {
    padding-bottom: 10px;
  }
}
.submitButton {
  text-align: right;
  padding-top: 30px;
}
</style>