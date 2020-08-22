import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Books from './books';
import { findByTestIdProp } from '../../../../testUtils';

describe('Books dumb component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Books/>);
  });

  test('renders correctly', () => {
    const booksComponent = findByTestIdProp(wrapper, 'books-component');
    expect(booksComponent.length).toBe(1);
  });

  test('check prop types', () => {
    const props = {
      username: 'test',
      onAddBookPressed: jest.fn(),
    };
    const error = checkPropTypes(Books.propTypes, props, 'props', Books.name);
    expect(error).toBeUndefined();
  });
});
