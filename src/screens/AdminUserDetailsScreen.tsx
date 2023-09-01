
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';

const AdminUserDetailsScreen: React.FC = () => {
  console.log('AdminUserDetailsScreen.tsx: Start');

  const { getAdminUserDetails, user } = useContext(UserContext);

  useEffect(() => {
    console.log('AdminUserDetailsScreen.tsx: useEffect - Start');

    const fetchData = async () => {
      console.log('AdminUserDetailsScreen.tsx: useEffect - fetchData - Start');

      if (user) {
        const request: AdminUserDetailsRequest = {
          token: user.token,
        };

        try {
          const response: AdminUserDetailsResponse = await getAdminUserDetails(request);
          console.log('AdminUserDetailsScreen.tsx: useEffect - fetchData - response', response);
        } catch (error) {
          console.error('AdminUserDetailsScreen.tsx: useEffect - fetchData - error', error);
        }
      }

      console.log('AdminUserDetailsScreen.tsx: useEffect - fetchData - End');
    };

    fetchData();

    console.log('AdminUserDetailsScreen.tsx: useEffect - End');
  }, [getAdminUserDetails, user]);

  console.log('AdminUserDetailsScreen.tsx: End');

  return (
    <View>
      <Text>Admin User Details Screen</Text>
    </View>
  );
};

export default AdminUserDetailsScreen;