import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { SearchButton } from './SearchButton';
import { CleanButtonProps } from '../types/props';

function CleanSearchButton({ text, dispatch }: CleanButtonProps) {
  const longPressTimeoutRef = React.useRef<NodeJS.Timeout>();

  const onLongPress = (_event: GestureResponderEvent) => {
    const longPressTimeout = setInterval(() => {
      if (text.length > 0) {
        dispatch(text = text.slice(0, -1));
      } else {
        clearInterval(longPressTimeoutRef.current);
        text = '';
      }
    }, 100);
    longPressTimeoutRef.current = longPressTimeout;
  };
  const onPressOut = (_event: GestureResponderEvent) => clearInterval(longPressTimeoutRef.current);

  return (
    text.length > 0 &&
      <SearchButton
        icon={[ 'fas', 'circle-xmark' ]}
        size={30}
        onPress={() => dispatch('')}
        onLongPress={onLongPress}
        onPressOut={onPressOut} />
  );
}

export { CleanSearchButton };
