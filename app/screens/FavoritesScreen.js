import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, FlatList } from 'react-native';
import { addToFavorite } from '../store/actions';
import Screen from '../components/Screen';
import FavoriteItem from '../components/FavoriteItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import PageTitle from '../components/PageTitle';

function FavoritesScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.favoriteMovies);
  const { favoriteMovies } = data;
  return (
    <Screen style={styles.container}>
      <PageTitle title='Favorites' style={styles.pageTitle} />
      <FlatList
        data={favoriteMovies}
        keyExtractor={(favoriteMovies) => favoriteMovies.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={7}
        renderItem={({ item }) => (
          <FavoriteItem
            data={item}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => dispatch(addToFavorite(item))}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    paddingLeft: 20,
    marginBottom: 20,
  },
});

export default FavoritesScreen;
