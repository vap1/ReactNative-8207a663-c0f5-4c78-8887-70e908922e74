
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Step 2: User submits the login form');
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform API call for user login
    // ...

    // Handle API response
    // ...
  };

  console.log('Step 1: User visits the Login Screen');

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;