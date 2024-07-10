import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeBackground } from '../components/HomeBackground';

function HomeScreen() {
  return (
    <HomeBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Select Country</Text>
      </View>
    </HomeBackground>
  );
}

const $titleColor = '#FFFFFF';
const $containerTransparent = 'rgba(0, 0, 0, 0.6)';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: $containerTransparent
  },
  title: {
    color: $titleColor,
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 80,
    textAlign: 'center'
  }
});

export { HomeScreen };
