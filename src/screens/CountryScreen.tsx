import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CountrySearch } from '../components/CountrySearch';

function CountryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.title}>Select Country</Text>
        <CountrySearch />
      </View>
    </SafeAreaView>
  );
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

export { CountryScreen };
