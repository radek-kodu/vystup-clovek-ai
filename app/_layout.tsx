import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#294532' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: () => (
          <Ionicons
            name="arrow-undo-sharp"
            size={40}
            color="white"
            style={{ marginLeft: 10 }}
            onPress={() => {
              // handle back press
            }}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="search"
            size={40}
            color="white"
            style={{ marginRight: 10 }}
            onPress={() => {
              // handle search press
            }}
          />
        ),
      }}
    >
      {/* All your routes (including the ones in (tabs) and other folders) will use this layout */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="materialy/m_index" />
      <Stack.Screen name="nastroje/n_index" />
      {/* Add more screens as needed */}
    </Stack>
  );
}
