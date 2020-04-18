<template>
  <div id="app">
    <div class="container">
      <h1>Calendrier de l'année en cours</h1>

      <div class="month-selection">
        <p>Sélectionnez un mois</p>
        <MonthSelector />
      </div>

      <div v-if="showCalendar" class="calendar-wrapper">
        <h2 v-text="calendarTitle" />
        <Calendar />
      </div>
    </div>
  </div>
</template>

<script>
import MonthSelector from './components/MonthSelector';
import Calendar from './components/Calendar';
import { getCurrentYear, months } from './utils/dates';

export default {
  components: {
    MonthSelector,
    Calendar
  },

  computed: {
    calendarTitle() {
      const month = this.selectedMonthName;
      const year = getCurrentYear();

      return `${month} ${year}`;
    },

    selectedMonthName() {
      const selectedMonthIndex = this.$store.getters.selectedMonthIndex;

      return months[selectedMonthIndex];
    },

    showCalendar() {
      return this.selectedMonthName;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 24px;

  .month-selection {
    margin-bottom: 30px;
  }

  .calendar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
