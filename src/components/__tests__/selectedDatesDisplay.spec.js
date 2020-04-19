import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SelectedDatesDisplay from '../SelectedDatesDisplay';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SelectedDatesDisplay', () => {
  it("Affiche les dates sélectionnées dans l'ordre croissant", () => {
    const dates = [
      { monthDay: 12 },
      { monthDay: 5 },
      { monthDay: 9 },
      { monthDay: 1 }
    ];

    const getters = {
      selectedDates: jest.fn(() => dates)
    };

    const store = new Vuex.Store({
      getters
    });

    const wrapper = shallowMount(SelectedDatesDisplay, { store, localVue });

    const expected = [
      { monthDay: 1 },
      { monthDay: 5 },
      { monthDay: 9 },
      { monthDay: 12 }
    ];

    expect(wrapper.vm.selectedDates).toEqual(expected);
  });
});
