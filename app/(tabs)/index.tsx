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
    </View>
  );
};

export default NavigationBars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#baa89b',
  },
  bar: {
    backgroundColor: '#523a28',
    paddingVertical: 15,
    marginBottom: 10,
    shadowColor: '#000',
  },
  barText: {
    paddingLeft: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
