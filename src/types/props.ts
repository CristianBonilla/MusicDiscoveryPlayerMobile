import { KeyboardTypeOptions, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type { PropsWithChildren } from 'react';

export type InputSharedProps = {
  isSearch?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
};

export type HomeScreenOptions = {
  text: string;
  input?: InputSharedProps;
};

export type HomeBackgroundProps = PropsWithChildren<{ style?: StyleProp<ViewStyle> }>;

export type FontAwesomeIconProps = Pick<Parameters<typeof FontAwesomeIcon>[0], 'icon' | 'size'>;

export type PressProps = Pick<PressableProps, 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'>;

export type CleanButtonProps = {
  text: string;
  dispatch: (text: string) => void;
};
