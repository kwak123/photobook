import Vuex from 'vuex';
import { shallow, createLocalVue } from '@vue/test-utils';

import PhotoList from '@/components/PhotoList';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PhotoList', () => {
  let store;
  let mutations;
  let list;

  beforeEach(() => {
    list = [{ url: 'testOne' }, { url: 'testTwo' }];
    mutations = {
      setSelectedPhoto: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
      state: {
        photos: { photoList: list },
      },
    });
  });

  it('should pull photoList from state for grid items', () => {
    const wrapper = shallow(PhotoList, {
      localVue,
      mocks: {
        $store: {
          state: {
            photos: { photoList: list },
          },
        },
      },
    });

    const gridItems = wrapper.findAll('.photolist__inner--grid-item');
    expect(gridItems).toHaveLength(2);

    const gridThumbnails = wrapper.findAll('.photolist__inner--thumbnail');
    expect(gridThumbnails).toHaveLength(2);
    expect(gridThumbnails.at(0).attributes().src).toEqual(list[0].url);
    expect(gridThumbnails.at(1).attributes().src).toEqual(list[1].url);
  });

  it('should commit mutations with payload based on idx of clicked obj', () => {
    const list = [{ url: 'testOne' }, { url: 'testTwo' }];
    const wrapper = shallow(PhotoList, {
      localVue,
      store,
    });

    const gridItems = wrapper.findAll('.photolist__inner--grid-item');
    gridItems.at(0).trigger('click');
    expect(mutations.setSelectedPhoto.mock.calls[0]).toContainEqual({ idx: 0 });

    gridItems.at(1).trigger('click');
    expect(mutations.setSelectedPhoto.mock.calls[1]).toContainEqual({ idx: 1 });
  });
});
