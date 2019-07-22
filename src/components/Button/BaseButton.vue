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
    line: {
      type: Boolean,
      default: false
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
        line = this.line;
      if (color === "white") {
        return "white";
      } else if (color === "pupple") {
        if (line === true) {
          return "puppleline";
        }
        return "pupple";
      } else if (color === "ocean") {
        if (line === true) {
          return "oceanline";
        }
        return "ocean";
      }
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
    background: lighten($color: $back, $amount: 1.2);
  }
  &:active {
  transition: 0.2s;
    background: darken($color: $back, $amount: 5);
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
  transition: 0.1s;
  @include config-color(
    $button-font__blue,
    $button-back__blue,
    $button-line__blue
  );
}

.white {
  @include config-color(#fff, #ffffff00, #fff);
}

.puppleline {
  @include config-color($button-font__pupple, #fff, $button-line__pupple);
}

.pupple {
  @include config-color(
    $button-font__pupple,
    $button-back__pupple,
    $button-line__pupple
  );
}

.ocean {
  @include config-color(#665fd7, #dad8ff, #665fd7);
}
.oceanline {
  @include config-color(#665fd7, #fff, #665fd7);
}
.oceanfill {
  @include config-color(#fff, #665fd7, #665fd7);
}
</style>