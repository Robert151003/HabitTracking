import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { ComponentStyles } from '../../constants/ComponentStyles';
import { storeUsername, getUsername, getCurrentStreak, getLongestStreak, resetData } from "../../utils/localStorage";
import { FontAwesome } from '@expo/vector-icons';
import EditUserName from '../../components/Profile/EditUserName';
import EditProfileImage from '@/components/Profile/EditProfileImage';
import InformationCard from '../../components/Profile/InformationCard';

export default function ProfileScreen() {
  const [userName, setUserName] = useState<string | null>(null);
  const [inputName, setInputName] = useState<string>('');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [longestStreak, setLongestStreak] = useState<number>(0);

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await getUsername();
      if (storedUsername) {
        setUserName(storedUsername);
        setInputName(storedUsername);
      } else {
        setUserName("New User");
        setInputName("New User");
        await storeUsername("New User");
      }
    };
    fetchUsername();

    const fetchStreaks = async () => {
      const currentStreakValue = await getCurrentStreak();
      setCurrentStreak(currentStreakValue);
      const longestStreakValue = await getLongestStreak();
      setLongestStreak(longestStreakValue);
    }
    fetchStreaks();
  }, []);

  const handleResetData = async () => {
    Alert.alert(
      "Reset Data",
      "Are you sure you want to reset all data? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Reset",
          onPress: async () => {
            await resetData();
            setUserName("New User");
            setInputName("New User");
            setCurrentStreak(0);
            setLongestStreak(0);
            await storeUsername("New User");
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleSaveName = async () => {
    await storeUsername(inputName);
    setUserName(inputName);
    setIsEditingName(false);
  };

  return (
    <View style={ComponentStyles.container}>
      
      <View style={ComponentStyles.horizontalContainer}>
        <EditProfileImage/>

        <EditUserName
          userName={userName}
          inputName={inputName}
          setInputName={setInputName}
          handleSaveName={handleSaveName}
          isEditingName={isEditingName}
          setIsEditingName={setIsEditingName}
        />
      </View>

      <View style={ComponentStyles.horizontalContainer}>
        <InformationCard title="Current Streak" value={currentStreak} />
        <InformationCard title="Longest Streak" value={longestStreak} />
      </View>

      <TouchableOpacity style={ComponentStyles.resetButton} onPress={handleResetData}>
        <Text style={ComponentStyles.resetButtonText}>Reset All Data</Text>
      </TouchableOpacity>
        
    </View>
  );
}

