import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SharedHeader = () => {
  return (
    <View
      style={{
        backgroundColor: '#294532',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
      }}
    >
      <Ionicons
        name="arrow-undo-sharp"
        size={40}
        color="white"
        onPress={() => {
          // handle back press (e.g., using navigation)
        }}
      />
      {/* Center Title could be a Text component */}
      <Ionicons
        name="search"
        size={40}
        color="white"
        onPress={() => {
          // handle search press
        }}
      />
    </View>
  );
};
