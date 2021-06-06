import React from 'react';
import { View, StyleSheet } from 'react-native';
import defaultStyles from '../config/styles';
import Text from './Text';

function PageTitle({ title, tag }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tag}>{tag}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: defaultStyles.colors.white,
  },
  tag: {
    marginTop: 7,
    fontSize: 14,
  },
});

export default PageTitle;
