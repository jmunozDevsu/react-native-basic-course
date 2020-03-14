import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackScreens } from './screens';
import HelloClassComponent from '../components/helloClassComponent';
import HelloFunctionComponent from '../components/helloFunctionComponent';
import BasicInputExample from '../components/basicInputExample';
import ImageExample from '../components/imageExample';
import ButtonExample from '../components/buttonExample';
import ScrollViewExample from '../components/scrollViewExample';
import FlatListExample from '../components/flatListExample';
import SectionListExample from '../components/sectionListExample';
import TouchablesExample from '../components/touchablesExample';
import SliderExample from '../components/sliderExample';
import PickerExample from '../components/pickerExample';

const Stack = createStackNavigator();

class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={stackScreens.CLASS}>
        <Stack.Screen
          name={stackScreens.CLASS}
          component={HelloClassComponent}
        />
        <Stack.Screen
          name={stackScreens.FUNCTION}
          component={HelloFunctionComponent}
        />
        <Stack.Screen
          name={stackScreens.INPUT}
          component={BasicInputExample}
        />
        <Stack.Screen
          name={stackScreens.IMAGE}
          component={ImageExample}
        />
        <Stack.Screen
          name={stackScreens.BUTTON}
          component={ButtonExample}
        />
        <Stack.Screen
          name={stackScreens.SCROLL}
          component={ScrollViewExample}
        />
        <Stack.Screen
          name={stackScreens.FLATLIST}
          component={FlatListExample}
        />
        <Stack.Screen
          name={stackScreens.SECTION_LIST}
          component={SectionListExample}
        />
        <Stack.Screen
          name={stackScreens.TOUCHABLES}
          component={TouchablesExample}
        />
        <Stack.Screen
          name={stackScreens.SLIDER}
          component={SliderExample}
        />
        <Stack.Screen
          name={stackScreens.PICKER}
          component={PickerExample}
        />
      </Stack.Navigator>
    );
  }
}

export default StackNavigation;
