import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function SearchBar({ width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <Feather
        name='search'
        size={20}
        color={defaultStyles.colors.primary}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={defaultStyles.colors.light}
        placeholder='Search...'
        type='text'
        style={[defaultStyles.text, { width }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.medium,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 25,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
