<template>
  <div class="calendar-box" :class="{ isDisabled }">
    <div class="month-day" v-text="monthDay" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },

    monthDay: {
      type: Number,
      default: null
    },

    isDisabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(240, 240, 240);
  border: 1px solid grey;

  &.isDisabled {
    background-color: rgb(253, 247, 247);
  }
}
</style>
