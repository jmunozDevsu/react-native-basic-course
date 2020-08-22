import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BooksComponent from '../../screens/books';

class Books extends Component {

  static propTypes = {
    onAddBookPressed: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    data: BooksComponent.propTypes.data,
  };

  constructor(props) {
    super(props);
    this.onBookNameChanged = this.onBookNameChanged.bind(this);
    this.onBookQuantityChanged = this.onBookQuantityChanged.bind(this);
    this.onAddBookPressed = this.onAddBookPressed.bind(this);

    this.state = {};
  }

  onBookNameChanged(name) {
    this.setState({ title: name });
  }

  onBookQuantityChanged(quantity) {
    this.setState({ quantity });
  }

  onAddBookPressed() {
    const { title, quantity } = this.state;
    const { onAddBookPressed } = this.props;

    onAddBookPressed(title, quantity);
  }

  render() {
    const { title, quantity } = this.state;
    const { username, data } = this.props;

    return (
      <BooksComponent
        testID="books-component"
        username={username}
        onAddBookPressed={this.onAddBookPressed}
        onBookNameChanged={this.onBookNameChanged}
        onBookQuantityChanged={this.onBookQuantityChanged}
        bookName={title}
        bookQuantity={quantity}
        data={data}
      />
    );
  }
}

export default Books;
