import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground,Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FloatingLabelInput from './FloatingLabelInput';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isAgreed, setAgreed] = useState<boolean>(false); // Checkbox state

  const handleCreateAccount = () => {
    if (username && email && password && confirmPassword && isAgreed) {
      Alert.alert('Account Created Successfully!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Please fill in all fields and agree to the terms.');
    }
  };

  return (
    <ImageBackground
    source={{ uri: 'https://thumbs.dreamstime.com/b/chicken-brown-eggs-black-crumpled-paper-50186405.jpg' }}
    style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Signup</Text>
        
        <FloatingLabelInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />
        <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <FloatingLabelInput
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <FloatingLabelInput
          label="Confirm Password"
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isAgreed}
            onValueChange={setAgreed}
            tintColors={{ true: '#5a3e36', false: '#000' }} // Change color based on selection
          />
          <Text style={styles.agreeText}>I agree to all terms and privacy policies</Text>
        </View>

        <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
          <Text style={styles.createText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?
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
  header: {
    fontSize: 25,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 'auto',
    color: "#5a3e36",
    fontWeight: '900',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  agreeText: {
    marginLeft: 8,
    color: '#000',
  },
  createButton: {
    backgroundColor: '#5a3e36',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  createText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    color: "#000",
  },
  loginText: {
    color: '#5a3e36',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
