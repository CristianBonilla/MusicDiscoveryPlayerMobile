import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet } from 'react-native';
import type { HomeBackgroundProps } from '../types/props';

function HomeBackground({ children, style = {} }: HomeBackgroundProps) {
  return (
    <ImageBackground
      source={$imageBackground}
      resizeMode="cover"
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
