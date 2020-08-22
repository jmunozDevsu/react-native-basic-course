import ActionTypes from './ActionTypes';

const addBook = (title, quantity) => ({
  type: ActionTypes.ADD_BOOK,
  payload: {
    title,
    quantity,
  },
});

export {
  addBook,
};
