import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { loadIcons } from './shared/icons';
import { HomeNavigation } from './navigation/HomeNavigation';
import { HomeBackground } from './components/HomeBackground';
import { NAVIGATION_THEME } from './constants/navigation-theme';

loadIcons();

function App() {
  return (
    <NavigationContainer theme={NAVIGATION_THEME}>
      <HomeBackground>
        <HomeNavigation />
      </HomeBackground>
    </NavigationContainer>
  );
}

export { App };
