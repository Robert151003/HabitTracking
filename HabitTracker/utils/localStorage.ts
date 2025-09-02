import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_NAME_KEY = 'user_name';
const LONGEST_STREAK_KEY = 'longest_streak';
const CURRENT_STREAK_KEY = 'current_streak';

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
        return value;
      }
    } catch (e) {
      console.log(e);
    }
};


export const updateLongestStreak = async(value : number) => {
    try{
        await AsyncStorage.setItem(LONGEST_STREAK_KEY, value.toString())
    }
    catch(e){
        console.log(e)
    }
};

export const getLongestStreak = async () => {
    try {
      const value = await AsyncStorage.getItem(LONGEST_STREAK_KEY);
      if (value !== null) {
        return parseInt(value, 10);
      }
    } catch (e) {
      console.log(e);
    }
    return 0;
};

export const updateCurrentStreak = async(value : number) => {
    try{
        await AsyncStorage.setItem(CURRENT_STREAK_KEY, value.toString())
    }
    catch(e){
        console.log(e)
    }
};

export const getCurrentStreak = async () => {
    try {
      const value = await AsyncStorage.getItem(CURRENT_STREAK_KEY);
      if (value !== null) {
        return parseInt(value, 10);
      }
    } catch (e) {
      console.log(e);
    }
    return 0;
};

export const resetData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.log(e);
    }
};