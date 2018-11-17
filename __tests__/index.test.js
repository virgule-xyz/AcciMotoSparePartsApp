import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Infrastructure', () => {
  it('test correctly', () => {
    expect(1).toEqual(1);
  });
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.props().testID).toEqual('SafeAreaView');
  });
});
