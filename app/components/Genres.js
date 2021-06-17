import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { joinGenres } from '../utils/utils';

function Genres({ genres, style }) {
  return (
    <View style={styles.container}>
      <Text key={genres?.name} style={[style]}>
        {'|  ' + joinGenres(genres) + '  |'}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Genres;
