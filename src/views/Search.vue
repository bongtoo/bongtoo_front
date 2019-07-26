<template>
  <div class="Search">
    <div class="SearchForm Checkbox contents">
      <div class="SearchForm-Info">
        <subject-icon />
        <div>봉사대상</div>
      </div>
      <div class="ButtonGroup">
        <base-button color="pupple" v-for="i in 8" :key="i" class="ButtonGroup-Item"></base-button>
      </div>
    </div>
    <div class="SearchForm Checkbox contents">
      <div class="SearchForm-Info">
        <activity-icon />
        <div>봉사활동</div>
      </div>
      <div class="ButtonGroup">
        <base-button color="pupple" v-for="j in 8" :key="j" class="ButtonGroup-Item"></base-button>
      </div>
    </div>
    <div class="SearchForm SelectBox contents">
      <div class="SearchForm-Info">
        <location-icon />
        <div>봉사지역</div>
      </div>
      <div class="SelectGroup">
        <base-select class="SelectItem" color="pupple" v-for="s in 3" :key="s"></base-select>
      </div>
    </div>
    <div class="SearchForm submitButton">
      <base-button color="pupple">다음</base-button>
    </div>
  </div>
</template>

<script>
import volunteerSubject from "@/assets/icon/volunteer_subject.vue";
import volunteerActivity from "@/assets/icon/volunteer_activity.vue";
import volunteerLocation from "@/assets/icon/volunteer_location.vue";
export default {
  components: {
    "subject-icon": volunteerSubject,
    "activity-icon": volunteerActivity,
    "location-icon": volunteerLocation
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Search {
  // padding-top: 70px;
  padding-bottom: 150px;
  // background-color: yellowgreen;
}
.SearchForm {
  padding-top: 100px;
  &-Info {
    color: #a239c0;
    font-size: 40px;
    line-height: 43px;
    text-align: center;
    //
    padding-bottom: 70px;
  }
}
.ButtonGroup {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 37px 50px;
  width: 100%;
  // background-color: red;
  text-align: center;
  &-Item {
    width: 100%;
    height: 40px;
    margin: auto;
  }
}
.SelectGroup {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  .SelectItem {
    padding-bottom: 14px;
  }
}
.submitButton {
  text-align: right;
  padding-top:120px;
  padding-right: 20%;
}
</style>