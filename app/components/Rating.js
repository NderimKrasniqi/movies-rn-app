import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function Rating({ score, size, style }) {
  const vote = score / 2;
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons
        name={
          vote >= 1 ? 'star' : vote >= 0.5 ? 'star-half-full' : 'star-outline'
        }
        color={colors.yellow}
        size={size}
      />
      <MaterialCommunityIcons
        name={
          vote >= 2 ? 'star' : vote >= 1.5 ? 'star-half-full' : 'star-outline'
        }
        color={colors.yellow}
        size={size}
      />
      <MaterialCommunityIcons
        name={
          vote >= 3 ? 'star' : vote >= 2.5 ? 'star-half-full' : 'star-outline'
        }
        color={colors.yellow}
        size={size}
      />
      <MaterialCommunityIcons
        name={
          vote >= 4 ? 'star' : vote >= 3.5 ? 'star-half-full' : 'star-outline'
        }
        color={colors.yellow}
        size={size}
      />
      <MaterialCommunityIcons
        name={
          vote >= 5 ? 'star' : vote >= 4.5 ? 'star-half-full' : 'star-outline'
        }
        color={colors.yellow}
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
