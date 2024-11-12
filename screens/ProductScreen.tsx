import React, { useState,useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, PanResponder, BackHandler, StyleSheet,Image,ScrollView ,TextInput} from 'react-native';
import Footer from '../components/Footer';
import { IconButton,Card, Avatar ,Button, Icon} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


 const ProductScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const navigation = useNavigation();

    const categories = ["White Eggs", "Brown Eggs", "Enriched Eggs", "Broiler Chicken", "Country Chicken", "Protein Drinks"];

    // Sample product data
    const products = {
       "White Eggs" : [
        { id: '1', title: 'Broiler White Eggs', details: '6 Pieces per Pack',  rating:4.5,offer:10,strkamt:160,amount :140 ,description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', details2:'Our farm fresh eggs are locally sourced toensure top quality and freshness in every pack.', image:require('../assets/images/cat3.png'),people:256},
        { id: '2', title: 'Broiler White Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', details2:'Our farm fresh eggs are locally sourced toensure top quality and freshness in every pack.',image:require('../assets/images/cat3.png') ,people:256},
        { id: '2', title: 'Broiler White Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', details2:'Our farm fresh eggs are locally sourced toensure top quality and freshness in every pack.',image:require('../assets/images/cat3.png') ,people:256},
        { id: '2', title: 'Broiler White Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', details2:'Our farm fresh eggs are locally sourced toensure top quality and freshness in every pack.',image:require('../assets/images/cat3.png') ,people:256},
       
    ],
    "Brown Eggs": [
        { id: '1', title: 'Brown Eggs', details: '6 Pieces per Pack',  rating:4.5,offer:10,strkamt:160,amount :140 ,description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat1.png'),people:450},
        { id: '2', title: 'Brown Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat1.png'),people:450 },
        { id: '2', title: 'Brown Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat1.png'),people:450 },
        { id: '2', title: 'Brown Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat1.png'),people:450 },
        
    ],
    "Enriched Eggs": [
        { id: '1', title: 'Enriched Eggs', details: '6 Pieces per Pack',  rating:4.5,offer:10,strkamt:160,amount :140 ,description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', image:require('../assets/images/cat3.png'),people:256},
        { id: '2', title: 'Enriched Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:256},
        { id: '2', title: 'Enriched Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:256},
        { id: '2', title: 'Enriched Eggs', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:256},
        
    ],
    "Broiler Chicken": [
        { id: '1', title: 'Broiler Chicken', details: '6 Pieces per Pack',  rating:4.5,offer:10,strkamt:160,amount :140 ,description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', image:require('../assets/images/cat3.png'),people:256},
        { id: '2', title: 'Broiler Chicken', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:256},
        { id: '2', title: 'Broiler Chicken', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:256},
        { id: '2', title: 'Broiler Chicken', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:256},
        
    ],
    "Country Chicken": [
        { id: '1', title: 'Country Chicken', details: '6 Pieces per Pack',  rating:4.5,offer:10,strkamt:160,amount :140 ,description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', image:require('../assets/images/cat3.png'),people:900},
        { id: '2', title: 'Country Chicken', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:900},
        { id: '2', title: 'Country Chicken', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:900},
        { id: '2', title: 'Country Chicken', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:900},
        
    ],
    "Protein Drinks": [
        { id: '1', title: 'Protein Drinks', details: '6 Pieces per Pack',  rating:4.5,offer:10,strkamt:160,amount :140 ,description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers', image:require('../assets/images/cat3.png'),people:800},
        { id: '2', title: 'Protein Drinks', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:800},
        { id: '2', title: 'Protein Drinks', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:800},
        { id: '2', title: 'Protein Drinks', details: '12 Pieces per Pack', rating:4.5,offer:10,strkamt:160,amount: 140, description:'Fat-free protein,perfect for fitness enthusiasts and gym lovers',image:require('../assets/images/cat3.png') ,people:800},
        
    ],
};

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    const handleCardPress = (product) => {
        setSelectedProduct(product);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
    };

    const renderCategory = ({ item }) => (
        <TouchableOpacity
            style={[styles.categoryBox, selectedCategory === item && styles.selectedCategory]}
            onPress={() => handleCategoryPress(item)}
        >
            <Text style={[styles.categoryText, selectedCategory === item && styles.selectedCategoryText]}>{item}</Text>
        </TouchableOpacity>
    );

      

    const renderProductCard = ({item}) => (
      <View style={{backgroundColor:'transparent'}}>
        <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.Productcard}>
        <Image source={item.image} style={styles.ProductImage}/>
        <View style={{padding:7}}>
            <Text style={{color:'#0f0f0f',fontWeight:'900',fontSize:12}}>{item.title}</Text>
            <Text style={{color:'#0f0f0f',fontWeight:'900',fontSize:10}}>{item.details}</Text>
            <Text style={{color:'#8b4513',fontWeight:'900',fontSize:11}}>{item.rating}</Text>
            <Text style={{color:'#0f0f0f',fontWeight:'bold',}}>{item.offer}% Off</Text>
            <View style={{flexDirection:'row',gap:10}}>
            <Text style={{color:'#000',textDecorationLine:'line-through',fontSize:12}}>Rs.{item.amount}</Text>
            <Text style={{color:'#8b4513',fontWeight:'900',fontSize:14}}>Rs.{item.strkamt}</Text>
            </View>
            <Text style={{color:'#0f0f0f',fontSize:9}}>{item.description}</Text>
            <View style={{flexDirection:'row',gap:7,margin:3}}>
                <TouchableOpacity style={{backgroundColor:'#8b4513',flex:1,alignItems:'center',borderRadius:3,height:20,padding:3}}><Text style={{fontWeight:'900',fontSize:10,color:'#fff'}}>Add</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ddd',height:20,width:20,borderRadius:4}}></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ddd',height:20,width:20,borderRadius:4}}></TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>
      </View>
      
    );
     
    const Feature = ({ source, label }) => (
      <View style={styles.featureItem}>
        <Image source={source} style={{tintColor:'#000',height:20,width:20}}/>
        <Text style={{color:'#000',fontSize:10}}>{label}</Text>
      </View>
    );
     


    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Categories</Text>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item}
                numColumns={3}
                contentContainerStyle={styles.categoryContainer}
                columnWrapperStyle={{gap:5}}
            />
            </View>
            <ScrollView>
            <Text style={styles.title}>{selectedCategory}</Text>
            {selectedCategory && (
                <FlatList
                    data={products[selectedCategory]}
                    renderItem={renderProductCard}
                    keyExtractor={(item) => item.id}
                    numColumns={2} 
                    key={4}
                    columnWrapperStyle={{gap:10}}
                />
            )}
            </ScrollView>

{/* Modal for full-screen product details */}
<SafeAreaView style={{ flex: 1}}> 
{selectedProduct && (
  <Modal visible={isModalVisible} animationType="fade" transparent={true} style={{backgroundColor:'#00'}}>
  <ScrollView contentContainerStyle={styles.scrollviewContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={closeModal}><Image source={require('../assets/images/header.png')} style={styles.iconImage}/></TouchableOpacity>
        <Text style={styles.headerText}>Products</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('YourCart')}}><Image source={require('../assets/images/trolley.png')} style={styles.iconImage}/></TouchableOpacity>
      </View>
      {/* Product Image Slider */}
      <View style={styles.imageSlider}>
        <Image source={selectedProduct.image} style={styles.productImage} />
      </View>

      {/* Product Details */}
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{selectedProduct.title}</Text>
        <Text style={styles.productSubTitle}>{selectedProduct.details}</Text>
        <Card style={styles.ratingCard}>
          <Text style={styles.rating}>{selectedProduct.rating} ★ ({selectedProduct.people} People Ordered in 1 Month)</Text>
        </Card>
        <Text style={styles.discountText}>{selectedProduct.offer}%Off</Text>
        <View style={{flexDirection:'row',gap:10}}>
          <Text style={styles.oldPrice}>RS{selectedProduct.strkamt}</Text>
          <Text style={styles.newPrice}>RS{selectedProduct.amount}</Text>
        </View>
        <Text style={styles.productDescription}>
          Our farm-fresh eggs are locally sourced to ensure top quality and freshness in every pack...
        </Text>
        {/* Delivery Options */}
        <Text style={styles.freeShipping}>Free Shipping</Text>
        <View style={{flexDirection:'row',alignItems:'center',gap:10}}><Image source={require('../assets/images/yourorders.png')} style={{height:30,width:30}}/><Text style={{color:'#0f0f0f',fontWeight:'900'}}>Delivery Options</Text></View>
        <View style={styles.pincodeContainer}>
          <TextInput placeholder="Enter Pincode" placeholderTextColor='#000' style={styles.pincodeInput} />
          <Button mode="contained" textColor='#8b4513'style={{backgroundColor:'transparent'}}onPress={() => {}}>Check</Button>
        </View>

        {/* Add to Cart Button */}
        <Button mode="contained" buttonColor='#8b4513' style={styles.addToCartButton}>Add to Cart</Button>
      </View>

      {/* Features List */}
      <View style={styles.features}>
    <Feature source={require('../assets/images/trolley.png')} label="Freshness" />
    <Feature source={require('../assets/images/user.png')} label="Free Delivery" />
    <Feature source={require('../assets/images/shop.png')} label="Premium Quality" />
    <Feature source={require('../assets/images/save.png')} label="Farm Delivered" />
  </View>

      {/* Rating and Reviews */}
      {/* <View style={styles.reviewsSection}>
        <Text style={styles.reviewsHeader}>Rating and Reviews</Text>
        <View style={styles.reviewCard}>
          <Avatar.Image size={40} source={require('../assets/images/cat3.png')} />
          <View>
            <Text style={styles.reviewUsername}>Username, October 06, 2024</Text>
            <Text style={styles.reviewText}>Super fresh and delivered fast...</Text>
          </View>
        </View>
        <TouchableOpacity><Text>All Reviews</Text></TouchableOpacity>
      </View> */}

      {/* Similar Products */}
      {/* <View style={styles.similarProductsSection}>
        <Text style={styles.similarProductsHeader}>Similar Products</Text>
        <ScrollView horizontal>
          <Card style={styles.similarProductCard}>
            <Image source={require('../assets/images/cat3.png')} style={styles.similarProductImage} />
            <Text style={styles.similarProductTitle}>Brown Egg Pack</Text>
            <Text style={styles.similarProductPrice}>RS 40</Text>
          </Card>
          </ScrollView>
          </View> */}
          {/* Add more cards as needed */}
          </ScrollView>
          </Modal>
)}
          </SafeAreaView>
          </View>
          <Footer/>
          </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16,paddingBottom:50},
    title: { fontSize: 20, fontWeight: '900', marginVertical: 8,color:'#000' },
    liststyle1:{ backgroundColor:'#000',},
    categoryContainer: { paddingBottom: 10,alignItems:'stretch'},
    categoryBox: { padding:9,margin:2,borderWidth: 1, borderColor:'#ddd', borderRadius:11,backgroundColor:'#fff',width:'31%',alignItems:'center'},
    categoryText:{color:'#d2b593',fontSize:12,fontWeight:'600'},
    selectedCategory: { backgroundColor: '#8b4513', },
    selectedCategoryText:{color:'#fff',fontWeight:'600'},
    productList: { paddingTop:0 },
    Productcard: {
      height:290,
      width:170,
      backgroundColor:'#fff',
      borderRadius:10,
      marginBottom:20,
      borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderColor:'#ddd',
    borderWidth:2
    },
    ProductImage:{
      width:'100%',
    height:150,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    },
    scrollviewContainer:{padding:0,flexGrow:1,backgroundColor:'#fff'},
    header: { flexDirection: 'row', alignItems: 'center', padding:15, backgroundColor: '#8b4513',justifyContent: 'center',height: 60},
    headerText: { fontSize: 20, fontWeight: 'bold', flex: 1,color:'#fff'},
    iconImage:{height:30,width:30,tintColor:'#fff'},
    imageSlider: { alignItems: 'center', marginTop: 16,borderWidth:2,borderColor:'#ddd',borderRadius:10,padding:10,marginHorizontal:15,paddingBottom:30 },
    productImage: { width: 200, height: 200, borderRadius: 8 },
    productDetails: { padding: 16 },
    productTitle: { fontSize: 25, fontWeight: 'bold',color:'#0f0f0f' },
    productSubTitle: { fontSize: 16, color: '#000',fontWeight:'900' },
    ratingCard:{height:30,width:200,marginVertical:2,backgroundColor:'#ffb400',borderRadius:2,opacity:50,paddingHorizontal:5,borderColor:'orange',borderWidth:1,alignItems:'center'},
    rating: { marginVertical: 8, color: '#0f0f0f',fontWeight:'900',fontSize:12},
    discountText: { color: '#0f0f0f', fontWeight: 'bold',fontSize:20 },
    oldPrice: { fontSize: 20,textDecorationLine: 'line-through', color: '#888' },
    newPrice: { fontSize: 20, fontWeight: 'bold', color: '#8b4513' },
    productDescription: { marginVertical: 8, color: '#555' },
    freeShipping: { marginVertical: 4, color: '#0f0f0f',fontWeight:'900' },
    pincodeContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8,borderWidth:2,borderColor:'#ddd',width:300,height:50},
    pincodeInput: { borderBottomWidth: 1, marginRight: 8, flex: 1,color:'#0f0f0f',borderRightWidth:2,borderEndWidth:0,borderColor:'#ddd',borderRadius:1,justifyContent:'center',padding:10},
    addToCartButton:{ marginTop: 16,height:50,width:300,borderRadius:10,alignItems:'center',justifyContent:'center',fontSize:50,fontWeight:'900',alignSelf:'center'},
    features: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', backgroundColor: '#fff',borderColor:'#ddd',borderWidth:3,height:100},
    featureItem: { alignItems: 'center'},
    reviewsSection: { padding: 16 ,flexDirection:'column'},
    reviewsHeader: { fontSize: 18, fontWeight: 'bold' },
    reviewCard: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
    reviewUsername: { fontWeight: 'bold',color:'#0f0f0f'},
    reviewText: { color: '#0f0f0f' },
    similarProductsSection: { padding: 16 },
    similarProductsHeader: { fontSize: 18, fontWeight: 'bold' },
    similarProductCard: { width: 120, margin: 8 },
    similarProductImage: { width: '100%', height: 80, borderRadius: 8 },
    similarProductTitle: { fontSize: 14, fontWeight: 'bold' },
    similarProductPrice: { color: '#d9534f'},
  
});

export default ProductScreen;
