
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';

console.log('UserRegistrationApi.ts: Start');

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  console.log('UserRegistrationApi.ts: registerUser - Start');
  console.log('UserRegistrationApi.ts: request:', request);

  // Generate random data for the response
  const response: UserRegistrationResponse = {
    success: true,
    message: 'User registered successfully',
  };

  console.log('UserRegistrationApi.ts: registerUser - End');
  console.log('UserRegistrationApi.ts: response:', response);

  return response;
};

console.log('UserRegistrationApi.ts: End');