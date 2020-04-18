<template>
  <div id="app">
    <h1>Calendrier</h1>

    <div class="month-selection">
      <MonthSelector />
    </div>

    <Calendar v-if="showCalendar" />
  </div>
</template>

<script>
import MonthSelector from './components/MonthSelector';
import Calendar from './components/Calendar';

export default {
  components: {
    MonthSelector,
    Calendar
  },

  computed: {
    showCalendar() {
      return this.$store.getters.selectedMonthIndex !== null; // attention, janvier retourne 0
    }
  }
};
</script>
