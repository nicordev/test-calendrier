<template>
  <div class="month-selector">
    <select v-model="selectedMonthIndex" @change="handleInput">
      <option :value="null" disabled>- Choisissez un mois -</option>
      <option
        :key="index"
        v-for="(monthName, index) in months"
        :value="index"
        v-text="`${monthName} ${currentYear}`"
      />
    </select>
  </div>
</template>

<script>
import { months } from '../utils/dates';

export default {
  data() {
    return {
      selectedMonthIndex: null,
      months
    };
  },

  computed: {
    currentYear() {
      return this.$store.getters.currentYear;
    }
  },

  methods: {
    handleInput() {
      this.$store.dispatch('setSelectedMonthIndex', this.selectedMonthIndex);
    }
  }
};
</script>
