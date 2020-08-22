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

  test('displays welcome text', () => {
    const text = findByTestIdProp(wrapper, 'welcome-text');
    expect(text.length).toBe(1);
  });

  test('displays input label', () => {
    const text = findByTestIdProp(wrapper, 'input-label');
    expect(text.length).toBe(1);
  });

  test('displays book name input', () => {
    const bookNameInput = findByTestIdProp(wrapper, 'book-name-input');
    expect(bookNameInput.length).toBe(1);
  });

  test('displays book quantity input', () => {
    const bookQuantityInput = findByTestIdProp(wrapper, 'book-quantity-input');
    expect(bookQuantityInput.length).toBe(1);
  });

  test('displays add book button', () => {
    const addBookButton = findByTestIdProp(wrapper, 'add-book-button');
    expect(addBookButton.length).toBe(1);
  });

  test('displays empty book list text', () => {
    const emptyListText = findByTestIdProp(wrapper, 'empty-book-list');
    expect(emptyListText.length).toBe(1);
  });

  test('displays book list', () => {
    const books = [
      { title: 'book 1', quantity: 2 },
      { title: 'book 2', quantity: 1 },
      { title: 'book 3', quantity: 4 },
    ];

    wrapper = shallow(<Books
      data={books}
    />);

    const bookList = findByTestIdProp(wrapper, 'book-list');

    expect(bookList.length).toBe(1);
  });

  test('check prop types', () => {
    const props = {
      username: 'test',
      onBookNameChanged: jest.fn(),
      onBookQuantityChanged: jest.fn(),
      onAddBookPressed: jest.fn(),
    };
    const error = checkPropTypes(Books.propTypes, props, 'props', Books.name);
    expect(error).toBeUndefined();
  });

  test('book name change callback is called', () => {
    const onBookNameChanged = jest.fn();
    wrapper = shallow(<Books
      onBookNameChanged={onBookNameChanged}
    />);

    const expected = 'test';
    const bookNameInput = findByTestIdProp(wrapper, 'book-name-input').first();
    bookNameInput.simulate('changeText', expected);

    expect(onBookNameChanged).toBeCalledTimes(1);
    expect(onBookNameChanged).toBeCalledWith(expected);
  });

  test('book quantity change callback is called', () => {
    const onBookQuantityChanged = jest.fn();
    wrapper = shallow(<Books
      onBookQuantityChanged={onBookQuantityChanged}
    />);

    const expected = 'test';
    const bookQuantityInput = findByTestIdProp(wrapper, 'book-quantity-input').first();
    bookQuantityInput.simulate('changeText', expected);

    expect(onBookQuantityChanged).toBeCalledTimes(1);
    expect(onBookQuantityChanged).toBeCalledWith(expected);
  });

  test('add book button pressed callback is called', () => {
    const onAddBookPressed = jest.fn();
    wrapper = shallow(<Books
      onAddBookPressed={onAddBookPressed}
    />);
    const addBookButton = findByTestIdProp(wrapper, 'add-book-button').first();
    addBookButton.simulate('press');

    expect(onAddBookPressed).toBeCalledTimes(1);
  });
});
