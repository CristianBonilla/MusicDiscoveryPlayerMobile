import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import type { PropsWithChildren } from 'react';

type HomeBackgroundProps = PropsWithChildren<{ style?: StyleProp<ViewStyle> }>;

function HomeBackground({ children, style = {} }: HomeBackgroundProps) {
  return (
    <ImageBackground
      source={$imageBackground}
      resizeMode="cover"
      blurRadius={2}
      style={[
        styles.background,
        style
      ]}>
        {children}
    </ImageBackground>
  );
}

const $imageBackground = require('../assets/music-discovery-player-background.jpg') as ImageSourcePropType;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  }
});

export { HomeBackground };
