import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SearchButton } from './SearchButton';
import { CleanSearchButton } from './CleanSearchButton';

function CountrySearch() {
  const [ text, setText ] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <SearchButton icon={[ 'fas', 'magnifying-glass' ]} size={25} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={$placeholderColor}
        enablesReturnKeyAutomatically
        clearButtonMode="never"
        onChangeText={setText}
        value={text} />
      <CleanSearchButton text={text} dispatch={setText} />
    </View>
  );
}

const $containerBackgroundColor = 'rgba(209, 209, 209, 0.93)';
const $transparentColor = 'transparent';
const $placeholderColor = '#414141';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: $containerBackgroundColor,
    borderRadius: 15,
    borderWidth: 0,
    flex: 1,
    flexBasis: 57,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginTop: 5,
    paddingHorizontal: 2.5
  },
  input: {
    backgroundColor: $transparentColor,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    fontSize: 20,
    height: 52
  }
});

export { CountrySearch };
