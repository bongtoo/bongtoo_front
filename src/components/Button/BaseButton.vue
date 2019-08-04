<template>
  <button class="BaseButton" :class="styleClass">
    <slot>버튼</slot>
  </button>
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
    }
  },
  name: "BaseButton",
  data() {
    return {
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
}

button {
  width: 120px;
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
button.button__radius1 {
  border-radius: 18px;
}
button.button__radius2 {
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

.blackline {
  @include config-color__line(#000, #fff, #000, 30);
}
</style>