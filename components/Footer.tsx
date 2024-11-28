
import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity,FlatList } from 'react-native';
import { useNavigation,useNavigationState } from '@react-navigation/native';

const Footer = () => {

  const navigation = useNavigation();

  // Get the current route name from the navigation state
  const currentRoute = useNavigationState((state) => state.routes[state.index].name);

const data = [
  { id: '1', image: require('../assets/images/dashHome.png') ,description:'Home' ,navigation:'Dashboard'},
  { id: '2', image: require('../assets/images/trolley.png') ,description:'Products',navigation:'Products' },
  { id: '3', image: require('../assets/images/yourorders.png') ,description:'Your Orders',navigation:'YourOrders' },
  { id: '4', image: require('../assets/images/profilecircle.png') ,description:'Profile',navigation:'Profile' },
  
];

const activeColor = '#5a3e36';
const inactiveColor='#000000'; 

// Render each footer item with dynamic tint color based on the current route
const renderItem = ({ item }: { item: { id: string; image: any; description: string; navigation: string } }) => (
  <TouchableOpacity onPress={() => navigation.navigate(item.navigation)}>
    <Image
      source={item.image}
      style={[
        styles.CatImage,
        { tintColor: currentRoute === item.navigation ? activeColor : inactiveColor },
      ]}
    />
    <Text style={{ color: currentRoute === item.navigation ? activeColor : inactiveColor, fontSize: 11, textAlign: 'center', fontWeight: '900' }}>
      {item.description}
    </Text>
  </TouchableOpacity>
);

  return (
    <View style={styles.footer}>
      <FlatList
         data={data}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         numColumns={4}  // Set this once
         key={4}
         columnWrapperStyle={{gap:65}}
         style={{}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 14,
    height:80,
    flexDirection:'row',
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    elevation:10,
    shadowColor:"#000",
    shadowOffset:{width:2,height:5}
  },
  CatImage:{
    width: 35,
    height: 35,
    elevation: 5,
    tintColor:"#0f0f0f",
    alignSelf:'center'
  },
});

export default Footer;