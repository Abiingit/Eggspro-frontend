import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground,Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FloatingLabelInput from './FloatingLabelInput';
import CheckBox from '@react-native-community/checkbox'; // Import the checkbox

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSelected, setSelection] = useState<boolean>(false); // Checkbox state

  const handleLogin = () => {
    if (email === 'abi' && password === '123') {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://thumbs.dreamstime.com/b/chicken-brown-eggs-black-crumpled-paper-50186405.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.headertext}>Login to access your Hospital account</Text>
        
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

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{ true: '#8B4513', false: '#000' }} // Change color based on selection
          />
          <Text style={styles.rememberMeText}>Remember Me</Text>
<Text style={styles.forgotPasswordText} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>        
</View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account?
          <Text style={styles.signUpText} onPress={() => navigation.navigate('Signup')}> Sign up</Text>
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
    marginBottom: 0,
    marginLeft: 5,
    marginRight: 'auto',
    color: "#8B4513",
    fontWeight: '900'
  },
  headertext: {
    fontSize: 15,
    marginLeft: 5,
    marginRight: 'auto',
    marginBottom: 40,
    color: "grey",
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
    marginLeft:0,
    marginRight:'auto',
   },
  rememberMeText: {
    marginLeft:0,
    color: '#000',
  },
  forgotPasswordText: {
    marginLeft:80,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    color: "#000"
  },
  signUpText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
});

export default LoginScreen;