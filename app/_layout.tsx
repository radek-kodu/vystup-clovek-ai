import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import { SharedHeader } from '../components/SharedHeader';
import { CustomTabBar } from '../components/CustomTabBar';

export default function GlobalLayout() {
  return (
    <View style={styles.container}>
      <SharedHeader />
      <View style={styles.content}>
        <Slot />
      </View>
      <CustomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
