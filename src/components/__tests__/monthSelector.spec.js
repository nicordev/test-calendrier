import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import realStore from '../../store';
import MonthSelector from '../MonthSelector';
import { months } from '../../utils/dates';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MonthSelector', () => {
  it('dispatche "setSelectedMonthIndex" quand un nouveau mois est sélectionné', () => {
    const actions = {
      setSelectedMonthIndex: jest.fn()
    };

    const store = new Vuex.Store({
      actions
    });

    const wrapper = shallowMount(MonthSelector, { store, localVue });

    const select = wrapper.find('select');
    select.trigger('change');

    expect(actions.setSelectedMonthIndex).toHaveBeenCalled();
  });

  it("sélectionner l'indice 5 correspond à choisir le mois de juin", () => {
    const wrapper = shallowMount(MonthSelector, { store: realStore, localVue });
    const monthIndex = 5;
    const expectedMonthName = 'Juin';

    // sélectionne l'indice 5
    const select = wrapper.find('select');
    select.element.value = monthIndex;

    // met l'indice sélectionné dans le store
    select.trigger('change');

    // récupère l'indice sélectionné depuis le store
    const storeSelectedMonthIndex = realStore.getters.selectedMonthIndex;

    // récupère le nom du mois grâce à cet indice
    const monthName = months[storeSelectedMonthIndex];

    expect(monthName).toEqual(expectedMonthName);
  });
});
