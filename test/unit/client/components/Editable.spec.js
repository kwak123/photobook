import { mount } from '@vue/test-utils';

import Editable from '@/components/Editable';

// const localVue = createLocalVue();

describe('Editable', () => {
  it('should have a single contenteditable div', () => {
    const wrapper = mount(Editable);
    expect(wrapper.attributes().contenteditable).toEqual('true');
    expect(wrapper.element.children.length).toBe(0);
  });

  it('should expect 3 props: content, contentType, handleEditComplete', () => {
    const wrapper = mount(Editable);
    const expected = ['content', 'contentType', 'handleEditComplete'];
    const received = Object.keys(wrapper.vm.$props);
    received.sort(); // To match expected
    expect(received).toEqual(expected);
  });

  it('should display prop content in innerText', () => {
    const wrapper = mount(Editable, { propsData: { content: 'Test' } });
    expect(wrapper.element.innerText).toEqual('Test');
  });

  it('should properly set data-text based on content type, for placeholder', () => {
    const wrapperOne = mount(Editable, { propsData: { contentType: 'test' } });
    expect(wrapperOne.attributes()['data-text']).toEqual('No test');
  });

  it('should invoke handleEditComplete on onEditComplete', () => {
    const propsData = { handleEditComplete: jest.fn() };
    const wrapper = mount(Editable, { propsData });

    wrapper.vm.onEditComplete();
    expect(propsData.handleEditComplete).toHaveBeenCalled();
  });

  it('should invoke onEditComplete if enter is pressed', () => {
    const methods = { onEditComplete: jest.fn() };
    const wrapper = mount(Editable, { methods });

    wrapper.trigger('keydown.enter');
    wrapper.trigger('keydown.space');
    expect(methods.onEditComplete).toHaveBeenCalledTimes(1);
  });

  it('should watch for prop content', () => {
    const wrapper = mount(Editable, { propsData: { content: 'test' } });
    wrapper.setProps({ content: '123' });
    expect(wrapper.element.innerText).toEqual('123');
  });
});
