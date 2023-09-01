
import { UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';

const updateUserProfile = async (request: UserProfileUpdateRequest): Promise<UserProfileUpdateResponse> => {
  console.log('UserProfileUpdateApi.ts: Start updateUserProfile');

  // Generate random data for testing
  const response: UserProfileUpdateResponse = {
    success: true,
    message: 'User profile updated successfully',
  };

  console.log('UserProfileUpdateApi.ts: End updateUserProfile');
  return response;
};

export default updateUserProfile;