import React from 'react'
import { ComponentStyles } from '../../constants/ComponentStyles';
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";


export default function EditProfileImage(){
    return(
        <Image style={ComponentStyles.image} source={require("../../assets/images/tempImage.png")}/>
    );
}
