import React from 'react';
import { View, Text } from 'react-native';
import { ComponentStyles } from '../../constants/ComponentStyles';

interface InformationCardProps {
  title: string;
  value: number;
}

export default function InformationCard({ title, value }: InformationCardProps) {
  return (
    <View style={ComponentStyles.cardContainer}>
      <Text style={ComponentStyles.cardTitle}>{title}</Text>
      <Text style={ComponentStyles.cardValue}>{value}</Text>
    </View>
  );
}
