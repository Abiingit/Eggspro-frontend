import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const EditOrAddNewAddress = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    city: '',
    state: '',
    postalCode: '',
    contactNumber: '',
    alternateContact: '',
  });
 
  const navigation=useNavigation();
  
  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSaveAddress = () => {
    // Add save address logic here
    console.log('Form Submitted', form);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Use My Location Button */}
        <TouchableOpacity style={styles.locationButton}>
            <Image source={require('../assets/images/loc.png')} style={{width:25,height:25,tintColor:'#0f0f0f'}}></Image>
          <Text style={styles.locationButtonText}> Use my location</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <Text style={styles.addNewText}>Add New</Text>
        {/* Form */}
        <View style={{paddingHorizontal:10}}>
        <Text style={styles.head}>First name<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="First name *"
          value={form.firstName}
          onChangeText={(text) => handleInputChange('firstName', text)}
        />
        <Text style={styles.head}>Last name<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Last name *"
          value={form.lastName}
          onChangeText={(text) => handleInputChange('lastName', text)}
        />
        <Text style={styles.head}>Address Line 1<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Address line 1 *"
          value={form.addressLine1}
          onChangeText={(text) => handleInputChange('addressLine1', text)}
        />
        <Text style={styles.head}>Address Line 2<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Address Line 2 *"
          value={form.addressLine2}
          onChangeText={(text) => handleInputChange('addressLine2', text)}
        />
        <Text style={styles.head}>Address Line 3<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Address Line 3"
          value={form.addressLine3}
          onChangeText={(text) => handleInputChange('addressLine3', text)}
        />
        <Text style={styles.head}>Town/City<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Town/City *"
          value={form.city}
          onChangeText={(text) => handleInputChange('city', text)}
        />
        <Text style={styles.head}>Region/State<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Region/State *"
          value={form.state}
          onChangeText={(text) => handleInputChange('state', text)}
        />
        <Text style={styles.head}>Postal/Zip Code<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Postal/Zip Code *"
          value={form.postalCode}
          onChangeText={(text) => handleInputChange('postalCode', text)}
          keyboardType="numeric"
        />
        <Text style={styles.head}>Contact Number<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Contact Number *"
          value={form.contactNumber}
          onChangeText={(text) => handleInputChange('contactNumber', text)}
          keyboardType="phone-pad"
        />
        <Text style={styles.head}>Alternate Contact Number<Text style={{color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Alternate Contact Number *"
          value={form.alternateContact}
          onChangeText={(text) => handleInputChange('alternateContact', text)}
          keyboardType="phone-pad"
        />
        </View>
        </ScrollView>
        {/* Save Address Button */}
        <View style={styles.footer}>
    <TouchableOpacity style={styles.addressButton} onPress={() =>{navigation.navigate('Payment')}
    }><Text style={styles.addressButtonText}>Save Address</Text></TouchableOpacity>
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingBottom: 20,
    padding: 16,
  },
  locationButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    marginHorizontal:10
  },
  locationButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight:'600'
  },
  orText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
    fontWeight:'900'
  },
  addNewText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f0f0f',
    marginBottom: 16,
  },
  head:{
   color:'#0f0f0f',
   fontWeight:'900',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    color:'#000',
    height:50
  },
  footer:{
    backgroundColor:'#fff',
    elevation:10,
    alignItems:'flex-end',
    height:70,
    padding:16
    },
  addressButton: {
      backgroundColor: '#5a3e36',
      borderRadius: 5,
      alignItems: 'center',
      width:150,
      height:40,
      padding:9
    },
  addressButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
});

export default EditOrAddNewAddress;
