import { shallow, createLocalVue } from '@vue/test-utils';

import Profile from '@/components/Profile';
import UserInfo from '@/components/UserInfo';
import PhotoList from '@/components/PhotoList';
import PhotoDetail from '@/components/PhotoDetail';

const localVue = createLocalVue();

describe('Profile', () => {
  it('should have UserInfo, PhotoList, and PhotoDetail child components', () => {
    const wrapper = shallow(Profile, {
      localVue,
      stubs: {
        UserInfo: '<div></div>',
        PhotoList: '<div></div>',
        PhotoDetail: '<div></div>',
      },
    });

    expect(wrapper.contains(UserInfo)).toBe(true);
    expect(wrapper.contains(PhotoList)).toBe(true);
    expect(wrapper.contains(PhotoDetail)).toBe(true);
  });
});
