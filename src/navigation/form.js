import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { formScreens } from '../navigation/screens';
import Result from '../components/exercise/result';
import Form from '../components/exercise/form';

const Stack = createStackNavigator();

class FormNavigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={formScreens.FORM}>
        <Stack.Screen
          name={formScreens.FORM}
          component={Form}
        />
        <Stack.Screen
          name={formScreens.RESULT}
          component={Result}
        />
      </Stack.Navigator>
    );
  }
}

export default FormNavigation;
