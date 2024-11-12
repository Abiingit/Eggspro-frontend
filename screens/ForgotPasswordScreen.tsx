import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground,Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FloatingLabelInput from './FloatingLabelInput';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendLink = () => {
    if (email) {
      Alert.alert('Password reset link sent to your email!');
      navigation.navigate('VerifyCode'); // Navigate to the VerifyCode screen
    } else {
      Alert.alert('Please enter your email address.');
    }
  };

  return (
    <ImageBackground
    source={{ uri: 'https://thumbs.dreamstime.com/b/chicken-brown-eggs-black-crumpled-paper-50186405.jpg' }}
    style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
          <Text style={styles.backText}>{'< Back to Login'}</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Forgot your password?</Text>
        <Text style={styles.description}>Enter your email to receive a password reset link.</Text>

        
        <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSendLink}>
          <Text style={styles.sendText}>Send Reset Link</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Remembered your password?
          <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}> Login</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    margin: 25,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 25,
    marginBottom: 10,
    color: "#8B4513",
    fontWeight: '900',
  },
  description: {
    fontSize: 15,
    marginBottom: 20,
    color: "grey",
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    color:"#000"
  },
  sendButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    color: "#000",
  },
  loginText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
