import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Avatar({ source, size }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 2,
          borderColor: colors.secondary,
        }}
        source={source}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
});

export default Avatar;
