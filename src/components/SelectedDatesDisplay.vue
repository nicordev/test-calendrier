<template>
  <div>
    <h3>Dates sélectionnées :</h3>
    <ul>
      <li
        class="formatted-date"
        :key="index"
        v-for="(date, index) in selectedDates"
        v-text="date.formatedDate"
      />
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    selectedDates() {
      const selectedDates = [...this.$store.getters.selectedDates];

      return selectedDates.sort((a, b) => {
        return a.monthDay > b.monthDay ? 1 : -1;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.formatted-date {
  font-size: 0.9rem;
  margin-bottom: 6px;
}
</style>
