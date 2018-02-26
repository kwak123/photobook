import { shallow, createLocalVue } from '@vue/test-utils';

import Loading from '@/components/Loading';

const localVue = createLocalVue();

describe('Loading', () => {
  it('should have a conditional text based on requesting, error, and message', () => {
    const wrapper = shallow(Loading, {
      localVue,
      propsData: {
        requesting: false,
        error: '',
        message: 'Show me',
      },
    });

    expect(wrapper.find('div').element.innerHTML).toEqual('Show me');

    wrapper.setProps({ error: 'test error' });
    expect(wrapper.find('div').element.innerHTML).toEqual('test error');

    wrapper.setProps({ requesting: true });
    expect(wrapper.find('div').classes()).toContain('loading');
  });
});
