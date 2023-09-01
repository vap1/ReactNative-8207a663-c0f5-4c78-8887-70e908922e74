
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputComponent: React.FC = () => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    console.log('User entered text:', inputText);
    setText(inputText);
  };

  console.log('Rendering TextInputComponent');

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleTextChange}
      value={text}
      placeholder="Enter text"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default TextInputComponent;