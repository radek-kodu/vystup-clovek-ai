import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SharedHeader } from '../../components/SharedHeader';

export default function TabLayout() {
  return (
    <>
      <SharedHeader />
      <Tabs
        screenOptions={{
            headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#294532',
            height: 60,
            paddingTop: 10,
          },
          tabBarItemStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: 'KUTILNA',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={50} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="oblibene"
          options={{
            headerTitle: 'OBLÍBENÉ',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={50} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="nastaveni"
          options={{
            headerTitle: 'NASTAVENÍ',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={50} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
