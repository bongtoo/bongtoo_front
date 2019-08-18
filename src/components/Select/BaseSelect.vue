<template>
  <el-select
    class="BaseSelect"
    :multiple="multiple"
    :filterable="filterable"
    :placeholder="placeholder"
    :class="styleClass"
    v-model="checkedData"
    @change="$emit('update:checked',checkedData)"
  >
    <el-option
      class="option"
      :class="styleClass"
      v-for="(option,index) in optionList"
      :key="'option'+index"
      :label="option"
      :value="index+1"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue"
    },
    round: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    optionList: {}
  },
  data() {
    return {
      checkedData: "",
      // optionList: ["hi", "hello", "bye", "goodbye"],
      ColorList: ["", "white", "pupple", "ocean"]
    };
  },
  computed: {
    styleClass() {
      const styleList = [];
      if (this.ColorList.includes(this.color)) {
        // console.log(this.color);
        styleList.push(this.color);
      }
      if (this.round === true) {
        styleList.push("select__round");
      }
      return styleList;
    }
  }
};
</script>


<style lang='scss'>
@import "@/assets/css/index.scss";

@mixin config-select-color($base, $foucs) {
  .el-input {
    .el-input__inner {
      border-color: $base;
      &:hover {
        // background: #f2c6ff80;
        border-color: $foucs;
      }
      &:focus {
        border-color: $foucs;
      }
    }
  }
  .el-input.is-focus {
    .el-input__inner {
      border-color: $foucs;
    }
  }
}
.select__round {
  .el-input__inner {
    border-radius: 32px;
  }
}

.BaseSelect {
  @include config-select-color($blue-lighten1, $blue-darken1);
}
.BaseSelect.ocean {
  @include config-select-color($ocean, $ocean-darken1);
}

.BaseSelect.pupple {
  @include config-select-color($pupple, $pupple-darken1);
}

.option.hover {
  background: hsla(203, 100%, 50%, 0.1);
}
.option.selected {
  color: $blue;
}
.option:hover {
  background: hsla(203, 100%, 50%, 0.1);
}

.option.hover.pupple {
  background: hsla(286, 100%, 70%, 0.1);
}
.option.selected.pupple {
  color: $pupple;
}
.option:hover.pupple {
  background: hsla(286, 100%, 70%, 0.1);
}

.option.hover.ocean {
  background: hsla(244, 100%, 70%, 0.1);
}
.option.selected.ocean {
  color: $ocean;
}
.option:hover.ocean {
  background: hsla(244, 100%, 70%, 0.1);
}
</style>