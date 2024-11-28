import React ,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const YourCartScreen = () => {
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
  
  const additionalItems = [
    { id: '1', name: 'Premium Broiler Fresh Meat', price: '₹150', imageUrl: require('../assets/images/cat1.png'), },
    { id: '2', name: 'Premium Broiler Fresh Meat', price: '₹150', imageUrl: require('../assets/images/cat1.png'), },
    { id: '3', name: 'Premium Broiler Fresh Meat', price: '₹150', imageUrl: require('../assets/images/cat1.png'), },
    { id: '4', name: 'Premium Broiler Fresh Meat', price: '₹150', imageUrl: require('../assets/images/cat1.png'), },
    { id: '4', name: 'Premium Broiler Fresh Meat', price: '₹150', imageUrl: require('../assets/images/cat1.png'), },
    { id: '4', name: 'Premium Broiler Fresh Meat', price: '₹150', imageUrl: require('../assets/images/cat1.png'), },
  ];

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
      <ScrollView>
    <View style={styles.container}>
    {/* Cart Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemimage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemname}>{item.name}</Text>
              <Text style={styles.itemsize}>{item.size}</Text>
              <Text style={styles.itemrating}>{item.rating} ⭐ </Text>
              <View style={styles.pricecontainer}>
                <Text style={styles.discounttext}>{item.discount}</Text>
                <Text style={styles.originalprice}>₹{item.originalPrice}</Text>
              </View>
                <Text style={styles.discountedprice}>₹{item.discountedPrice}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.freedelivery}>Free delivery</Text>
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
              <TouchableOpacity style={{backgroundColor:'#5a3e3680',height:29,width:29,alignContent:'center',borderRadius:5}}>
                  <Text style={styles.deleteButtonText}></Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
          </View>
        )}
      />
  <View style={{borderWidth: 1.5,borderColor: '#ddd',flexDirection: 'row',borderRadius: 10,height: 50,paddingHorizontal: 15,alignItems: 'center',justifyContent: 'space-between'}}>
  <Text style={{fontWeight: '900',color:'#0f0f0f'}}>Add More Items</Text>

  <TouchableOpacity style={{backgroundColor: '#fff',borderRadius: 50,borderWidth:2,borderColor:'#8b4153',height: 25,width: 25,justifyContent:'center'}}>
    <Text style={{color: '#8b4153',fontSize: 30, lineHeight: 30,textAlign: 'center', }}>+</Text>
  </TouchableOpacity>
</View>

      {/* Complete Your Order Section */}
      <Text style={styles.sectionTitle}>Complete Your Order!!!</Text>
 <View style={styles.completeyourOrder}>
      <FlatList
        data={additionalItems}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.additionalItem}>
            <Image source={item.imageUrl} style={styles.itemImage} />
            <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
             <Image source={require('../assets/images/nonVeg.png')} style={{alignSelf:'center'}}></Image>
            <Text style={styles.itemName}>{item.name}</Text></View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      {/* Offers & Benefits Section */}
      <Text style={styles.sectionTitle}>Offers & Benefits</Text>
      <View style={styles.offer}>
        <Text style={styles.offerLabel}>Apply Coupon</Text>
        <TouchableOpacity style={{left:'70%',right:0,}}><Text style={{color:'#0f0f0f',fontSize:20}}>{'>'}</Text></TouchableOpacity>
      </View>
      {/* Offer & Benefits */}
      <Text style={styles.sectionTitle}>Offers & Benefits</Text>
      <View style={styles.OffernBenefits}>

      {/* Price and discount rows */}
      <View style={styles.row}>
        <Text style={styles.value}>Price (2 Items)</Text>
        <Text style={styles.value}>₹ 200.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>Discount</Text>
        <Text style={[styles.value, styles.discount]}>-₹ 20.00</Text>
      </View>

      {/* Delivery charges row */}
      <View style={styles.row}>
        <Text style={styles.value}>Delivery Charges</Text>
        <Text style={[styles.value, styles.freeDelivery]}><Text style={{textDecorationLine:'line-through',color:'#999'}}>₹ 40 </Text>Free Delivery</Text>
      </View>

      {/* Taxes and total amount rows */}
      <View style={styles.row}>
        <Text style={styles.value}>Taxes</Text>
        <Text style={styles.value}>₹ 00.00</Text>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.row}>
        <Text style={[styles.value, styles.totalLabel]}>Total Amount</Text>
        <Text style={[styles.value, styles.totalValue]}>₹ 180.00</Text>
      </View>


    </View>
      {/* Disclaimer text */}
      <Text style={styles.disclaimer}>
        Review your order and address details to avoid cancellations
      </Text>
      {/* Policy note */}
      <View style={styles.policyContainer}>
        <Text style={styles.policyNote}>
          Note: Please ensure your address and order details are correct. This order, if cancelled, is non-refundable.
        </Text>
        <Text style={styles.policyLink}>Read policy</Text>
      </View>
      </View>
  </ScrollView>
  <View style={styles.footer}>
    <View>
    <Text style={{color:'#5CB85C',fontWeight:'900',fontSize:20}}><Text style={{color:'#999',textDecorationLine:'line-through',left:10}}>₹195</Text>₹180</Text>
    <Text style={{color:'#999',fontSize:10}}>(Inclusion of all taxes)</Text>
    </View>
    <TouchableOpacity style={styles.addressButton} onPress={() =>{navigation.navigate('Address')}
    }><Text style={styles.addressButtonText}>Add Address</Text></TouchableOpacity>
  </View>
      </View>
    );
  };


const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 7,
    backgroundColor: '#fff',
    marginBottom:10
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 1,
    borderWidth:1.5,
    borderColor:'#ddd', 
  },
  itemimage: {
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
  },
  itemname: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#0f0f0f'
  },
  itemsize: {
    fontSize: 12,
    color: '#0f0f0f',
    fontWeight:'900'
  },
  itemrating: {
    fontSize: 10,
    color: '#0f0f0f',
    marginVertical: 5,
    fontWeight:'900'
  },
  pricecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discounttext: {
    fontSize: 15,
    color: '#0f0f0f',
    fontWeight:'900'
  },
  discountedprice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5a3e36',
  },
  originalprice: {
    fontSize: 15,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 10,
    fontWeight:'900'
  },
  freedelivery: {
    fontSize: 10,
    color: '#0f0f0f',
  },
  quantityContainer: {
    flexDirection: 'row',
    borderWidth:1.5,
    borderColor:'#5a3e3680',
    borderRadius:7,
    width:100,
    height:30,
    alignSelf:'stretch',
},
  quantityButton: {
    fontSize: 25,
    paddingHorizontal: 8,
    color: '#5a3e36',
    lineHeight:32,
    borderStartWidth:2,
    fontWeight:'900',
    alignSelf:'center'
  },
  quantityText: {
    fontSize: 20,
    color:'#5a3e36',
    backgroundColor:'#5a3e3680',
    width:40,
    fontWeight:'400',
    textAlign:'center',
    alignContent:'center',

  },
  deleteButtonText: {
    fontSize: 15,
    color: '#5a3e3680',
    height:100,
    width:10,
    alignSelf:'center'
  },
  completeyourOrder:{
    padding:2,
    backgroundColor: '#fff',
    borderWidth:1.5,
    borderRadius:10,
    borderColor:'#ddd'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    marginVertical: 10,
    color:'#0f0f0f'
  },
  additionalItem: {
    width: 90,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: '100%',
    height:60,
    borderRadius: 8,
  },
  plusButton: {
    position: 'absolute',
    top: 1,
    right: 3,
    backgroundColor: '#fff',
    borderRadius:5,
    borderWidth: 2,
    borderColor: '#4CAF50',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: '#0f0f0f',
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemName:{
    fontSize: 10,
    marginTop:5,
    fontWeight: '700',
    color:'#0f0f0f'
  },
  itemPrice:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offer:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 1,
    borderWidth:1.5,
    borderColor:'#ddd',
    alignItems:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  horizontalLine: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  offerLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight:'400'
  },
  OffernBenefits:{
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor:'#ddd',
    borderWidth:2
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight:'900'
  },
  discount: {
    color: '#D9534F', // Red color for discount
  },
  freeDelivery: {
    color: '#5CB85C', // Green color for free delivery
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  disclaimer: {
    fontSize: 14,
    color: '#D9534F',
    marginTop: 10,
    textAlign: 'center',
    fontWeight:'900'
  },
  policyContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical:10,
    borderWidth:1.5,
    borderColor:'#ddd',
    height:'auto'
  },
  policyNote: {
    fontSize: 13,
    color: '#333',
    textAlign: 'left',
  },
  policyLink: {
    fontSize: 12,
    color: '#D9534F',
    textAlign:'left',
    marginTop: 4,
    textDecorationLine:'underline',
    fontWeight:'900'
  },
  footer:{
  backgroundColor:'#fff',
  elevation:10,
  flexDirection:'row',
  alignContent:'stretch',
  justifyContent:'space-between',
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


export default YourCartScreen;
