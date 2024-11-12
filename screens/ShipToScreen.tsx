import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import Footer from '../components/Footer';

const addresses = [
  {
    id: '1',
    name: 'Guna M',
    address: '2/187, Gandhi 2nd street, Salem bypass, Krishnagiri, Tamilnadu, 635 122.',
    phone: '+91 1234567890',
  },
  {
    id: '2',
    name: 'Guna M',
    address: '2/187, Gandhi 2nd street, Salem bypass, Krishnagiri, Tamilnadu, 635 122.',
    phone: '+91 1234567890',
  },
  // Add more addresses if needed
];

const AddressScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleEdit = (id: string) => {
    console.log(`Edit address with id: ${id}`);
    // Logic for editing address
  };

  const handleDelete = (id: string) => {
    console.log(`Delete address with id: ${id}`);
    // Logic for deleting address
  };

  const handleSelectAddress = (id: string) => {
    setSelectedAddress(id);
  };

  return (
    <View style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.header}>Ship to</Text>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.addressCard}>
            <TouchableOpacity onPress={() => handleSelectAddress(item.id)}>
              <Text style={styles.addressName}>
                <Text style={styles.radioButton}>
                  {selectedAddress === item.id ? '🔴' : '⚪'}
                </Text>{' '}
                {item.name}
              </Text>
            </TouchableOpacity>
            <Text style={styles.addressText}>{item.address}</Text>
            <Text style={styles.phoneText}>{item.phone}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                {/* <Icon name="delete" size={20} color="#8b4513" /> */}
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#8b4513" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="category" size={24} color="#8b4513" />
          <Text style={styles.navText}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="shopping-cart" size={24} color="#8b4513" />
          <Text style={styles.navText}>Your Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#8b4513" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
      </View>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginBottom:85
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8b4513',
    marginBottom: 10,
  },
  addressCard: {
    borderWidth: 1,
    borderColor: '#8b4513',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  radioButton: {
    fontSize: 16,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  phoneText: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#8b4513',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    width:70,
    alignItems:'center'
  },
  deleteButton: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#f5e0d8',
    width:35
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#8b4513',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5e0d8',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#8b4513',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#8b4513',
    marginTop: 2,
  },
});

export default AddressScreen;
