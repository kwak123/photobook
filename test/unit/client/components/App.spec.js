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
      fetchUser: jest.fn(),
      fetchPhotoList: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('should have a mounted hook', () => {
    expect(typeof App.mounted).toBe('function');
  });

  it('should dispatch fetchUser and fetchPhotoList on mounted', () => {
    shallow(App, { store });
    expect(actions.fetchUser).toHaveBeenCalled();
    expect(actions.fetchPhotoList).toHaveBeenCalled();
  });
});