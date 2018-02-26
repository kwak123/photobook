import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';

import PhotoDetail from '@/components/PhotoDetail';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PhotoDetail', () => {
  let store;
  let state;
  let selectedPhoto;

  beforeEach(() => {
    selectedPhoto = {
      url: 'testUrl',
      title: 'testTitle',
      rating: 'testRating',
      description: 'testDescription',
    };
    state = {
      photos: {
        selectedPhoto,
        requesting: false,
        error: '',
      },
    };
    store = new Vuex.Store({
      state,
    });
  });

  it('should render itself based on state', () => {
    const wrapper = mount(PhotoDetail, { localVue, store });

    expect(wrapper.vm.requesting).toBe(false);
    expect(wrapper.vm.error).toEqual('');

    const titleEl = wrapper.find('.photodetail__inner--title').element;
    expect(titleEl.innerText).toEqual(selectedPhoto.title);

    const imgEl = wrapper.find('.photodetail__inner--photo').element;
    expect(imgEl.getAttribute('src')).toEqual(selectedPhoto.url);

    const ratingEl = wrapper.find('.photodetail__inner--rating').element;
    // 5 stars
    expect(ratingEl.childElementCount).toEqual(5);

    const descriptionEl = wrapper.find('.photodetail__inner--description').element;
    expect(descriptionEl.innerText).toEqual(selectedPhoto.description);
  });
});
