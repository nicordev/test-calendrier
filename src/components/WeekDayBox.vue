<template>
  <div class="weekday-box" v-text="label" />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.weekday-box {
  user-select: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>
