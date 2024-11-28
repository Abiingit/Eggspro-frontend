import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity ,ScrollView,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

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
];
const ShipToScreen = () => {
  const [selectedAddressId, setSelectedAddressId] = useState(null); // Track selected address
  const [useCurrentLocation, setUseCurrentLocation] = useState(false); // Track if current location is selected
  
  const navigation=useNavigation();

  const handleAddressSelect = (id) => {
    setSelectedAddressId(id);
    setUseCurrentLocation(false); // Deselect "Use Current Location" when an address is selected
  };

  const handleUseCurrentLocation = () => {
    setUseCurrentLocation(true);
    setSelectedAddressId(null); // Deselect all addresses when "Use Current Location" is selected
  };

  const AddressItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.addressContainer,
        selectedAddressId === item.id && styles.selectedContainer, // Highlight selected address
      ]}
      onPress={() => handleAddressSelect(item.id)}
    >
      <View style={styles.radio}>
        <Text style={styles.radioText}>
          {selectedAddressId === item.id ? '●' : '○'}
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} >
      
      <ScrollView style={{paddingHorizontal:16}}>
        <View>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AddressItem item={item} />}
      />
      </View>
      <TouchableOpacity
        style={[
          styles.currentLocation,
          useCurrentLocation && styles.selectedContainer,
        ]}
        onPress={handleUseCurrentLocation}
      >
        <Text style={styles.radioText}>{useCurrentLocation ? '●' : '○'}</Text>
        <Image source={require('../assets/images/loc.png')} style={{height:25,width:25,marginHorizontal:10}}></Image>
        <Text style={styles.locationText}>Use Current Location</Text>
      </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
    <TouchableOpacity style={styles.addressButton} onPress={() =>{navigation.navigate('AddressDetails')}
    }><Text style={styles.addressButtonText}>Save Address</Text></TouchableOpacity>
  </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  addText: { fontSize: 30, color: '#5F3E45' },
  addressContainer: {
    borderWidth: 1,
    borderColor: '#B0898F',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  selectedContainer: {
    borderColor: '#5F3E45',
  },
  radio: { marginRight: 8 },
  radioText: { fontSize: 18, color: '#5F3E45' },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#5F3E45' },
  address: { fontSize: 14, color: '#5F3E45', marginVertical: 8 },
  phone: { fontSize: 14, color: '#5F3E45' },
  buttonRow: { flexDirection: 'row', marginTop: 10 },
  editButton: {
    backgroundColor: '#5F3E45',
    borderRadius: 4,
    marginRight: 8,
    width:80,
    alignItems:'center',
    justifyContent:'center',
    height:30
  },
  editButtonText: { color: '#fff', fontSize: 14,fontWeight:'900' },
  deleteButton: {
    backgroundColor: '#E0C8C9',
    borderRadius: 4,
    width:30,
    alignItems:'center',
    justifyContent:'center',
    height:30
  },
  deleteButtonText: { fontSize: 14, color: '#5F3E45' },
  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0898F',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  locationText: { fontSize: 16, color: '#5F3E45', marginLeft: 8 },
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

export default ShipToScreen;
