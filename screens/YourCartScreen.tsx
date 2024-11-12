import React ,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import {Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
const cartData = [
  {
    id: '1',
    name: 'Egg White liquid',
    size: '250 ml',
    rating: 4.5,
    discount: '-10%',
    originalPrice: 100,
    discountedPrice: 90,
    image: require('../assets/images/cat2.png'),
    quantity: 1,
  },
  {
    id: '2',
    name: 'Egg White liquid',
    size: '250 ml',
    rating: 4.5,
    discount: '-10%',
    originalPrice: 100,
    discountedPrice: 90,
    image: require('../assets/images/cat2.png'),
    quantity: 1,
  },
];

const YourCartScreen = () => {

    const navigation=useNavigation();

    const [cartItems, setCartItems] = useState(
        cartData.map(item => ({ ...item, quantity: 1 })) // Assign initial quantity to each item
      );
    
      // Function to handle quantity change based on item id
      const handleQuantityChange = (id: string, type: 'increase' | 'decrease') => {
        setCartItems(prevItems =>
          prevItems.map(item => {
            if (item.id === id) {
              // Adjust quantity based on action type (increase or decrease)
              const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
              // Ensure quantity doesn’t go below 1
              return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity };
            }
            return item;
          })
        );
      };                                

  return (
    <View style={{flex:1}}>
    <View style={styles.container}>
{/* Cart Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemSize}>{item.size}</Text>
              <Text style={styles.itemRating}>⭐ {item.rating}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
                <Text style={styles.discountText}>{item.discount}</Text>
              </View>
              <Text style={styles.freeDelivery}>Free delivery</Text>
              <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',gap:5}}>
              <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'decrease')}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'increase')}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{backgroundColor:'#8b451380',height:25,width:25,alignContent:'center',borderRadius:5,marginTop:9}}>
                  <Text style={styles.deleteButton}></Text>
                </TouchableOpacity>
                </View>
            </View>
          </View>
        )}
      />
      <View style={{borderWidth: 2,borderColor: '#ddd',flexDirection: 'row',borderRadius: 10,height: 50,paddingHorizontal: 15,alignItems: 'center',justifyContent: 'space-between'}}>
  <Text style={{fontWeight: '900',color: '#0f0f0f'}}>Add More Items</Text>

  <TouchableOpacity style={{backgroundColor: '#8b415380',borderRadius: 15,height: 30,width: 30,alignItems: 'center',justifyContent: 'center'}}>
    <Text style={{color: '#8b4153',fontSize: 20 }}>+</Text>
  </TouchableOpacity>
</View>


      {/* Order Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Price (2 Items):</Text><Text>₹200.00</Text>
        <Text style={styles.summaryText}>Discount:</Text>        <Text>-₹20.00</Text>
        <Text style={styles.summaryText}>Delivery Charges:</Text><Text> ₹40 Free Delivery</Text>
        <Text style={styles.summaryText}>Taxes:</Text>           <Text> ₹0.00</Text>
        <Text style={styles.totalAmount}>Total Amount:</Text>    <Text> ₹180.00</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={()=>{navigation.navigate('Address')}}>
        <Text style={styles.checkoutButtonText}>Check Out</Text>
      </TouchableOpacity>
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
    marginBottom:90
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth:2,
    borderColor:'#ddd', 
  },
  itemImage: {
    width: 120,
    height:'auto',
    resizeMode: 'contain',
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
    color:'#0f0f0f'
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#0f0f0f'
  },
  itemSize: {
    fontSize: 12,
    color: '#0f0f0f',
    fontWeight:'900'
  },
  itemRating: {
    fontSize: 12,
    color: '#0f0f0f',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 17,
    color: '#0f0f0f',
    fontWeight:'900'
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  originalPrice: {
    fontSize: 15,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  freeDelivery: {
    fontSize: 12,
    color: '#0f0f0f',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignSelf:'flex-end',
    marginTop: 10,
    borderWidth:1,
    borderColor:'#ddd',
    justifyContent:'space-evenly',
    borderRadius:7
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 8,
    color: '#333',
    borderStartWidth:2,
  },
  quantityText: {
    fontSize: 15,
    color:'#8b4513',
    backgroundColor:'#8b451380',
    width:30,
    fontWeight:'900',
    textAlign:'center',
    alignContent:'center'
  },
  deleteButton: {
    fontSize: 18,
    color: '#8b451380',
    height:10,
    width:10,
  },
  summaryContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  summaryText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#8b4513',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default YourCartScreen;
