
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInputComponent, ButtonComponent } from '../components';
import { UserLoginRequest } from '../types/Types';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('LoginScreen: handleLogin - Start');
    console.log('LoginScreen: handleLogin - Email:', email);
    console.log('LoginScreen: handleLogin - Password:', password);

    // Perform login API call here

    console.log('LoginScreen: handleLogin - End');
  };

  console.log('LoginScreen: Render - Start');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInputComponent
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInputComponent
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ButtonComponent onPress={handleLogin} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

console.log('LoginScreen: Render - End');

export default LoginScreen;