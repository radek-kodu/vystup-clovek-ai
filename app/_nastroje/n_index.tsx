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
      <Pressable style={styles.bar} onPress={() => handleNavigation('/_nastroje/pokosova_pila')}>
        <Text style={styles.barText}>Pokosová pila</Text>
      </Pressable>
    </View>
  );
};

export default NavigationBars;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: '#baa89b',
    flex: 1,
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