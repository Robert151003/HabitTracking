import { Stack } from 'expo-router';
import { defaultHeaderOptions } from '../../constants/headerDetails';

export default function RootLayout() {
  return (
    <Stack screenOptions={defaultHeaderOptions}>
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}

