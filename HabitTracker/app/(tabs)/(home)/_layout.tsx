import { Stack } from 'expo-router';
import { defaultHeaderOptions } from '../../../constants/headerDetails';

export default function RootLayout() {
  return (
    <Stack screenOptions={defaultHeaderOptions}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="habits" options={{ title: "Habits" }} />
      <Stack.Screen name="habits-details/[id]" options={{ title: "Habit Details" }} />
    </Stack>
  );
}
