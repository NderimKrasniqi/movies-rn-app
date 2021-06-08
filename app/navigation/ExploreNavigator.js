import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const Stack = createStackNavigator();

const ExploreNavigator = () => (
  <Stack.Navigator mode='modal'>
    <Stack.Screen
      name='HomeScreen'
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='MovieDetailScreen'
      component={MovieDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ExploreNavigator;
