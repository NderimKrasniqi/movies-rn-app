import { Platform, Dimensions } from 'react-native';

import colors from './colors';
const { height, width } = Dimensions.get('screen');
export default {
  dimension: {
    width: width / 2 - 50,
  },
  colors,
  text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    width: '100%',
  },
};
