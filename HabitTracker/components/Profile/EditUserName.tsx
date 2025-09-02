
import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { ComponentStyles } from '../../constants/ComponentStyles';
import { FontAwesome } from '@expo/vector-icons';

interface EditUserNameProps {
  userName: string | null;
  inputName: string;
  setInputName: (name: string) => void;
  handleSaveName: () => void;
  isEditingName: boolean;
  setIsEditingName: (isEditing: boolean) => void;
}

export default function EditUserName({ userName, inputName, setInputName, handleSaveName, isEditingName, setIsEditingName }: EditUserNameProps) {
  return (
    <View>
      {isEditingName ? (
        <View style={ComponentStyles.inputContainer}>
          <TextInput
            style={ComponentStyles.input}
            placeholder="Enter your name"
            placeholderTextColor="#A9A9A9"
            value={inputName}
            onChangeText={setInputName}
          />
          <View style={ComponentStyles.buttonRow}>
            <View style={ComponentStyles.buttonWrapper}>
              <Button title="Save Name" onPress={handleSaveName} />
            </View>
            <View style={ComponentStyles.buttonWrapper}>
              <Button title="Cancel" onPress={() => setIsEditingName(false)} color="gray" />
            </View>
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          {userName && <Text style={[ComponentStyles.centeredText, { fontSize: 18, marginRight: 10 }]}>{userName}</Text>}
          <TouchableOpacity onPress={() => setIsEditingName(true)}>
            <FontAwesome name="pencil" size={20} color="#f4511e" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
