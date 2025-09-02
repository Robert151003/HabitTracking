import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, Button } from "react-native";
import { ComponentStyles } from '../../constants/ComponentStyles';
import { storeUsername, getUsername } from "../../utils/localStorage";

export default function ProfileScreen() {
  const [userName, setUserName] = useState<string | null>(null);
  const [inputName, setInputName] = useState<string>('');

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await getUsername();
      if (storedUsername) {
        setUserName(storedUsername);
        setInputName(storedUsername);
      }
    };
    fetchUsername();
  }, []);

  const handleSaveName = async () => {
    await storeUsername(inputName);
    setUserName(inputName);
  };

  return (
    <View style={ComponentStyles.container}>
      <Text style={ComponentStyles.title}>Profile</Text>
      <Image source={require('../../assets/images/tempImage.png')} style={ComponentStyles.image} />
      {userName && <Text style={{ marginTop: 20 }}>Hello, {userName}!</Text>}
      <TextInput
        style={ComponentStyles.input}
        placeholder="Enter your name"
        value={inputName}
        onChangeText={setInputName}
      />
      <Button title="Save Name" onPress={handleSaveName} />
    </View>
  );
}

