import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './containers/login';
import Books from './containers/books';

const Stack = createStackNavigator();

const Screens = {
  Login: 'Login',
  Books: 'Books',
};

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={Screens.Login}>
      <Stack.Screen
        name={Screens.Login}
        component={Login}
      />
      <Stack.Screen
        name={Screens.Books}
        component={Books}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export {
  Screens,
};
