<template>
  <div class="Filter" v-if="update">
    <header class="Filter-Head">
      <span class="Filter-Head-Logo">
        <filter-icon class="Filter-Head-LogoImg" />
        <span class="Filter-Head-LogoTxt">필터</span>
      </span>
      <span @click="initCategory" class="Filter-Head-Cycle">
        <recycle-icon />
      </span>
    </header>
    <!-- <div class="FilterForm SelectBox">
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
          ref="select"
          @updated:checkd="v => selectedCity =v"
        ></base-select>
        <base-select
          class="SelectItem"
          color="ocean"
          type="line"
          :round="true"
          ref=":select"
          @updated:checkd="v => selectedTown =v"
        ></base-select>
      </div>
    </div>-->
    <div class="FilterForm Checkbox">
      <div class="Info">
        <subject-icon width="25px" color="ocean" />
        <div>봉사대상</div>
      </div>
      <div class="ButtonGroup" v-if="checkboxUpdate">
        <base-button
          inputType="checkbox"
          color="ocean"
          v-for="(item,index) in subjectList"
          :key="'subject'+index"
          type="line"
          class="ButtonGroup-Item"
          :name="item.name"
          :checked="selectedSubject.has(String(item.id))"
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
      <div class="ButtonGroup" v-if="checkboxUpdate">
        <base-button
          inputType="checkbox"
          color="ocean"
          v-for="(item,index) in activityList"
          :key="'activity'+index"
          type="line"
          class="ButtonGroup-Item"
          :name="item.name"
          :checked="selectedActivity.has(String(item.id))"
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
import subjectData from "@/utility/subject.data";
import activityData from "@/utility/activity.data";
import { constants } from "crypto";

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
      update: true,
      checkboxUpdate: true,
      selectedCity: "",
      selectedTown: "",
      selectedSubject: new Set(),
      subjectList: subjectData,
      selectedActivity: new Set(),
      activityList: activityData
    };
  },
  watch: {
    $route: "fetchQuery"
  },
  methods: {
    initCategory() {
      this.update = false;
      this.$nextTick(() => {
        this.update = true;
        this.$router.replace({ hash: "#" });
        this.selectedSubject.clear();
        this.selectedActivity.clear();
      });
    },
    refreshCheckbox() {
      this.checkboxUpdate = false;
      this.$nextTick(() => {
        this.checkboxUpdate = true;
      });
    },
    fetchQuery() {
      const search = this.$route.hash.slice(1, -1);
      console.log(search);
      if (search) {
        this.selectedSubject.clear();
        this.selectedActivity.clear();
        search.match(/(activites=[0-9])|(subjects=[0-9])/g).forEach(el => {
          switch (el[0]) {
            case "a":
              this.selectedActivity.add(el.slice(-1));
              break;
            case "s":
              this.selectedSubject.add(el.slice(-1));
            default:
              break;
          }
        });
        this.refreshCheckbox();
      }
    },
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
  },
  created() {
    this.fetchQuery();
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
    &-Cycle {
      cursor: pointer;
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