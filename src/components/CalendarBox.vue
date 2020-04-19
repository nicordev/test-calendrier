<template>
  <div
    class="calendar-box"
    :class="{ 'selectable-cell': !isDisabled, isDisabled }"
    :id="id"
  >
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
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(233, 233, 233);

  &:hover {
    background-color: rgb(199, 204, 228);
  }

  &.isDisabled {
    background-color: rgb(253, 247, 247);
  }

  &.ds-selected {
    background-color: rgb(70, 87, 161);
    color: white;
    font-weight: bold;
  }
}
</style>
