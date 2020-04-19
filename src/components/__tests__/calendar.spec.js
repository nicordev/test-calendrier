import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Calendar from '../Calendar';
import { marchDaysData, marchGridMatrix } from './fixtures';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SelectedDatesDisplay', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      currentYear: jest.fn(() => 2020),
      selectedMonthIndex: jest.fn(() => 2) // 2 = mars
    };

    store = new Vuex.Store({ getters });
  });

  it('La matrice affiche six lignes pour le mois de mars', () => {
    const wrapper = shallowMount(Calendar, { store, localVue });

    expect(wrapper.vm.weekLinesCount).toEqual(6);
  });

  it('Les données par jour du mois sont conformes', () => {
    const wrapper = shallowMount(Calendar, { store, localVue });

    const expected = marchDaysData;

    expect(wrapper.vm.daysData).toEqual(expected);
  });

  it('Les données de la matrice du mois sont conformes', () => {
    const wrapper = shallowMount(Calendar, { store, localVue });

    const expected = marchGridMatrix;

    expect(wrapper.vm.gridMatrix).toEqual(expected);
  });
});
