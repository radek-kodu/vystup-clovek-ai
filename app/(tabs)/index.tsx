import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const NavigationBars: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.bar} onPress={() => handleNavigation('/_materialy/m_index')}>
        <Text style={styles.barText}>Materiály</Text>
      </Pressable>
      <Pressable style={styles.bar} onPress={() => handleNavigation('/_nastroje/n_index')}>
        <Text style={styles.barText}>Nástroje</Text>
      </Pressable>
      <Pressable style={styles.bar} onPress={() => handleNavigation('/page3')}>
        <Text style={styles.barText}>Go to Page 3</Text>
      </Pressable>
    </View>
  );
};

export default NavigationBars;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  bar: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    // Optionally, add a shadow for iOS and elevation for Android:
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  barText: {
    fontSize: 16,
    color: '#333',
  },
});
