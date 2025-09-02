import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ComponentStyles } from '../../../constants/ComponentStyles';

export default function HomeScreen() {
  return (
    <View style={ComponentStyles.container}>
      <Text style={ComponentStyles.title}>Home</Text>
      <Link href="/(tabs)/(home)/habits">Habits</Link>
      <Link href={{ pathname: "/(tabs)/(home)/habits-details/[id]", params: { id: '1' } }}>
        Habit Details (ID 1)
      </Link>
      <Link href="/(tabs)/profile">Profile</Link>
    </View>
  );
}
