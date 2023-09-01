
import { UserLoginRequest, UserLoginResponse } from '../types/Types';

const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  console.log('UserLoginApi.ts: loginUser - Start');
  console.log('UserLoginApi.ts: loginUser - Request:', request);

  // Simulating API call and generating random data
  const response: UserLoginResponse = {
    success: true,
    message: 'Login successful',
    token: Math.random().toString(36).substring(7),
  };

  console.log('UserLoginApi.ts: loginUser - Response:', response);
  console.log('UserLoginApi.ts: loginUser - End');

  return response;
};

export default loginUser;