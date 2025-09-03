
import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
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
            <TouchableOpacity style={[ComponentStyles.buttonWrapper, { backgroundColor: '#32CD32' }]} onPress={handleSaveName}>
              <Text>Save Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ComponentStyles.buttonWrapper, { backgroundColor: '#A9A9A9' }]} onPress={() => setIsEditingName(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
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
