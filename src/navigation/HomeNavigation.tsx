import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import { CountryScreen } from '../screens/CountryScreen';
import { STACK_NAVIGATION_OPTIONS } from '../constants/stack-navigation-options';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="Country" screenOptions={STACK_NAVIGATION_OPTIONS}>
      <Stack.Screen name="Country" component={CountryScreen} options={STACK_NAVIGATION_OPTIONS} />
    </Stack.Navigator>
  );
}

export { HomeNavigation };
