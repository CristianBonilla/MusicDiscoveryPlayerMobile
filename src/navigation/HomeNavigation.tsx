import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { STACK_NAVIGATION_OPTIONS } from '../constants/stack-navigation-options';
import { HomeScreenEnum } from '../enums/home-screen.enum';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName={HomeScreenEnum.Profile} screenOptions={STACK_NAVIGATION_OPTIONS}>
      {
        Object.keys(HomeScreenEnum).map((homeScreen) =>
          <Stack.Screen
            key={homeScreen}
            name={homeScreen}
            options={STACK_NAVIGATION_OPTIONS}>
              {HomeScreen(homeScreen as HomeScreenEnum)}
          </Stack.Screen>
        )
      }
    </Stack.Navigator>
  );
}

export { HomeNavigation };
