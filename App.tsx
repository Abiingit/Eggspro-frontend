import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, TouchableOpacity, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerifyCodeScreen from './screens/VerifyCodeScreen';
import SetPasswordScreen from './screens/SetPasswordScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProductScreen from './screens/ProductScreen';
import YourCartScreen from './screens/YourCartScreen';
import AddressScreen from './screens/ShipToScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}  
          options={{
            title: '',
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{
            title: 'Signup',
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#000',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{
            title: '',
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{
            title: 'hello',
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="VerifyCode" 
          component={VerifyCodeScreen} 
          options={{
            title: 'hello',
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="SetPassword" 
          component={SetPasswordScreen} 
          options={{
            title: 'hello',
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Products" 
          component={ProductScreen}  
          options={({ navigation }) => ({
            title: 'Products',
            headerStyle: { backgroundColor: '#8b4513' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image
                  source={require('./assets/images/header.png')}
                  style={{ width: 24, height: 24, marginRight: 10,tintColor:'#fff' }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('YourCart')}>
                <Image
                  source={require('./assets/images/trolley.png')}
                  style={{ width: 24, height: 24, marginRight: 10,tintColor:'#fff' }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="YourCart" 
          component={YourCartScreen}
          options={({ navigation }) => ({
            title: 'Your Cart',
            headerStyle: { backgroundColor: '#8b4513' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerLeft: () => (
              <TouchableOpacity onPress={() =>{if (navigation.canGoBack()) {
                navigation.goBack();
              }}}>
                <Image
                  source={require('./assets/images/header.png')}
                  style={{ width: 24, height: 24, marginRight: 10,tintColor:'#fff' }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Address" 
          component={AddressScreen} 
          options={({navigation})=> ({
            title: 'Ship To',
            headerStyle: { backgroundColor: '#8b4513' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                <Image
                  source={require('./assets/images/header.png')}
                  style={{ width: 24, height: 24, marginRight: 10,tintColor:'#fff' }}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
