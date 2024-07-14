import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Name</Text>
    </View>
  );
}

const $titleColor = '#FFFFFF';
const $containerTransparentColor = 'rgba(0, 0, 0, 0.5)';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: $containerTransparentColor,
    paddingBottom: 20
  },
  title: {
    color: $titleColor,
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 80,
    textAlign: 'center'
  }
});

export { ProfileScreen };
