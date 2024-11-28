import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';

const PaymentScreen: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentOptionsTop = [
    { id: 'gpay',label:'', image:{uri:'https://www.themobileindian.com/wp-content/uploads/2021/06/google-pay.jpg'}},
    { id: 'phonepe',label:'', image:{uri:'https://www.tipsviralbuzz.xyz/wp-content/uploads/2023/11/phonepe-jobs.png'},},
    { id: 'paytm',label:'',image:{uri:'https://imgee.s3.amazonaws.com/imgee/b09674b9a6994ea583daab4fb8ffd0b3.png'},},
    { id: 'applepay', label:'',image:{uri:'https://contact-centres.com/wp-content/uploads/2016/10/apple.pay_.logo_.oct_.2016.jpg'},},
  ];

  const paymentOptionsBottom = [
    { id: 'creditcard', label: 'Add Credit or Debit card' },
    { id: 'netbanking', label: 'Net Banking' },
    { id: 'cod', label: 'Cash on Delivery' },
  ];

  const navigation = useNavigation();

  const handleProceed = () => {
    if (selectedMethod === 'creditcard') {
      navigation.navigate('AddCard');
    } else if (selectedMethod) {
      Alert.alert('Payment Method Selected', `You chose: ${selectedMethod}`);
    } else {
      Alert.alert('Error', 'Please select a payment method.');
    }
  };

  const renderPaymentOption = ({ item }: { item: { id: string; label: string;image:any } }) => (
    <TouchableOpacity
      style={[
        styles.option,
        selectedMethod === item.id && styles.selectedOption,
      ]}
      onPress={() => setSelectedMethod(item.id)}
    >
      <Image source={item.image} style={{height:35,width:35,resizeMode:'contain'}}></Image>
      <View style={styles.textContainer}>
      <Text style={styles.optionText}>{item.label}</Text>
    </View>
      {/* Radio Button */}
      <View style={[styles.radio, selectedMethod === item.id && styles.radioSelected]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ padding: 20, flex: 1 }}>
        <Text style={styles.subHeader}>Select your payment method</Text>

        {/* Top Payment Options */}
        <FlatList
          data={paymentOptionsTop}
          keyExtractor={(item) => item.id}
          renderItem={renderPaymentOption}
          contentContainerStyle={styles.listContainer}
        />

        {/* Separator */}
        <View style={styles.separator}>
          <Text style={styles.separatorText}>Or</Text>
        </View>

        {/* Bottom Payment Options */}
        <FlatList
          data={paymentOptionsBottom}
          keyExtractor={(item) => item.id}
          renderItem={renderPaymentOption}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      {/* Proceed Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
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
  subHeader: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    fontWeight:'900'
  },
  listContainer: {
    paddingBottom: 10,
    marginBottom:0
  },
  option: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent:'space-between',
  },
  selectedOption: {
    borderColor: '#5a3e36',
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'center', 
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left', 
    fontWeight:'900'
  },
  radio: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    alignSelf:'center'
  },
  radioSelected: {
    borderColor: '#5a3e36',
    backgroundColor: '#5a3e36',
  },
  separator: {
    marginVertical: 15,
    alignItems: 'center',
  },
  separatorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f0f0f',
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

export default PaymentScreen;
