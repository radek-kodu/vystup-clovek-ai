import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import { SharedHeader } from './SharedHeader';
import { CustomTabBar } from './CustomTabBar';

export const NavigationLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <SharedHeader />
      <View style={styles.content}>
        {children || <Slot />}
      </View>
      <CustomTabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
