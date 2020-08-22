import React from 'react';
import { shallow } from 'enzyme';

import Form from './form';

describe('Form component tests', () => {
  test('Match snapshot', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper).toMatchSnapshot();
  });
});
