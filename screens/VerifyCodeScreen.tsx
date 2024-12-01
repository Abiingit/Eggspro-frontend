import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground,Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FloatingLabelInput from './FloatingLabelInput';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const VerifyCodeScreen: React.FC<Props> = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if(code){
    navigation.navigate('SetPassword'); }
    else{
      Alert.alert('Please enter the code.');
    }
  };

  const handleResendCode = () => {
    Alert.alert('Code resent!'); // Show alert for resending the code
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
          <Text style={styles.backText}>{'< Back to Login'}</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Verify Code</Text>
        <Text style={styles.description}>Enter the code sent to your email.</Text>

        <FloatingLabelInput
          label="Code"
          value={code}
          onChangeText={setCode}
          placeholder="Enter Code"
          secureTextEntry
        />

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
         <Text style={{color:"#000"}}>Didn't Receive a code?</Text>
        <Text style={styles.resendText} onPress={handleResendCode}>
          Resend
        </Text>
      </View>
    </View>
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
    color: '#5a3e36',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 25,
    marginBottom: 10,
    color: "#5a3e36",
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
  verifyButton: {
    backgroundColor: '#5a3e36',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
  },
  resendText: {
    color: '#5a3e36',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default VerifyCodeScreen;
