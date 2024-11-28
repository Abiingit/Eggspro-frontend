import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SuccessScreen: React.FC = ({ navigation }: any) => {
  const handleBackToOrder = () => {
    navigation.navigate('Dashboard'); 
  };

  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <Text style={styles.icon}>✔</Text>
        </View>
      </View>

      {/* Success Message */}
      <Text style={styles.title}>Success</Text>
      <Text style={styles.subtitle}>thank you for Orders</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleBackToOrder}>
        <Text style={styles.buttonText}>Back To Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  iconBackground: {
    width: 80,
    height: 80,
    backgroundColor: '#6c4f47', // Brown background color
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e2e5f', 
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#b2b2b2', 
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6c4f47',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SuccessScreen;
