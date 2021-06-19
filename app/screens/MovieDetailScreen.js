import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, getMovie } from '../store/actions';
import { minToHours, getYear } from '../utils/utils';
import ActivityIndicator from '../components/ActivityIndicator';
import { StyleSheet, View } from 'react-native';
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
  }, [dispatch]);

  const handLiked = () => {
    dispatch(addToFavorite());
  };

  return (
    <View>
      {error && (
        <View>
          <Text style={styles.error}>Couldn't retrieve the data.</Text>
        </View>
      )}
      {loading && <ActivityIndicator visible={loading} />}
      <View>
        <GradientImage
          style={styles.image}
          uri={`http://image.tmdb.org/t/p/w780${movie?.backdrop_path}`}
        />
      </View>
      {movie && (
        <View style={styles.container}>
          <View style={styles.likedContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {movie?.title || movie?.name}
            </Text>
            <Liked
              style={styles.liked}
              size={26}
              favorite={movie?.favorite}
              onPress={handLiked}
            />
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.date}>
              {getYear(movie?.release_date || movie?.first_air_date)}
            </Text>
            <Genres style={styles.genres} genres={movie?.genres} split='|' />
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
          <Text ellipsizeMode='tail' numberOfLines={14} style={styles.overview}>
            {movie?.overview}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  likedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  airdates: {
    flexDirection: 'row',
  },
  airText: {
    marginRight: 5,
    fontSize: 14,
  },
  liked: {
    marginLeft: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 15,
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
    marginHorizontal: 10,
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
    color: colors.light,
  },
  overviewWrapper: {},
  overview: {
    marginVertical: 20,
    textAlign: 'left',
  },
  error: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieDetailScreen;
