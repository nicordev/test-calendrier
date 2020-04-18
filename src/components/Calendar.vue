<template>
  <div class="calendar">
    <div class="week-labels">
      <div
        class="week-label"
        :key="index"
        v-for="(label, index) in dayLabels"
        v-text="label"
      />
    </div>

    <div class="lines">
      <div
        class="line"
        :key="lineIndex"
        v-for="(line, lineIndex) in gridMatrix"
      >
        <CalendarBox
          class="cell"
          :key="columnIndex"
          v-for="(cell, columnIndex) in line"
          v-bind="cell"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  getDaysCountFrom,
  getDayOfTheWeekFrom,
  getDayLabels
} from '../utils/dates';
import CalendarBox from './CalendarBox';

export default {
  components: {
    CalendarBox
  },

  computed: {
    ...mapGetters(['selectedMonthIndex', 'currentYear']),

    monthDaysCount() {
      return getDaysCountFrom(this.currentYear, this.selectedMonthIndex);
    },

    weekLinesCount() {
      const { dayOfTheWeek } = this;
      let result = 0;

      for (let monthDay = 1; monthDay <= this.monthDaysCount; monthDay++) {
        // la première ligne correspond à une semaine se terminant par un dimanche
        if (result === 0 && dayOfTheWeek(monthDay) === 0) {
          result++;
          continue;
        }

        // les lignes suivantes correspondent à des semaines démarrant par un lundi
        if (dayOfTheWeek(monthDay) === 1) {
          result++;
        }
      }

      return result;
    },

    dayLabels() {
      return getDayLabels();
    },

    // fournit les données pour chaque jour du mois
    daysData() {
      const daysCount = this.monthDaysCount;
      const daysData = [];
      let lineIndex = 0;

      for (let monthDay = 1; monthDay <= daysCount; monthDay++) {
        const dayIndex = this.dayOfTheWeek(monthDay);

        // id de la case courante
        const columnIndex = dayIndex === 0 ? 6 : dayIndex - 1; // 0 = dimanche
        const id = `${lineIndex}${columnIndex}`;

        // mise à jour de l'index de la ligne :
        // une semaine se termine par un dimanche (0 = dimanche)
        if (dayIndex === 0) {
          lineIndex++;
        }

        // mise à jour des données
        daysData.push({ id, monthDay });
      }

      return daysData;
    },

    // fournit les données de chaque case du calendrier
    gridMatrix() {
      const linesCount = this.weekLinesCount;
      const columnCount = this.dayLabels.length;
      const matrix = [];

      for (let lineIndex = 0; lineIndex < linesCount; lineIndex++) {
        const line = [];

        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
          const id = `${lineIndex}${columnIndex}`;
          const cellData = this.daysData.find(item => item.id === id);

          if (!cellData) {
            line.push({ isDisabled: true });
            continue;
          }

          line.push(cellData);
        }

        matrix.push(line);
      }

      return matrix;
    }
  },

  methods: {
    dayOfTheWeek(monthDay) {
      return getDayOfTheWeekFrom(
        this.currentYear,
        this.selectedMonthIndex,
        monthDay
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  font-size: 0.8rem;

  .week-labels,
  .line {
    display: flex;
  }

  .lines {
    display: flex;
    flex-direction: column;
  }

  .week-label {
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
    margin-bottom: 4px;
    width: 30px;
  }

  .cell {
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;

    .week-label {
      width: 50px;
    }

    .cell {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;

    .week-label {
      width: 80px;
    }

    .cell {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
