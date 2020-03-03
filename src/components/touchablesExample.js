import React, { Fragment } from 'react';
import { Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from '../styles/common';

function TouchablesExample() {
  return (
    <Fragment>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => alert('TouchableHighlight pressed')}
      >
        <Text
          style={styles.whiteText}
        >
          {'TouchableHighlight'}
        </Text>
      </TouchableHighlight>

      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => alert('TouchableNativeFeedback pressed')}
      >
        <View
          style={styles.touchable}
        >
          <Text
            style={styles.whiteText}
          >
            {'TouchableNativeFeedback'}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => alert('TouchableOpacity pressed')}
      >
        <Text
          style={styles.whiteText}
        >
          {'TouchableOpacity'}
        </Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress={() => alert('TouchableWithoutFeedback pressed')}
      >
        <Text
          style={[styles.touchable, styles.whiteText]}
        >
          {'TouchableWithoutFeedback'}
        </Text>
      </TouchableWithoutFeedback>
    </Fragment>
  );
}

export default TouchablesExample;
