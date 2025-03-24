import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ title: 'Bus Details', headerStyle: { backgroundColor: "#1a73e8" }, headerTintColor: "#FFFFFF" }} />
    </Stack>
  );
}