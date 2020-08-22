import React from 'react';
import { shallow } from 'enzyme';

import { initStore } from '../../store';
import Books from './index';
import { addBook } from '../../actions/books';

describe('Redux integration tests', () => {
  let wrapper, store;

  beforeEach(() => {
    store = initStore({ login: {} });
    wrapper = shallow(<Books store={store}/>);
  });

  test('book is added to state', () => {
    let expected = {
      title: 'test',
      quantity: '2',
    };
    store.dispatch(addBook(expected.title, expected.quantity));
    const { books } = store.getState();

    expect(books).toEqual([expected]);
  });
});
