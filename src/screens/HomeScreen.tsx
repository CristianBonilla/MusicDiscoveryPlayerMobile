import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { HomeScreenOptions } from '../types/props';
import { HomeScreenEnum } from '../enums/home-screen.enum';
import { SharedInput } from '../shared/components/SharedInput';

function HomeScreen(homeScreen: HomeScreenEnum) {
  let options: HomeScreenOptions | null;
  switch (homeScreen) {
    case HomeScreenEnum.Country:
      options = {
        text: 'Select Country',
        input: {
          isSearch: true,
          placeholder: 'Search'
        }
      };
      break;
    case HomeScreenEnum.Profile:
      options = {
        text: 'Profile',
        input: {
          placeholder: 'Username'
        }
      };
      break;
    default:
      options = null;
      break;
  }
  const getScreen = (): ReactNode => (
    <SafeAreaView style={styles.container}>
      {
        options && (
          <View style={styles.wrap}>
            <Text style={styles.title}>{options.text}</Text>
            <SharedInput {...options.input} />
          </View>
        )
      }
    </SafeAreaView>
  );

  return getScreen;
}

const $titleColor = '#FFFFFF';
const $containerTransparentColor = 'rgba(0, 0, 0, 0.5)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: $titleColor,
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 80,
    textAlign: 'center'
  },
  wrap: {
    alignItems: 'center',
    backgroundColor: $containerTransparentColor,
    paddingBottom: 20
  }
});

export { HomeScreen };
