
console.log('AppNavigator.tsx: Start');

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AdminUserDetailsScreen from '../screens/AdminUserDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  console.log('AppNavigator.tsx: Start');

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Admin User Details" component={AdminUserDetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  console.log('AppNavigator.tsx: End');
};

console.log('AppNavigator.tsx: End');

export default AppNavigator;