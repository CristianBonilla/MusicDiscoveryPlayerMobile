import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CountryScreen } from './CountryScreen';
import { HomeScreenEnum } from '../enums/home-screen.enum';
import { ProfileScreen } from './ProfileScreen';

function HomeScreen(homeScreen: HomeScreenEnum) {
  const getScreen = (): ReactNode => (
    <SafeAreaView style={styles.container}>
      {
        (() => {
          switch (homeScreen) {
            case HomeScreenEnum.Country:
              return <CountryScreen />;
            case HomeScreenEnum.Profile:
              return <ProfileScreen />;
            default:
              return <></>;
          }
        })()
      }
    </SafeAreaView>
  );

  return getScreen;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export { HomeScreen };
