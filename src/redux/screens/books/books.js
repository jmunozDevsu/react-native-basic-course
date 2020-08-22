import React, { Component } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

class Books extends Component {

  static propTypes = {
    username: PropTypes.string.isRequired,
    bookName: PropTypes.string,
    onBookNameChanged: PropTypes.func.isRequired,
    bookQuantity: PropTypes.string,
    onBookQuantityChanged: PropTypes.func.isRequired,
    onAddBookPressed: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
      })),
  };

  constructor() {
    super();
    this.renderBookList = this.renderBookList.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    const { username, bookName, onBookNameChanged, bookQuantity, onBookQuantityChanged, onAddBookPressed } = this.props;

    return (
      <View testID="books-component">
        <Text testID="welcome-text">Bienvenido {username}</Text>
        <Text testID="input-label">Ingresa el nombre del libro y la cantidad</Text>
        <TextInput
          testID="book-name-input"
          value={bookName}
          onChangeText={onBookNameChanged}
        />
        <TextInput
          testID="book-quantity-input"
          value={bookQuantity}
          onChangeText={onBookQuantityChanged}
        />
        <Button
          testID="add-book-button"
          title="Añadir"
          onPress={onAddBookPressed}
        />
        {this.renderBookList()}
        <TextInput/>
      </View>
    );
  }

  renderBookList() {
    const { data } = this.props;

    if (!data || data.length <= 0) {
      return (
        <Text
          testID="empty-book-list"
        >
          No existen registros
        </Text>
      );
    }

    return (
      <FlatList
        testID={'book-list'}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem({ item: { title, quantity }, index }) {
    return (
      <View
        testID="book-item"
        key={`book:${index}`}
      >
        <Text>{title}</Text>
        <Text>{quantity}</Text>
      </View>
    );
  }
}

export default Books;
