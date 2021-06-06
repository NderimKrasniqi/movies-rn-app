import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Rating({ score }) {
  const size = 15;
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={
          score >= 1 ? 'star' : score >= 0.5 ? 'star-half-full' : 'star-outline'
        }
        color='yellow'
        size={size}
      />
      <MaterialCommunityIcons
        name={
          score >= 2 ? 'star' : score >= 1.5 ? 'star-half-full' : 'star-outline'
        }
        color='yellow'
        size={size}
      />
      <MaterialCommunityIcons
        name={
          score >= 3 ? 'star' : score >= 2.5 ? 'star-half-full' : 'star-outline'
        }
        color='yellow'
        size={size}
      />
      <MaterialCommunityIcons
        name={
          score >= 4 ? 'star' : score >= 3.5 ? 'star-half-full' : 'star-outline'
        }
        color='yellow'
        size={size}
      />
      <MaterialCommunityIcons
        name={
          score >= 5 ? 'star' : score >= 4.5 ? 'star-half-full' : 'star-outline'
        }
        color='yellow'
        size={size}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Rating;
