import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:"#8b4513",
  },
});

export default WelcomeScreen;
