<template>
  <button class="BaseButton" :class="styleClass" :style="styleObj">
    <slot>버튼</slot>
  </button>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 1
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
  computed: {
    getReadius() {
      if (this.radius === 2) {
        return { borderRadius: "18px" };
      } else if (this.radius === 3) {
        return { borderRadius: "5px" };
      }
    },
    styleObj() {
      const obj = {};
      Object.assign(obj, this.getReadius);
      return obj;
    },
    styleClass() {
      const color = this.color,
        type = this.type,
        ColorList = new Array("", "white", "pupple", "ocean"),
        TypeList = new Array("", "line", "fill");
      let ret = "";
      if (ColorList.includes(color)) {
        ret += color;
      }
      if (TypeList.includes(type)) {
        ret += type;
      }
      console.log(ret);
      return ret;
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

$ocean-color: #665fd7;

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
  @include config-color(
    $button-font__blue,
    $button-back__blue,
    $button-line__blue
  );
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
  @include config-color($ocean-color, #dad8ff, $ocean-color);
}
.oceanline {
  @include config-color__line($ocean-color, #fff, $ocean-color, 30);
}
.oceanfill {
  @include config-color(#fff, $ocean-color, $ocean-color);
}
</style>