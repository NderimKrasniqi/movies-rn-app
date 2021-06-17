import React from 'react';
import { View, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../config/colors';
import Text from './Text';
function Info({ title, data, style }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 5,
    color: colors.light,
  },
  data: {
    fontSize: 14,
    color: colors.white,
  },
});

export default Info;
