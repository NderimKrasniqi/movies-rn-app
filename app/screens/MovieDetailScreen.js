import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, clearCurrent, getMovie } from '../store/actions';
import { minToHours, getYear } from '../utils/utils';
import ActivityIndicator from '../components/ActivityIndicator';
import { StyleSheet, View, ScrollView } from 'react-native';
import colors from '../config/colors';
import Text from '../components/Text';
import Liked from '../components/Liked';
import Rating from '../components/Rating';
import GradientImage from '../components/GradientImage';
import Genres from '../components/Genres';

function MovieDetailScreen({ route }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie);
  const { error, loading, movie } = data;

  const item = route.params;

  useEffect(() => {
    dispatch(getMovie(item));

    return () => {
      dispatch(clearCurrent());
    };
  }, [item]);

  return (
    <ScrollView>
      {error && (
        <View>
          <Text style={styles.error}>Couldn't retrieve the data.</Text>
        </View>
      )}
      {<ActivityIndicator visible={loading} />}
      <View>
        <GradientImage
          style={styles.image}
          uri={`http://image.tmdb.org/t/p/w780${movie?.backdrop_path}`}
        />
      </View>
      {movie && (
        <View style={styles.container}>
          <Text numberOfLines={1} style={styles.title}>
            {movie?.title || movie?.name}
          </Text>
          <Liked
            style={styles.liked}
            size={30}
            favorite={movie?.favorite}
            onPress={() => dispatch(addToFavorite(movie))}
          />
          <View style={styles.detailContainer}>
            <Text style={styles.date}>
              {getYear(movie?.release_date || movie?.first_air_date)}
            </Text>
            <Genres style={styles.genres} genres={movie?.genres} />
            <Text style={styles.runtime}>
              {minToHours(movie?.runtime || movie?.episode_run_time)}
            </Text>
          </View>

          <View style={styles.ratingContainer}>
            <Rating
              style={styles.rating}
              score={movie?.vote_average}
              size={20}
            />
            <Text style={styles.vote}>{movie?.vote_average}</Text>
            <Text style={styles.voteTotal}>/10</Text>
          </View>
          <Text style={styles.overview}>{movie?.overview}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  liked: {
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    fontSize: 14,
    color: colors.white,
  },
  runtime: {
    fontSize: 14,
    color: colors.white,
  },
  genres: {
    color: colors.light,
    marginHorizontal: 3,
    fontSize: 13,
  },
  rating: {
    marginRight: 10,
  },
  vote: {
    fontWeight: 'bold',
    color: colors.yellow,
  },
  voteTotal: {
    fontSize: 15,
    color: colors.white,
  },
  overview: {
    marginVertical: 15,
    textAlign: 'left',
  },
  error: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieDetailScreen;
