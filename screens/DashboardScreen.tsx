import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Alert, Dimensions, Animated, PanResponder, BackHandler,FlatList, ScrollViewComponent,} from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer.tsx';
import Carousel from 'react-native-reanimated-carousel';

// const DashBoardScreen = () => {
//   const route = useRoute();
// }

const { width: viewportWidth} = Dimensions.get('window');
const { width } = Dimensions.get('window');

 {/*carousel*/}
const offerData = [
  {
    image: require('../assets/images/ban1.png'),
  },
  {

    image: require('../assets/images/ban2.png'),
  },
  {
    image: require('../assets/images/ban3.png'),
  },
];

const renderOfferItem = ({ item } : { item: { image: any; } }) => (
  <View style={styles.offerBanner}>
    <Image source={item.image} style={styles.offerImage} />
  </View>
);

{/*categories*/}
const data = [
  { id: '1', image: require('../assets/images/cat1.png') ,description:'White Egg' },
  { id: '2', image: require('../assets/images/cat2.png') ,description:'Country Egg' },
  { id: '3', image: require('../assets/images/cat3.png') ,description:'Broiler chicken Meat' },
  { id: '4', image: require('../assets/images/cat4.png') ,description:'Country Chicken Meat' },
  { id: '5', image: require('../assets/images/cat5.png') ,description:'Egg Liquids' },
  { id: '6', image: require('../assets/images/cat6.png') ,description:'Masala' },
  
];

const renderItem = ({ item }: { item: { id: string; image: any; description: string } }) => (
  <TouchableOpacity>
    <Image source={item.image} style={styles.CatImage} />
    <Text style={{color:"#000",marginTop:5,fontSize:10,textAlign:'center',margin:10, fontWeight:'900'}}>{item.description}</Text>
  </TouchableOpacity>
);

{/*carousel2*/}

const screenWidth = Dimensions.get('window').width;
const carouselData = [
  { image: require('../assets/images/crimg1.png'), product:'Egg White Liquid', quantity:'250ml', rupees:'Rs.100', description: 'A good quality product at your Doorstep' },
  { image: require('../assets/images/crimg2.png'), product:'Egg White Liquid', quantity:'250ml', rupees:'Rs.100', description: 'A good quality product at your Doorstep' },
  { image: require('../assets/images/crimg3.png'), product:'Egg White Liquid', quantity:'250ml', rupees:'Rs.100', description: 'A good quality product at your Doorstep' },
  { image: require('../assets/images/cat4.png'),   product:'Egg White Liquid', quantity:'250ml', rupees:'Rs.100', description: 'A good quality product at your Doorstep' },
  { image: require('../assets/images/cat5.png'),   product:'Egg White Liquid', quantity:'250ml', rupees:'Rs.100', description: 'A good quality product at your Doorstep' },
  { image: require('../assets/images/cat6.png'),   product:'Egg White Liquid', quantity:'250ml', rupees:'Rs.100', description: 'A good quality product at your Doorstep' },
];

const TwoCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = carouselData.length;
  const cardsToShow = 2; // Set the number of cards visible at a time

  const handleNext = () => {
    if (currentIndex + cardsToShow < totalCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.carouselContainer2}>
      {currentIndex > 0 && (
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.cardsContainer2}>
        {carouselData.slice(currentIndex, currentIndex + cardsToShow).map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={{alignContent:'flex-start',marginTop:5}}>
            <Text style={{fontWeight:'900',color:"#0f0f0f"}}>{item.product}</Text>
            <Text style={{fontWeight:'900',color:"#0f0f0f"}}>{item.quantity}</Text>
            <View style={{flexDirection:'row',gap:38}}>
            <Text style={{fontWeight:'900',color:'#5a3e36'}}>{item.rupees}</Text>
            <TouchableOpacity style={{backgroundColor:'#5a3e36',borderRadius:5,padding:2,height:20,width:50,alignItems:'center',marginBottom:5}}><Text style={{fontSize:13,fontWeight:'900',color:'#fff'}}>+ Add</Text></TouchableOpacity>
            </View>
            <Text style={{fontSize:10,color:'#0f0f0f'}}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {currentIndex + cardsToShow < totalCards && (
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

{/*ordernow*/}

const OrderData = [
  { image: require('../assets/images/cat2.png'), product:'Marinated Chicken Variety Pack', strkamt:'₹340', amount:'₹300', description: '2 Marinated chicken Drumsticks, 1 full chicken Leg(Thigh & Drumstick), 1 Garlic & Herb Chicken Breast , 3 packs of Ready-to-Cook Chicken Wings' },
  { image: require('../assets/images/cat2.png'), product:'Marinated Chicken Variety Pack', strkamt:'₹340', amount:'₹300', description: '2 Marinated chicken Drumsticks, 1 full chicken Leg(Thigh & Drumstick), 1 Garlic & Herb Chicken Breast , 3 packs of Ready-to-Cook Chicken Wings' },
  { image: require('../assets/images/cat2.png'), product:'Marinated Chicken Variety Pack', strkamt:'₹340', amount:'₹300', description: '2 Marinated chicken Drumsticks, 1 full chicken Leg(Thigh & Drumstick), 1 Garlic & Herb Chicken Breast , 3 packs of Ready-to-Cook Chicken Wings' },
  { image: require('../assets/images/cat2.png'), product:'Marinated Chicken Variety Pack', strkamt:'₹340', amount:'₹300', description: '2 Marinated chicken Drumsticks, 1 full chicken Leg(Thigh & Drumstick), 1 Garlic & Herb Chicken Breast , 3 packs of Ready-to-Cook Chicken Wings' },
];

const OrderrenderItem = ({ item }: { item: { id: string; image: any; product:string; strkamt:string; amount:string; description: string } }) => (
  <View style={{marginBottom:80}}>
  <View style={styles.ordercardstyle}>
    <View>
    <Image source={item.image} style={styles.orderimage} />
    <TouchableOpacity style={{backgroundColor:"#DDDDDDB3",position: 'absolute', height:40,width:50,    
    bottom: 0,            
    right: 0,               
    zIndex: 1,
    alignItems:'center',
    justifyContent:'center',
    borderStartStartRadius:40,
    }}><Text style={{fontSize:30,fontWeight:'900',color:'#5a3e36',left:3}}>+</Text>
    </TouchableOpacity>
    </View>
    <View style={{padding:7}}>
    <Text style={{fontWeight:'900',color:'#000'}}>{item.product}</Text>
    <View style={{flexDirection:'row',gap:5}}>
      <Text style={{color:'#000', textDecorationLine:'line-through'}}>{item.strkamt}</Text>
      <Text style={{color:'#5a3e36',fontWeight:'bold',fontSize:17,textAlign:'center'}}>{item.amount}</Text>
    </View>
    <Text style={{color:"#000",marginTop:5,fontSize:10, fontWeight:'600',lineHeight:15}}>{item.description}</Text>
    </View>
  </View>
  </View>
);

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarAnim = useRef(new Animated.Value(viewportWidth)).current;


  // PanResponder to detect swipe gestures
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return gestureState.dx > 10; 
    },
    onPanResponderMove: (_, gestureState) => {
      sidebarAnim.setValue(viewportWidth - 250 + gestureState.dx); 
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 50) {
        toggleSidebar();
      } else {
        Animated.timing(sidebarAnim, {
          toValue: viewportWidth - 250,
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const toggleSidebar = () => {
    if (isSidebarVisible) {
      Animated.timing(sidebarAnim, {
        toValue: viewportWidth,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setSidebarVisible(false));
    } else {
      setSidebarVisible(true);
      Animated.timing(sidebarAnim, {
        toValue: viewportWidth - 250, 
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleLogin = () => {
    Alert.alert('Logged out');
    navigation.navigate('Login');
  };

  // Handle the back button press
  useEffect(() => {
    const backAction = () => {
      if (isSidebarVisible) {
        toggleSidebar(); // Close the sidebar instead of navigating
        return true; // Prevent the default back action
      }
      return false; // Allow the default back action
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Cleanup listener on unmount
  }, [isSidebarVisible]);


  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <View style={styles.Menu}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Image source={require('../assets/images/nav.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
         {/*search bar*/}

         <View style={styles.searchContainer}>
         <Image source={require('../assets/images/nav1.png')} style={styles.searchIcon} />
         <TextInput
          style={{ flex: 1, fontSize: 15, color: '#000', height:35,}}
          placeholder="Search"
          placeholderTextColor="#888"
          onChangeText={(text) => console.log(text)} // Replace with your own search handler
          />
         </View>
   
        {/*banner Section*/}
        <View style={{padding:10}}>
        <Carousel
        width={width}
        height={200}
        data={offerData}
        renderItem={renderOfferItem}
        loop
        autoPlay
        autoPlayInterval={700}
        mode="Default"
        scrollAnimationDuration={1000}
        panGestureHandlerProps={{
          activeOffsetX: [-10,10], 
        }}
        pagingEnabled={true}
      />
      </View>

        
        {/* Cards Section */}
        <Text style={{color:"#000",alignSelf:'start',fontSize:23,fontWeight:'900',marginLeft:20}}> Product Categories</Text>
        <View>
        <FlatList
         data={data}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         numColumns={3} 
         key={4}
         columnWrapperStyle={{gap:10}}
         style={styles.categories}
        />
        </View>

        {/* Sidebar Navigation */}
        {isSidebarVisible && (
          <Animated.View
            style={[styles.sidebar, { right: sidebarAnim }]}
            {...panResponder.panHandlers} // Attach PanResponder to the sidebar
          >
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
              <Image source={require("../assets/images/nav5.png")} style={styles.navImg}/>
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Products')}>
              <Image source={require("../assets/images/nav1.png")} style={styles.navImg}/>
              <Text style={styles.navText}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Wishlist')}>
            <Image source={require("../assets/images/nav3.png")} style={styles.navImg}/>
              <Text style={styles.navText}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Blogs')}>
            <Image source={require("../assets/images/nav2.png")} style={styles.navImg}/>
              <Text style={styles.navText}>Blogs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ContactUs')}>
            <Image source={require("../assets/images/nav4.png")} style={styles.navImg}/>
              <Text style={styles.navText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={handleLogin}>
            <Image source={require("../assets/images/profimg.png")} style={styles.navImg}/>
              <Text style={styles.navText}>Logout</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        <View>
          <Image source={require('../assets/images/eggflower.png')} style={{alignSelf:'center',margin:10}}/>
        </View>

        {/*carousel2*/}
        <View style={{ paddingVertical: 20 }}>
  <Text style={{ color: 'orange', fontSize: 20, fontWeight: '900', textAlign: 'center' }}>
    Fitness Boost Eggs!
  </Text>
  <Text style={{ color: 'orange', fontSize: 20, fontWeight: '900', textAlign: 'center' }}>
    Your Gym Protein Partner
  </Text>
  <TwoCardCarousel />
</View>
<Text style={{color:"#000",alignSelf:'start',fontSize:23,fontWeight:'900',margin:10,marginLeft:20,marginTop:10 }}>Order Now!!!</Text>
{/*Order Now*/}
<View>
 <FlatList
  data={OrderData}
  renderItem={OrderrenderItem}
  keyExtractor={(item) => item.id}
  numColumns={2}  // Set this once
  key={4}
  columnWrapperStyle={{gap:10}}
  style={{padding:15}}
 />
</View>
</ScrollView>
      </View>
        <Footer/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    flex:1,
  },
  scrollviewContainer:{
    padding:0,
    flexGrow:1
  },
  Menu:{
   flexDirection:'row',
   justifyContent:'space-between',
   alignContent:'stretch',
   paddingHorizontal:15,
   paddingTop:10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor:'#5a3e36',
  },
  searchContainer:
    { flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: '#F0F0F0', 
      borderRadius: 10, 
      paddingHorizontal: 10, 
      paddingVertical: 5, 
      margin: 15,
      borderWidth:2,
      borderColor:'#ddd'
    },
  searchIcon: {
  width: 20, 
  height: 20, 
  marginRight: 8, 
  tintColor: '#888'
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  offerBanner: {
    backgroundColor: '#ffdd99', 
    borderRadius: 12, 
    elevation:5,
    marginLeft:10,
    marginRight:30,
    },
offerImage: {
  width: '100%',
  height:200, 
  borderRadius: 12, 
  resizeMode:'stretch',
},
categories:{
alignSelf:'center'
},
  CatImage:{
    width: 100,
    height: 100,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginVertical:5,
    margin:5,
    alignContent:'center'
    
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#FFf',
    paddingVertical: 20,
    paddingHorizontal: 10,
    elevation: 5,
    height:'100%',
    zIndex:1
  },
  navItem: {
    paddingVertical: 15,
    marginBottom:10,
    flexDirection:"row",
  },
  navText: {
    fontSize: 18,
    color: '#5a3e36',
    fontWeight:'900',
    marginLeft:30,
  },
  navImg:{
    width:30,
    height:30,
    tintColor:"#5a3e36",
    marginLeft:30,
  },
  carouselContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    padding:5,
    marginBottom:10
  },
  cardsContainer2: {
    flexDirection: 'row',
  },
  card: {
    width: screenWidth / 2 - 40,
    marginHorizontal: 5,
    borderWidth:2,
    borderRadius:10,
    borderColor:"#ddd",
    elevation:5,
    height:250,
    backgroundColor:'#fff',
    padding:3,
    alignItems:'center',
  },
  cardImage: {
    width: '95%',
    height:150,
    borderRadius: 8,
    borderColor:"#ddd",
    borderWidth:2
  },
  arrowButton: {
    backgroundColor:'#ffd7be',
    height:20,
    width:20,
    borderRadius:50
  },
  arrowText: {
    fontSize: 15,
    color: '#5a3e36',
    alignSelf:'center',
    fontWeight:'900'
  },
  ordercardstyle:{
    height:280,
    width:170,
    backgroundColor:'#ddd',
    borderRadius:10,
    elevation:15,
  },
  orderimage:{
    width:170,
    height:150,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  }
  
});

export default DashboardScreen;
