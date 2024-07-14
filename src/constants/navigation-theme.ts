import { DefaultTheme } from '@react-navigation/native';
import type { Theme } from '@react-navigation/native';

export const NAVIGATION_THEME: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};
