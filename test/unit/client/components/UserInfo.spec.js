import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';

import UserInfo from '@/components/UserInfo';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserInfo', () => {

  it('should fetch render information from $store.state in computed', () => {
    const user = {
      avatar: 'testAvatar',
      username: 'testUsername',
      first: 'testFirst',
      last: 'testLast',
      rating: '0.0',
    };

    const wrapper = mount(UserInfo, {
      mocks: {
        $store: {
          state: { user },
        },
      },
    }, localVue);
    
    const avatarAttr = wrapper.find('.userinfo__avatar--img').attributes();
    expect(avatarAttr.src).toEqual(user.avatar);

    const username = wrapper.find('.userinfo__username--text').text();
    expect(username).toEqual(user.username);

    const first = wrapper.find('.userinfo__first--text').text();
    expect(first).toEqual(user.first);

    const last = wrapper.find('.userinfo__last--text').text();
    expect(last).toEqual(user.last);

    const rating = wrapper.find('.userinfo__rating--text').text();
    expect(rating).toEqual(user.rating);
  });
});
