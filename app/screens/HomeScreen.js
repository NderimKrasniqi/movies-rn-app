import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, FlatList } from 'react-native';
import { getTrending } from '../store/actions';
import Avatar from '../components/Avatar';
import PageTitle from '../components/PageTitle';
import ActivityIndicator from '../components/ActivityIndicator';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Text from '../components/Text';
import Screen from '../components/Screen';

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies);
  const { error, loading, movies } = data;
  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);
  return (
    <Screen style={styles.container}>
      <Avatar source={require('../assets/Lionel.jpg')} size={75} />
      <PageTitle title='Explore' tag="Let's find your favorite movie or show" />
      <SearchBar />
      {error && (
        <>
          <Text style={styles.error}>Couldn't retrieve the data.</Text>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={movies}
        keyExtractor={(movies) => movies.id}
        numColumns={2}
        columnWrapperStyle={styles.list}
        showsVerticalScrollIndicator={false}
        initialNumToRender={7}
        renderItem={({ item }) => (
          <Card
            title={item.original_title || item.name}
            uri={`http://image.tmdb.org/t/p/w342${
              item.poster_path || item.backdrop_path
            }`}
            score={item.vote_average}
            onPress={() => navigation.navigate('MovieDetailScreen', item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 30,
  },
  list: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  error: {
    textAlign: 'center',
  },
});

export default HomeScreen;
