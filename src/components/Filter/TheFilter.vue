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
          @updated:checkd="v => selectedCity =v"
        ></base-select>
        <base-select
          class="SelectItem"
          color="ocean"
          type="line"
          :round="true"
          @updated:checkd="v => selectedTown =v"
        ></base-select>
      </div>
    </div>
    <div class="FilterForm Checkbox">
      <div class="Info">
        <subject-icon width="25px" color="ocean" />
        <div>봉사대상</div>
      </div>
      <div class="ButtonGroup">
        <base-button
          inputType="but"
          color="ocean"
          v-for="(item,index) in subjectList"
          :key="'subject'+index"
          type="line"
          class="ButtonGroup-Item"
          :name="item.name"
          :checked="selectedSubject.has(item.id)"
          :value="item"
          :checkedData="selectedSubject"
          @update:checked="checkSubject"
        ></base-button>
      </div>
    </div>
    <div class="FilterForm Checkbox">
      <div class="Info">
        <activity-icon width="35px" color="ocean" />
        <div>봉사활동</div>
      </div>
      <div class="ButtonGroup">
        <base-button
          inputType="but"
          color="ocean"
          v-for="(item,index) in activityList"
          :key="'subject'+index"
          type="line"
          class="ButtonGroup-Item"
          :name="item.name"
          :checked="selectedActivity.has(item.id)"
          :value="item"
          :checkedData="selectedActivity"
          @update:checked="checkedActivity"
        ></base-button>
      </div>
    </div>

    <div class="FilterForm submitButton">
      <span @click="filterCategory">
        <base-button color="ocean" type="fill">검색</base-button>
      </span>
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
  },
  data() {
    return {
      selectedSubject: new Set(),
      selectedCity: "",
      selectedTown: "",
      subjectList: [
        { id: 1, name: "노인" },
        { id: 2, name: "장애인" },
        { id: 3, name: "아동" },
        { id: 4, name: "청소년" },
        { id: 5, name: "취약계층" },
        { id: 6, name: "기타" }
      ],
      selectedActivity: new Set(),
      activityList: [
        { id: 1, name: "사무" },
        { id: 2, name: "학습" },
        { id: 3, name: "식당" },
        { id: 4, name: "외부활동" },
        { id: 5, name: "환경미화" },
        { id: 6, name: "치료" },
        { id: 7, name: "기타" }
      ]
    };
  },
  methods: {
    checkedActivity(item) {
      this.chekdUpdate(item, this.selectedActivity);
    },
    checkSubject(item) {
      this.chekdUpdate(item, this.selectedSubject);
    },
    chekdUpdate(item, selecedList) {
      const list = selecedList,
        value = item.value,
        isCheck = item.checked,
        key = value.name,
        val = value.id;
      if (list.has(val)) list.delete(val);
      else list.add(val);
    },
    filterCategory() {
      const hash =
        [...this.selectedSubject].reduce((prv, val) => {
          return prv + `subjects=${val}&`;
        }, "#") +
        [...this.selectedActivity].reduce((prv, val) => {
          return prv + `activites=${val}&`;
        }, "");
      this.$router.replace({ hash: hash });
    }
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
  padding: 24px;
  padding-top: 15px;
  padding-right: 31px;
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
  grid-template-columns: repeat(3, 76px);
  grid-column-gap: 3%; // ipad
  width: 100%;
  text-align: center;
  &-Item {
    width: 100%;
    height: 40px;
    margin: auto;
  }
  .BaseButton {
    padding: 0px;
    margin: 2% 0%; // ipad
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