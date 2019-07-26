<template>
  <svg viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="16.3752"
      cy="10.0446"
      r="8.54464"
      :fill="getColor.lighten"
      :stroke="getColor.darken"
      stroke-width="3"
    />
    <path
      d="M16.1233 18.75C4.67201 18.75 2.15 31.25 2.3204 37.5H30.4375C30.4375 31.25 27.5746 18.75 16.1233 18.75Z"
      :fill="getColor.base"
      :stroke="getColor.darken"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "pupple"
    }
  },
  name: "volunterr-acitivity",
  computed: {
    getColor() {
      if (this.color === "ocean") {
        return {
          darken: "#665FD7",
          base: "#8D86FF",
          lighte: "#DAD8FF"
        };
      }
      return {
        darken: "#A239C0",
        base: "#F472FF",
        lighten: "#F8E1FA"
      };
    }
  }
};
</script>
