import books from './books';
import ActionTypes from '../actions/ActionTypes';

describe('Books reducer tests', () => {

  test('returns books state with data', () => {
    const book = { title: 'test', quantity: '4' };
    const data = [book];
    expect(books([], { type: ActionTypes.ADD_BOOK, payload: book })).toEqual(data);
  });

  test('returns books state with previous and new data', () => {
    const book = { title: 'test', quantity: '4' };
    const data = [book, book];
    expect(books([book], { type: ActionTypes.ADD_BOOK, payload: book })).toEqual(data);
  });
});
