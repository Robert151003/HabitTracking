import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { ComponentStyles } from '../../constants/ComponentStyles';
import { storeUsername, getUsername, getCurrentStreak, getLongestStreak, resetData } from "../../utils/localStorage";
import Navbar from '../../components/navbar';
import EditUserName from '../../components/Profile/EditUserName';
import EditProfileImage from '../../components/Profile/EditProfileImage';
import InformationCard from '../../components/Profile/InformationCard';
import { usePathname } from 'expo-router';

export default function ProfileScreen() {
  const pathname = usePathname();
  const [userName, setUserName] = useState<string | null>(null);
  const [inputName, setInputName] = useState<string>('');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [longestStreak, setLongestStreak] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const storedUsername = await getUsername();
      setUserName(storedUsername || "New User");
      setInputName(storedUsername || "New User");

      const streak = await getCurrentStreak();
      const longest = await getLongestStreak();
      setCurrentStreak(streak);
      setLongestStreak(longest);
    }
    fetchData();
  }, []);

  const handleResetData = async () => {
    Alert.alert(
      "Reset Data",
      "Are you sure you want to reset all data? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Reset", style: "destructive", onPress: async () => {
          await resetData();
          setUserName("New User");
          setInputName("New User");
          setCurrentStreak(0);
          setLongestStreak(0);
          await storeUsername("New User");
        }}
      ]
    );
  };

  const handleSaveName = async () => {
    await storeUsername(inputName);
    setUserName(inputName);
    setIsEditingName(false);
  };

  return (
    <View style={ComponentStyles.fullScreenContainer}>
      <View style={ComponentStyles.container}>

        {/* Profile Info */}
        <View style={ComponentStyles.profileSection}>
          <EditProfileImage />
          <EditUserName
            userName={userName}
            inputName={inputName}
            setInputName={setInputName}
            handleSaveName={handleSaveName}
            isEditingName={isEditingName}
            setIsEditingName={setIsEditingName}
          />
        </View>
        <Text style={ComponentStyles.motivationalText}>Keep up your streak!</Text>

        {/* Stats Cards */}
        <View style={ComponentStyles.statsContainer}>
          <InformationCard title="Current Streak" value={currentStreak} />
          <InformationCard title="Longest Streak" value={longestStreak} />
        </View>

        {/* Actions */}
        <View style={ComponentStyles.actionsContainer}>
          <Text>Notification options</Text>
          <TouchableOpacity style={ComponentStyles.resetButton} onPress={handleResetData}>
            <Text style={ComponentStyles.resetButtonText}>Reset All Data</Text>
          </TouchableOpacity>
        </View>

      </View>
      <Navbar activeRoute={pathname} />
    </View>
  );
}

