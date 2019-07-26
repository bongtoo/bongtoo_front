<template>
  <svg viewBox="5 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M41 35C41 37.8657 39.4352 40.5812 36.6646 42.6335C33.8942 44.6856 29.996 46 25.625 46C21.254 46 17.3558 44.6856 14.5854 42.6335C11.8148 40.5812 10.25 37.8657 10.25 35C10.25 32.1343 11.8148 29.4188 14.5854 27.3665C17.3558 25.3144 21.254 24 25.625 24C29.996 24 33.8942 25.3144 36.6646 27.3665C39.4352 29.4188 41 32.1343 41 35Z"
      :fill="getColor.lighten"
      :stroke="getColor.darken"
      stroke-width="3"
    />
    <path d="M41.25 16.2028L26.25 3.75V16.7689L41.25 16.2028Z" :fill="getColor.base" />
    <path
      d="M26.25 33.75V16.7689M26.25 16.7689V3.75L41.25 16.2028L26.25 16.7689Z"
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
