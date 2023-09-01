
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';

console.log('AdminUserDetailsApi.ts: Start');

export const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  console.log('AdminUserDetailsApi.ts: getAdminUserDetails - Start');

  // Simulating API call and generating random data
  const users: User[] = [];
  for (let i = 0; i < 10; i++) {
    const user: User = {
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      contactInfo: `Contact Info ${i + 1}`,
      address: `Address ${i + 1}`,
      profilePicture: `https://example.com/profiles/user${i + 1}.jpg`,
    };
    users.push(user);
  }

  const response: AdminUserDetailsResponse = {
    users,
  };

  console.log('AdminUserDetailsApi.ts: getAdminUserDetails - End');
  return response;
};

console.log('AdminUserDetailsApi.ts: End');