<template>
  <div class="Search">
    <div class="SearchForm Checkbox contents">
      <div class="SearchForm-Info">
        <subject-icon width="50px" />
        <div>봉사대상</div>
      </div>
      <div class="ButtonGroup">
        <base-button
          inputType="checkbox"
          color="pupple"
          v-for="(item,index) in subjectList"
          :key="'subject'+index"
          class="ButtonGroup-Item"
          :name="item.name"
          :checked="selectedSubject.has(item.id)"
          :value="item"
          :checkedData="selectedSubject"
          @update:checked="checkSubject"
        ></base-button>
      </div>
    </div>
    <div class="SearchForm Checkbox contents">
      <div class="SearchForm-Info">
        <activity-icon width="50px" />
        <div>봉사활동</div>
      </div>
      <div class="ButtonGroup">
        <base-button
          inputType="checkbox"
          color="pupple"
          v-for="(item,index) in activityList"
          :key="'activity'+index"
          class="ButtonGroup-Item"
          :name="item.name"
          :checked="selectedActivity.has(item.id)"
          :value="item"
          :checkedData="selectedActivity"
          @update:checked="checkedActivity"
        ></base-button>
      </div>
    </div>
    <!-- <div class="SearchForm SelectBox contents">
      <div class="SearchForm-Info">
        <location-icon width="50px" />
        <div>봉사지역</div>
      </div>
      <div class="SelectGroup">
        <base-select class="SelectItem" color="pupple" v-for="s in 3" :key="s"></base-select>
      </div>
    </div>-->
    <div class="SearchForm submitButton">
      <span @click="goNextPage">
        <base-button color="pupple">다음</base-button>
      </span>
    </div>
  </div>
</template>

<script>
import volunteerSubject from "@/assets/icon/volunteer_subject.vue";
import volunteerActivity from "@/assets/icon/volunteer_activity.vue";
import volunteerLocation from "@/assets/icon/volunteer_location.vue";
import subjectData from "@/utility/subject.data";
import activityData from "@/utility/activity.data";

import { mapGetters } from "vuex";
export default {
  props: {
    nextPage: {
      default: false
    }
  },
  components: {
    "subject-icon": volunteerSubject,
    "activity-icon": volunteerActivity,
    "location-icon": volunteerLocation
  },
  data() {
    return {
      selectedCity: "",
      selectedTown: "",
      selectedSubject: new Set(),
      subjectList: subjectData,
      selectedActivity: new Set(),
      activityList: activityData
    };
  },
  computed: {
    ...mapGetters(["getAuth"])
  },
  methods: {
    goNextPage() {
      this.$store.commit("setCategory", {
        activity: this.selectedSubject,
        subject: this.selectedSubject
      });
      this.$router.push({ name: this.nextPage });
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
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm.getAuth);
      if (vm.nextPage === "post" && !vm.getAuth) {
        vm.$router.push({ name: "home" });
      }
      return true;
    });
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
  padding-top: 120px;
  padding-right: 20%;
}
</style>