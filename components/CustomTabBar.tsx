import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';

export const CustomTabBar = () => {
  const router = useRouter();
  const segments = useSegments();

  const isActive = (segment: string) => segments.includes(segment);

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => router.push('/(tabs)/index')}
      >
        <Ionicons
          name="book-outline"
          size={50}
          color={isActive('index') ? 'black' : 'white'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => router.push('/(tabs)/oblibene')}
      >
        <Ionicons
          name="heart-outline"
          size={50}
          color={isActive('oblibene') ? 'black' : 'white'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => router.push('/(tabs)/nastaveni')}
      >
        <Ionicons
          name="person-circle-outline"
          size={50}
          color={isActive('nastaveni') ? 'black' : 'white'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#294532',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});
