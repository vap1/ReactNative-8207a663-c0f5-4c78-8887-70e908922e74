
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputComponent: React.FC = () => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    console.log('TextInputComponent: handleTextChange - Start');
    console.log('TextInputComponent: handleTextChange - Input Text:', inputText);

    setText(inputText);

    console.log('TextInputComponent: handleTextChange - End');
  };

  console.log('TextInputComponent: Render - Start');

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
  },
});

console.log('TextInputComponent: Render - End');

export default TextInputComponent;