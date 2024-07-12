import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { loadIcons } from './shared/icons';

loadIcons();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export { App };
