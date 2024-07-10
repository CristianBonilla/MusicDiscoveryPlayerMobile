import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function CountrySearch() {
  const viewRef = React.createRef<View>();

  return (
    <View style={styles.container} ref={viewRef}>
      <TextInput
        style={styles.input}
        placeholder='Search'
        placeholderTextColor={$inputColor}
        enablesReturnKeyAutomatically
        clearButtonMode='while-editing' />
    </View>
  );
}

const $containerBackground = 'rgba(209, 209, 209, 0.93)';
const $inputTransparent = 'transparent';
const $inputColor = '#000000';

const styles = StyleSheet.create({
  container: {
    backgroundColor: $containerBackground,
    borderRadius: 15,
    borderWidth: 0,
    height: 60,
    marginHorizontal: 20,
    marginTop: 10,
    padding: 4,
    width: '95%'
  },
  input: {
    backgroundColor: $inputTransparent,
    borderRadius: 20,
    flex: 1,
    fontSize: 20
  }
});

export { CountrySearch };
