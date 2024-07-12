import { PressableProps } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export type FontAwesomeIconProps = Pick<Parameters<typeof FontAwesomeIcon>[0], 'icon' | 'size'>;

export type PressProps = Pick<PressableProps, 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'>;

export type CleanButtonProps = {
  text: string;
  dispatch: (text: string) => void;
};
