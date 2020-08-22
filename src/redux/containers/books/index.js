import { connect } from 'react-redux';
import { addBook } from '../../actions/books';

import Books from './books';

const mapStateToProps = ({ login: { username }, books }) => ({
  username,
  data: books,
});

export default connect(mapStateToProps, { onAddBookPressed: addBook })(Books);
