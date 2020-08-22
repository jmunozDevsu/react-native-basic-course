import { addBook } from './books';
import ActionTypes from './ActionTypes';

describe('Add book action creator tests', () => {
  test('returns add book action when called', () => {
    const title = 'test';
    const quantity = '1';
    expect(addBook(title, quantity)).toEqual({
      type: ActionTypes.ADD_BOOK, payload: {
        title,
        quantity,
      },
    });
  });
});
