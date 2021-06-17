import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function Liked({ size = 40, favorite = false, style, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            width: size,
            height: size,
          },
          style,
        ]}
      >
        {favorite ? (
          <MaterialCommunityIcons
            name='heart'
            color={colors.liked}
            size={size}
          />
        ) : (
          <MaterialCommunityIcons
            name='heart-outline'
            color={colors.liked}
            size={size}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Liked;
