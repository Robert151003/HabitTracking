import { Text, View, StyleSheet } from "react-native";

export default function HabitsScreen() {
  return (
    <View style={styles.container}>
      <Text>Habits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
