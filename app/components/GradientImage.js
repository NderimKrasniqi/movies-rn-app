import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Image } from 'react-native';

function GradientImage({ uri }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri }} />
      <LinearGradient
        colors={[
          'transparent',
          'rgba(13,13,13,0.2)',
          'rgba(13,13,13,0.4)',
          'rgba(13,13,13,0.6)',
          'rgba(13,13,13,0.8)',
          'rgba(13,13,13,1)',
        ]}
        style={styles.absolute}
      ></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 300,
    height: 100,
  },
});

export default GradientImage;
