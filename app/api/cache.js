import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    console.log('SAVING', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('GET FAVORITES', e);
  }
};

export default {
  storeData,
  getData,
};
