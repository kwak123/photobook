import Vuex from 'vuex';
import { shallow, createLocalVue } from '@vue/test-utils';

import App from '@/App';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      start: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('should have a mounted hook', () => {
    expect(typeof App.mounted).toBe('function');
  });

  it('should call start on mounted', () => {
    shallow(App, { localVue, store });
    expect(actions.start).toHaveBeenCalled();
  });
});
