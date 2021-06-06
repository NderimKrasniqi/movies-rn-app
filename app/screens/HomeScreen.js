import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Avatar from '../components/Avatar';
import PageTitle from '../components/PageTitle';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Screen from '../components/Screen';

const starWars = [
  {
    title: 'Star Wars',
    score: '2',
    imageUrl:
      'https://ia.media-imdb.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    title: 'Star Wars: The Last Jedi',
    score: '5',
    imageUrl:
      'https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    title: 'Star Wars: The Force Awakens',
    score: '3',
    imageUrl:
      'https://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    title: 'Star Wars: Episode I - The Phantom Menace',
    score: '2',
    imageUrl:
      'https://ia.media-imdb.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    title: 'Star Wars: The Clone Wars',
    score: '4',
    imageUrl:
      'https://ia.media-imdb.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
];

function HomeScreen(props) {
  const imageUrl =
    'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg';
  return (
    <Screen style={styles.container}>
      <Avatar source={require('../../assets/Lionel.jpg')} size={75} />
      <PageTitle title='Explore' tag="Let's find your favorite movie or show" />
      <SearchBar />
      <FlatList
        data={starWars}
        keyExtractor={(starWars) => starWars.title}
        numColumns={2}
        columnWrapperStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            uri={item.imageUrl}
            score={item.score}
            onPress={() => console.log('clicked', item)}
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
  },
});

export default HomeScreen;
