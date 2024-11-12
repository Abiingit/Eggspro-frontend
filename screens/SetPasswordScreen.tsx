import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FloatingLabelInput from './FloatingLabelInput';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const SetPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSetPassword = () => {
    if (password === confirmPassword && password !== '') {
      Alert.alert('Success', 'Password has been set successfully');
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', 'Passwords do not match. Please try again.');
    }
  };

  return (
    <ImageBackground
    source={{ uri: 'https://thumbs.dreamstime.com/b/chicken-brown-eggs-black-crumpled-paper-50186405.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Set Password</Text>

        <FloatingLabelInput
          label='Create Password'
          placeholder="Create Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <FloatingLabelInput
          label='Re-enter Password'
          placeholder="Re-enter Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.setPasswordButton} onPress={handleSetPassword}>
          <Text style={styles.setPasswordText}>Set Password</Text>
        </TouchableOpacity>
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
    height: 'auto',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  header: {
    fontSize: 25,
    marginBottom: 20,
    marginLeft: 5,
    color: "#8B4513",
    fontWeight: '900',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  setPasswordButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  setPasswordText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SetPasswordScreen;
