import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Text from '../components/Text';
import Info from './Info';
import colors from '../config/colors';

function FavoriteItem({ data, renderRightActions }) {
  const {
    title,
    name,
    last_air_date,
    status,
    next_episode_to_air,
    release_date,
    poster_path,
    vote_average,
    genres,
  } = data;
  const img = `http://image.tmdb.org/t/p/w342${poster_path}`;
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.image}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.right}>
          <Text numberOfLines={1} style={styles.title}>
            {title || name}
          </Text>
          <View style={styles.vote}>
            <MaterialCommunityIcons
              name='star'
              color={colors.yellow}
              size={15}
            />
            <Text style={styles.voteText}>{vote_average}</Text>
          </View>
          {status && <Info title='Status' data={status} />}
          {release_date && <Info title='Release' data={release_date} />}
          {last_air_date && <Info title='Last airdate' data={last_air_date} />}
          {next_episode_to_air && (
            <Info title='Next airdate' data={next_episode_to_air['air_date']} />
          )}
        </View>

        <MaterialCommunityIcons
          color={colors.light}
          name='chevron-right'
          size={25}
        />
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginVertical: 10,
    flexDirection: 'row',
    height: 100,
  },
  left: {
    borderRadius: 15,
    flex: 1,
    marginRight: 15,
  },
  right: {
    marginRight: 15,
    flex: 4,
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',

    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '80%',
  },
  vote: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteText: {
    fontSize: 14,
    marginLeft: 3,
    textAlign: 'center',
  },
});

export default FavoriteItem;
