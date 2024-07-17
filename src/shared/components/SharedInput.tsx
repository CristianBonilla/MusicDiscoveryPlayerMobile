import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import type { InputSharedProps } from '../../types/props';
import { CleanSearchButton } from '../../components/CleanSearchButton';
import { SearchButton } from '../../components/SearchButton';

function SharedInput({ isSearch, keyboardType, placeholder }: InputSharedProps) {
  const options = {
    keyboardType: keyboardType ?? 'default',
    placeholder
  };
  const [ text, setText ] = React.useState<string>('');

  return (
    <View style={styles.container}>
      {
        !!isSearch && <SearchButton icon={[ 'fas', 'magnifying-glass' ]} size={25} />
      }
      <TextInput
        style={styles.input}
        keyboardType={options.keyboardType}
        autoCapitalize="none"
        spellCheck={false}
        underlineColorAndroid="transparent"
        placeholder={options.placeholder}
        placeholderTextColor={$placeholderColor}
        enablesReturnKeyAutomatically
        clearButtonMode="never"
        onChangeText={setText}
        value={text} />
      {
        !!isSearch && <CleanSearchButton text={text} dispatch={setText} />
      }
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

export { SharedInput };
