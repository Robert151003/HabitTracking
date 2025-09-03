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

// utils/localStorage.ts
export const getCompletedHabitsByDate = async (): Promise<{ [key: string]: number }> => {
  // Example: return object where keys are date strings and values are 0-1
  return {
    '2025-08-29': 0.75,
    '2025-08-30': 1,
    '2025-08-31': 0.4,
    '2025-09-01': 0.5,
    '2025-09-02': 1,
    '2025-09-03': 0.8,
  };
};
