import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Rating from './Rating';
import Text from './Text';

function Card({ title, uri, score, liked, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          ImageResizeMode='contain'
          style={styles.image}
          source={{ uri }}
        />
        <View style={styles.detailContainer}>
          <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>
            {title || 'Aquaman'}
          </Text>
          <Rating style={styles.rating} score={score} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    width: 160,
    height: 300,
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
