import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView
} from 'react-native';



const AddCardScreen: React.FC = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiryMonth, setCardExpiryMonth] = useState('');
  const [cardExpiryYear, setCardExpiryYear] = useState('');
  const [cardSecurityCode, setCardSecurityCode] = useState('');
  
  const navigation=useNavigation();
  const handleAddCard = () => {
    if (
      !cardName ||
      !cardNumber ||
      !cardExpiryMonth ||
      !cardExpiryYear ||
      !cardSecurityCode
    ) {
      Alert.alert('Error', 'Please fill out all fields.');
    } else {
      Alert.alert('Success', 'Card added successfully!');
      navigation.navigate('Success');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{padding:16,flex:1}}>
      {/* Card Details Section */}
      <Text style={styles.subHeader}>Card Details</Text>
      <View style={styles.cardIconsContainer}>
        <Image
          style={styles.cardIcon}
          source={{uri:'https://bookings.grgamelodge.co.za/pub/grgamelodge/img/payment-amex.png'}}
        />
        <Image
          style={styles.cardIcon}
          source={{ uri: 'https://assets-global.website-files.com/6152dfaed2ce58d94ef37b88/63c7c37883089431217c4940_Visa_2021.svg-2-p-1080.png' }}
        />
        <Image
          style={styles.cardIcon}
          source={{ uri: 'https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png' }}
        />
      </View>

      {/* Input Fields */}
      <Text style={styles.label}>Name on Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter full name"
        placeholderTextColor={'#999'}
        value={cardName}
        onChangeText={setCardName}
      />

      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="0000 0000 0000 0000"
        placeholderTextColor={'#999'}
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <Text style={styles.label}>Card Expiration</Text>
      <View style={styles.expiryContainer}>
        <TextInput
          style={[styles.input, styles.expiryInput]}
          placeholder="Month"
          placeholderTextColor={'#999'}
          keyboardType="numeric"
          value={cardExpiryMonth}
          onChangeText={setCardExpiryMonth}
        />
        <TextInput
          style={[styles.input, styles.expiryInput]}
          placeholder="Year"
          placeholderTextColor={'#999'}
          keyboardType="numeric"
          value={cardExpiryYear}
          onChangeText={setCardExpiryYear}
        />
      </View>

      <Text style={styles.label}>Card Security Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter code"
        placeholderTextColor={'#999'}
        keyboardType="numeric"
        value={cardSecurityCode}
        onChangeText={setCardSecurityCode}
      />
       </ScrollView>
      {/* Add Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.proceedButton} onPress={handleAddCard}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5a3e36',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap:10
  },
  cardIcon: {
    width: 70,
    height: 40,
    resizeMode:'contain',
    borderWidth:2,
    borderColor:'#ddd',
    borderRadius:7
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    color:'#0f0f0f'
  },
  expiryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  footer: {
    backgroundColor: '#fff',
    elevation: 10,
    alignItems: 'flex-end',
    height: 70,
    padding: 16,
  },
  proceedButton: {
    backgroundColor: '#5a3e36',
    borderRadius: 5,
    alignItems: 'center',
    width: 150,
    height: 40,
    justifyContent: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddCardScreen;
