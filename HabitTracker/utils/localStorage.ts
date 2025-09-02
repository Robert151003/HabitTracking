import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_NAME_KEY = 'user_name';

export const storeUsername = async (value: string) => {
    try {
        await AsyncStorage.setItem(USER_NAME_KEY, value);
    } catch (e) {
        console.log(e);
    }
};

export const getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem(USER_NAME_KEY);
      if (value !== null) {
        console.log(value);
        return value;
      }
    } catch (e) {
      console.log(e);
    }
};
