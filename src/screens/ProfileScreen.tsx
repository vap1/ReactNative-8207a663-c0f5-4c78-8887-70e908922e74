
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';

const ProfileScreen: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log('Fetching user profile...');
    setIsLoading(true);

    // Make API call to retrieve user profile
    const fetchUserProfile = async () => {
      try {
        const request: UserProfileRequest = {
          token: 'user_token', // Replace with actual user token
        };

        const response = await fetch('/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
        });

        const data: UserProfileResponse = await response.json();
        setUserProfile(data);
        setIsLoading(false);
        console.log('User profile fetched successfully:', data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSaveChanges = () => {
    console.log('Saving changes...');
    // Implement logic to save changes to user profile
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>Name: {userProfile?.user.name}</Text>
          <Text>Email: {userProfile?.user.email}</Text>
          <TextInput
            placeholder="Enter contact info"
            onChangeText={(text) => console.log('Contact info changed:', text)}
          />
          <TextInput
            placeholder="Enter address"
            onChangeText={(text) => console.log('Address changed:', text)}
          />
          <Button title="Save Changes" onPress={handleSaveChanges} />
        </>
      )}
    </View>
  );
};

export default ProfileScreen;