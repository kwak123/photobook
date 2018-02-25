import { mount } from '@vue/test-utils';

import Rating from '@/components/Rating';

describe('Rating', () => {
  it('should expect 2 props: rating, handleRatingSelected', () => {
    const wrapper = mount(Rating);
    const expected = ['handleRatingSelected', 'rating'];
    const received = Object.keys(wrapper.vm.$props);
    received.sort();
    expect(received).toEqual(expected);
  });

  it('should have 5 children (stars)', () => {
    const wrapper = mount(Rating);
    expect(wrapper.element.children).toHaveLength(5);
  });

  it('should invoke handleStars on mount and update', (done) => {
    const methods = { handleStars: jest.fn() };
    const wrapper = mount(Rating, { methods });
    wrapper.vm.$forceUpdate();
    wrapper.vm.$nextTick(() => {
      expect(methods.handleStars).toHaveBeenCalledTimes(2);
      done();
    });
  });

  it('should assign checked stars based on rating from 1 to 5', () => {
    const propsData = { rating: 3 };
    const wrapper = mount(Rating, { propsData });

    // Check checked stars
    const checked = wrapper.findAll('.checked');
    expect(checked).toHaveLength(3);
    for (let i = 0; i < checked.length; i += 1) {
      expect(checked.at(i).element.innerHTML).toEqual('★');
    }

    // Check unchecked stars
    const unchecked = wrapper.findAll('span').filter(span => !span.classes().includes('checked'));
    expect(unchecked).toHaveLength(2);
    for (let i = 0; i < unchecked.length; i += 1) {
      expect(unchecked.at(i).element.innerHTML).toEqual('☆');
    }
  });

  describe('methods', () => {
    describe('handleStars', () => {
      it('should go through list and assign stars based on class', () => {
        const children = [
          { className: ['checked'], innerHTML: '☆' },
          { className: ['checked'], innerHTML: '☆' },
          { className: ['checked'], innerHTML: '☆' },
          { className: [], innerHTML: '☆' },
          { className: [], innerHTML: '☆' },
        ];
        const expected = [
          { className: ['checked'], innerHTML: '★' },
          { className: ['checked'], innerHTML: '★' },
          { className: ['checked'], innerHTML: '★' },
          { className: [], innerHTML: '☆' },
          { className: [], innerHTML: '☆' },
        ];
        
        const wrapper = mount(Rating);
        wrapper.vm.handleStars(children);
        expect(children).toEqual(expected);
      });
    });
  });
});
