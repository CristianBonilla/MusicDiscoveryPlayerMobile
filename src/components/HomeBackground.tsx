import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, View } from 'react-native';
import type { PropsWithChildren } from 'react';

function HomeBackground({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/music-discovery.jpeg') as ImageSourcePropType}
        resizeMode='cover'
        blurRadius={1}
        style={styles.background}>
          {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1
  }
});

export { HomeBackground };
