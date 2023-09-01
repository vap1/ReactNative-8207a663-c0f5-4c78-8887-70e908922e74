
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContextProvider } from './contexts/UserContext';
import { AppNavigator } from './navigation/AppNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    console.log('App started');
    // Additional initialization logic can be added here
  }, []);

  return (
    <NavigationContainer>
      <UserContextProvider>
        <AppNavigator />
      </UserContextProvider>
    </NavigationContainer>
  );
};

export default App;