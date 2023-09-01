
import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePicker = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log('Permission Result:', permissionResult);

      if (!permissionResult.granted) {
        Alert.alert('Permission Denied', 'Please allow access to your media library to select an image.');
        return;
      }

      const imagePickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log('Image Picker Result:', imagePickerResult);

      if (!imagePickerResult.cancelled) {
        setSelectedImage(imagePickerResult.uri);
      }
    } catch (error) {
      console.error('Image Picker Error:', error);
      Alert.alert('Error', 'An error occurred while selecting an image.');
    }
  };

  return (
    <View>
      <Button title="Select Image" onPress={handleImagePicker} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ImagePickerComponent;