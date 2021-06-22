import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Text from './Text';

function PageTitle({ title, tag, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {tag && <Text style={styles.tag}>{tag}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.white,
  },
  tag: {
    marginTop: 7,
    fontSize: 14,
    color: colors.light,
  },
});

export default PageTitle;
