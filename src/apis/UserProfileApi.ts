
import { UserProfileRequest, UserProfileResponse } from '../types/Types';

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    console.log('Step 1: Starting getUserProfile API call');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const userProfileData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      contactInfo: '1234567890',
      address: '123 Main St',
      profilePicture: 'https://example.com/profile.jpg',
    };

    console.log('Step 2: getUserProfile API call successful');
    console.log('Response:', userProfileData);

    return {
      success: true,
      user: userProfileData,
    };
  } catch (error) {
    console.error('Error in getUserProfile API call:', error);
    return {
      success: false,
      user: null,
    };
  }
};