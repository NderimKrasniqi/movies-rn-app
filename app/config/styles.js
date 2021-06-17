import { Platform, Dimensions } from 'react-native';
import colors from './colors';
const { width } = Dimensions.get('screen');
export default {
  dimension: {
    width: width / 2 - 50,
  },
  colors,
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
