import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import defaultStyles from '../config/styles';
import Rating from './Rating';
import Text from './Text';

function Card({ title, uri, score, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          ImageResizeMode='contain'
          style={styles.image}
          source={{ uri }}
        />
        <View style={styles.detailContainer}>
          <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Rating style={styles.rating} score={score} size={15} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 25,
    width: defaultStyles.dimension.width,
    height: 290,
    borderRadius: 10,
    overflow: 'hidden',
  },
  detailContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    marginVertical: 7,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Card;
