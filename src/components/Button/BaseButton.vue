<template>
  <button v-if="inputType==='button'" class="ButtonContainer BaseButton" :class="styleClass">
    <slot>버튼</slot>
  </button>
  <label class="ButtonContainer" v-else>
    <input
      type="checkbox"
      :value="value.id"
      :checked="checked"
      @change="$emit('update:checked',{value: value,checked:$event.target.checked})"
    />
    <span class="BaseButton" :class="styleClass" :for="value" v-text="name"></span>
  </label>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "blue"
    },
    inputType: {
      type: String,
      default: "button"
    },
    name: {},
    value: {},
    checked: {}
  },
  name: "BaseButton",
  data() {
    return {
      checkState: false,
      ColorList: ["", "white", "pupple", "ocean", "black"],
      TypeList: ["", "line", "fill"],
      RadiusList: ["", "button__radius1", "button__radius2"]
    };
  },
  computed: {
    getReadius() {
      if (this.radius === 2) {
        return { borderRadius: "18px" };
      } else if (this.radius === 3) {
        return { borderRadius: "5px" };
      }
    },
    styleClass() {
      const color = this.color,
        type = this.type,
        styleList = [];
      let ret = "";
      if (this.ColorList.includes(color)) {
        ret += color;
      }
      if (this.TypeList.includes(type)) {
        ret += type;
      }
      styleList.push(ret);
      styleList.push(this.RadiusList[this.radius]);
      return styleList;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
// Button
// blue
$button-back__blue: $blue-lighten2;
$button-line__blue: $blue-lighten1;
$button-font__blue: $blue;
// pupple
$button-back__pupple: $pupple-lighten1;
$button-line__pupple: $pupple;
$button-font__pupple: $pupple;

@mixin config-color($font, $back, $line) {
  color: $font;
  background: $back;
  border-color: $line;
  &:hover {
    background: darken($color: $back, $amount: 5);
  }
  &:active {
    background: darken($color: $back, $amount: 10);
    border-color: darken($color: $line, $amount: 10);
  }
}
@mixin config-color__line($font, $back, $line, $amont) {
  color: $font;
  background: $back;
  border-color: $line;
  &:hover {
    background: lighten($color: $line, $amount: $amont);
  }
  &:active {
    background: lighten($color: $line, $amount: $amont - 5);
    border-color: darken($color: $line, $amount: 10);
  }
  @at-root .ButtonContainer > input:checked + span {
    background-color: #b9b5ff;
    // #A239C0
  }
}
.ButtonContainer {
  width: 120px;
  // padding: 9px;
  font-size: 14px;
}
label {
  // width: 120px;
  input {
    display: block;
    position: absolute;
    visibility: hidden;
  }
  span {
    display: block;
  }
}
.BaseButton {
  padding: 9px;

  // line
  outline: none;
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 40px;
  font-weight: 450;
  // transition: 0.1s;
  font-family: NanumGothic;
  @include config-color(
    $button-font__blue,
    $button-back__blue,
    $button-line__blue
  );
}

.BaseButton.button__radius1 {
  border-radius: 18px;
}
.BaseButton.button__radius2 {
  border-radius: 5px;
}
.line {
  @include config-color__line($button-font__blue, #fff, $button-line__blue, 25);
}
.white {
  color: #fff;
  background: rgba(255, 255, 255, 0);
  border-color: #fff;
  &:hover {
    background: rgba(233, 233, 233, 0.15);
  }
  &:active {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.25);
  }
}

.pupple {
  @include config-color(
    $button-font__pupple,
    $button-back__pupple,
    $button-line__pupple
  );
}

.puppleline {
  @include config-color__line(
    $button-font__pupple,
    #fff,
    $button-line__pupple,
    40
  );
}

.ocean {
  @include config-color($ocean, $ocean-lighten1, $ocean);
}
.oceanline {
  @include config-color__line($ocean, #fff, $ocean, 30);
}
.oceanfill {
  @include config-color(#fff, $ocean, $ocean);
}
.black {
  @include config-color__line(#000, #fff, #000, 30);
}
.blackline {
  @include config-color__line(#000, #fff, #000, 30);
}
</style>