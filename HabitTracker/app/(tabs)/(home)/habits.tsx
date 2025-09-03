import { Text, View, StyleSheet } from "react-native";
import { usePathname } from 'expo-router';
import Navbar from '../../../components/navbar';

export default function HabitsScreen() {
  const pathname = usePathname();
  return (
    <View style={styles.fullScreenContainer}>
      <View style={styles.container}>
        <Text>Habits</Text>
      </View>
      <Navbar activeRoute={pathname} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
