
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { AdminUserDetailsResponse, AdminUserDetailsRequest } from '../types/Types';
import { getAdminUserDetails } from '../apis/AdminUserDetailsApi';

const AdminUserDetailsScreen: React.FC = () => {
  const { token } = useContext(UserContext);

  useEffect(() => {
    console.log('Step 1: AdminUserDetailsScreen - useEffect');
    console.log('Fetching admin user details...');

    const fetchData = async () => {
      try {
        const request: AdminUserDetailsRequest = {
          token: token,
        };

        const response: AdminUserDetailsResponse = await getAdminUserDetails(request);

        console.log('Step 2: AdminUserDetailsScreen - fetchData');
        console.log('Admin user details:', response.users);
      } catch (error) {
        console.error('Error fetching admin user details:', error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <View>
      <Text>Admin User Details Screen</Text>
    </View>
  );
};

export default AdminUserDetailsScreen;