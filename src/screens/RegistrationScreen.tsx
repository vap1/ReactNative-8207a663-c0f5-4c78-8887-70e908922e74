
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInputComponent, ButtonComponent } from '../components';
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';

const RegistrationScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegistration = async () => {
    console.log('RegistrationScreen: handleRegistration - Start');
    setIsLoading(true);

    const request: UserRegistrationRequest = {
      name,
      email,
      password,
    };

    try {
      console.log('RegistrationScreen: handleRegistration - Sending registration request:', request);

      // Make API call to register user
      const response: UserRegistrationResponse = await registerUser(request);

      console.log('RegistrationScreen: handleRegistration - Registration response:', response);

      // Handle success or failure
      if (response.success) {
        console.log('RegistrationScreen: handleRegistration - Registration successful');
        // Redirect to login screen or perform any other necessary action
      } else {
        console.log('RegistrationScreen: handleRegistration - Registration failed:', response.message);
        // Display error message to the user
      }
    } catch (error) {
      console.error('RegistrationScreen: handleRegistration - Error:', error);
      // Display error message to the user
    }

    setIsLoading(false);
    console.log('RegistrationScreen: handleRegistration - End');
  };

  console.log('RegistrationScreen: Render - Start');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInputComponent
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <TextInputComponent
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <TextInputComponent
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <ButtonComponent
        title={isLoading ? 'Loading...' : 'Register'}
        onPress={handleRegistration}
        disabled={isLoading}
      />
    </View>
  );

  console.log('RegistrationScreen: Render - End');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default RegistrationScreen;