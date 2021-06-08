import React from 'react';
import { View, StyleSheet } from 'react-native';

function MovieDetailScreen({ route }) {
  const movie = route.params;
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default MovieDetailScreen;
