
import { UserLoginRequest, UserLoginResponse } from '../types/Types';

export const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    console.log('Step 1: Sending login request to the backend API');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const response: UserLoginResponse = {
      success: true,
      message: 'Login successful',
      token: 'random_token'
    };

    console.log('Step 2: Received response from the backend API');
    console.log('Response:', response);

    return response;
  } catch (error) {
    console.error('Error occurred while calling loginUser API:', error);
    throw error;
  }
};