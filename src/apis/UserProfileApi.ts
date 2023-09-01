
import { UserProfileRequest, UserProfileResponse } from '../types/Types';

const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  console.log('getUserProfile: Start');

  // Simulating API call and generating random data
  const userProfile: UserProfileResponse = {
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      contactInfo: '1234567890',
      address: '123 Main St',
      profilePicture: 'https://example.com/profile.jpg',
    },
  };

  console.log('getUserProfile: End');
  return userProfile;
};

export default getUserProfile;