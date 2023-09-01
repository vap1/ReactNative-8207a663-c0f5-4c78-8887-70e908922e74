
import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerResult } from 'expo-image-picker';

const ImagePickerComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePicker = async () => {
    console.log('ImagePickerComponent.tsx: handleImagePicker - Start');

    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log('ImagePickerComponent.tsx: handleImagePicker - Permission Result:', permissionResult);

      if (permissionResult.granted === false) {
        console.log('ImagePickerComponent.tsx: handleImagePicker - Permission not granted');
        return;
      }

      const imagePickerResult: ImagePickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log('ImagePickerComponent.tsx: handleImagePicker - Image Picker Result:', imagePickerResult);

      if (!imagePickerResult.cancelled) {
        setSelectedImage(imagePickerResult.uri);
      }
    } catch (error) {
      console.error('ImagePickerComponent.tsx: handleImagePicker - Error:', error);
    }

    console.log('ImagePickerComponent.tsx: handleImagePicker - End');
  };

  return (
    <View>
      <Button title="Select Image" onPress={handleImagePicker} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ImagePickerComponent;