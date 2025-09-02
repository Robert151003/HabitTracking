import { useLocalSearchParams } from 'expo-router';
import { Text, View } from "react-native";
import { ComponentStyles } from '../../../../constants/ComponentStyles';

export default function DetailsScreen() {
    const { id } = useLocalSearchParams();

    // Temporary habit data for testing
    const temporaryHabits = [
        { id: '1', name: 'Drink Water', description: 'Drink 8 glasses of water daily.' },
        { id: '2', name: 'Exercise', description: '30 minutes of exercise every day.' },
        { id: '3', name: 'Read Book', description: 'Read for 15 minutes before bed.' },
    ];

    const habit = temporaryHabits.find(h => h.id === id);

    return (
        <View style={ComponentStyles.container}>
            {habit ? (
                <>
                    <Text style={ComponentStyles.title}>{habit.name}</Text>
                    <Text>{habit.description}</Text>
                </>
            ) : (
                <Text>Habit not found.</Text>
            )}
        </View>
  );
}
