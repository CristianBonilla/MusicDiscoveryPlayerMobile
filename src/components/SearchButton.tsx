import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FontAwesomeIconProps, PressProps } from '../types/props';

function SearchButton({icon, size, onPress, onLongPress, onPressIn, onPressOut }: FontAwesomeIconProps & PressProps) {
  return (
    <Pressable
      style={({ pressed }) => pressed ? styles.pressedButton : styles.button}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <FontAwesomeIcon icon={icon} style={styles.icon} size={size} />
    </Pressable>
  );
}

const $placeholderColor = '#414141';
const $pressedButtonColor = '#AFAEAE';
const $transparentColor = 'transparent';

const styles = StyleSheet.create({
  button: {
    backgroundColor: $transparentColor,
    borderBottomLeftRadius: 15,
    borderRadius: 0,
    borderTopLeftRadius: 15,
    height: 52,
    width: 50
  },
  icon: {
    color: $placeholderColor,
    margin: 'auto'
  },
  pressedButton: {
    backgroundColor: $pressedButtonColor,
    borderBottomLeftRadius: 20,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    height: 50,
    width: 50
  }
});

export { SearchButton };
