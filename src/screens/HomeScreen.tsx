import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeBackground } from '../components/HomeBackground';
import { CountrySearch } from '../components/CountrySearch';

function HomeScreen() {
  return (
    <HomeBackground>
      <View style={styles.wrap}>
        <Text style={styles.title}>Select Country</Text>
        <CountrySearch />
      </View>
    </HomeBackground>
  );
}

const $titleColor = '#FFFFFF';
const $containerTransparentColor = 'rgba(0, 0, 0, 0.5)';

const styles = StyleSheet.create({
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
    marginTop: 20,
    paddingBottom: 20
  }
});

export { HomeScreen };
