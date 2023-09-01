
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent: React.FC<{ onPress: () => void; title: string }> = ({ onPress, title }) => {
  console.log('ButtonComponent.tsx: Start');

  const handlePress = () => {
    console.log('ButtonComponent.tsx: handlePress');
    onPress();
  };

  console.log('ButtonComponent.tsx: End');

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;