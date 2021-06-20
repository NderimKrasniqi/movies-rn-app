import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import Liked from '../components/Liked';

const Stack = createStackNavigator();
const { height, width } = Dimensions.get('screen');

const ExploreNavigator = () => (
  <Stack.Navigator mode='card'>
    <Stack.Screen
      name='HomeScreen'
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='MovieDetailScreen'
      component={MovieDetailScreen}
      options={{
        headerLeftContainerStyle: {
          marginTop: 30,
          marginLeft: 30,
        },
        headerRightContainerStyle: {
          marginTop: 30,
          marginRight: 30,
        },

        gestureResponseDistance: { horizontal: width },
        headerTransparent: true,
        headerTitle: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default ExploreNavigator;
