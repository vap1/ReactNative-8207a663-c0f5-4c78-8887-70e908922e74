
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';

export const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    console.log('Step 1: Starting API call to retrieve admin user details');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const users: User[] = generateRandomUsers();

    console.log('Step 2: API call successful');
    console.log('Response:', users);

    return {
      success: true,
      users,
    };
  } catch (error) {
    console.error('Error occurred while retrieving admin user details:', error);

    return {
      success: false,
      users: [],
    };
  }
};

// Helper function to generate random user data
const generateRandomUsers = (): User[] => {
  // Generate random user data here
  return [];
};