
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';

const ProfileScreen: React.FC = () => {
  const { user, getUserProfile } = useContext(UserContext);

  useEffect(() => {
    console.log('ProfileScreen.tsx: useEffect - Start');

    const fetchUserProfile = async () => {
      console.log('ProfileScreen.tsx: fetchUserProfile - Start');

      try {
        const request: UserProfileRequest = {
          token: 'user_token', // Replace with actual user token
        };

        const response: UserProfileResponse = await getUserProfile(request);
        console.log('ProfileScreen.tsx: fetchUserProfile - Response:', response);
      } catch (error) {
        console.error('ProfileScreen.tsx: fetchUserProfile - Error:', error);
      }

      console.log('ProfileScreen.tsx: fetchUserProfile - End');
    };

    fetchUserProfile();

    console.log('ProfileScreen.tsx: useEffect - End');
  }, []);

  console.log('ProfileScreen.tsx: Render - Start');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      {user && (
        <View>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Contact Info: {user.contactInfo}</Text>
          <Text>Address: {user.address}</Text>
          <Text>Profile Picture: {user.profilePicture}</Text>
        </View>
      )}
    </View>
  );

  console.log('ProfileScreen.tsx: Render - End');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProfileScreen;