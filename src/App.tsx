
console.log('App.tsx: Start');

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminUserDetailsScreen from './screens/AdminUserDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: React.FC = () => {
  console.log('App.tsx: Start');

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Admin User Details" component={AdminUserDetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  console.log('App.tsx: End');
};

console.log('App.tsx: End');

export default App;