<template>
  <div id="app">
    <div class="container">
      <h1>Calendrier de l'année en cours</h1>

      <div class="month-selection">
        <p>Sélectionnez un mois</p>
        <MonthSelector />
      </div>

      <div class="dates-selection">
        <div v-if="showCalendar" class="calendar-wrapper">
          <h2 v-text="calendarTitle" />
          <Calendar />
        </div>

        <div v-if="showSelectedDates">
          <SelectedDatesDisplay />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthSelector from './components/MonthSelector';
import Calendar from './components/Calendar';
import SelectedDatesDisplay from './components/SelectedDatesDisplay';
import { getCurrentYear, months } from './utils/dates';

export default {
  components: {
    MonthSelector,
    Calendar,
    SelectedDatesDisplay
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
    },

    showSelectedDates() {
      return this.$store.getters.selectedDates.length;
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

  .dates-selection {
    display: flex;
    flex-direction: column;

    .calendar-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;

      .calendar-wrapper {
        margin-bottom: 0;
        margin-right: 30px;
        align-items: center;
      }
    }
  }
}
</style>
