import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
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

const Drawer = createDrawerNavigator();

class DrawerNavigation extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName={stackScreens.CLASS}>
        <Drawer.Screen
          name={stackScreens.CLASS}
          component={HelloClassComponent}
        />
        <Drawer.Screen
          name={stackScreens.FUNCTION}
          component={HelloFunctionComponent}
        />
        <Drawer.Screen
          name={stackScreens.INPUT}
          component={BasicInputExample}
        />
        <Drawer.Screen
          name={stackScreens.IMAGE}
          component={ImageExample}
        />
        <Drawer.Screen
          name={stackScreens.BUTTON}
          component={ButtonExample}
        />
        <Drawer.Screen
          name={stackScreens.SCROLL}
          component={ScrollViewExample}
        />
        <Drawer.Screen
          name={stackScreens.FLATLIST}
          component={FlatListExample}
        />
        <Drawer.Screen
          name={stackScreens.SECTION_LIST}
          component={SectionListExample}
        />
        <Drawer.Screen
          name={stackScreens.TOUCHABLES}
          component={TouchablesExample}
        />
        <Drawer.Screen
          name={stackScreens.SLIDER}
          component={SliderExample}
        />
        <Drawer.Screen
          name={stackScreens.PICKER}
          component={PickerExample}
        />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigation;
