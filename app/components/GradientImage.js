import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Image } from 'react-native';

function GradientImage({ uri }) {
  return (
    <View>
      <Image style={styles.image} source={{ uri }} />
      <LinearGradient
        colors={[
          'transparent',
          'rgba(13,13,13,0.1)',
          'rgba(13,13,13,0.3)',
          'rgba(13,13,13,0.5)',
          'rgba(13,13,13,0.7)',
          'rgba(13,13,13,1)',
        ]}
        style={styles.absolute}
      ></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 450,
    width: '100%',
    resizeMode: 'cover',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 350,
    height: 100,
  },
});

export default GradientImage;
