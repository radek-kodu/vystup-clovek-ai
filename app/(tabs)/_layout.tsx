import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function TabLayout() {
    return (
        
        <Tabs
            screenOptions={{
            headerStyle: { backgroundColor: '#294532' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' },

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
            headerLeft: () => (
                <Ionicons
                  name="arrow-undo-sharp"
                  size={40}
                  color="white"
                  style={{ marginLeft: 10 }}
                  onPress={() => {/* handle back press */}}
                />
              ),
              headerRight: () => (
                <Ionicons
                  name="search"
                  size={40}
                  color="white"
                  style={{ marginRight: 10 }}
                  onPress={() => {/* handle search press */}}
                />
              ),
              
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
                }} />
            <Tabs.Screen 
            name="nastaveni" 
            options={{ 
                headerTitle: 'NASTAVENÍ',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle-outline" size={50} color={color} />
                  ),
                }} />
        </Tabs>
    );
}