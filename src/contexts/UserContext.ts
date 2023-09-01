
import React, { createContext, useState } from 'react';
import { User, UserRegistrationRequest, UserRegistrationResponse, UserLoginRequest, UserLoginResponse, UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse, AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';
import { registerUser, loginUser, getUserProfile, updateUserProfile, getAdminUserDetails } from '../apis/UserApi';

interface UserContextProps {
  user: User | null;
  registerUser: (request: UserRegistrationRequest) => void;
  loginUser: (request: UserLoginRequest) => void;
  getUserProfile: () => void;
  updateUserProfile: (request: UserProfileUpdateRequest) => void;
  getAdminUserDetails: () => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  registerUser: () => {},
  loginUser: () => {},
  getUserProfile: () => {},
  updateUserProfile: () => {},
  getAdminUserDetails: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleRegisterUser = async (request: UserRegistrationRequest) => {
    try {
      console.log('Registering user...');
      const response: UserRegistrationResponse = await registerUser(request);
      console.log('User registration successful:', response);
      // Handle success logic here
    } catch (error) {
      console.error('User registration failed:', error);
      // Handle error logic here
    }
  };

  const handleLoginUser = async (request: UserLoginRequest) => {
    try {
      console.log('Logging in user...');
      const response: UserLoginResponse = await loginUser(request);
      console.log('User login successful:', response);
      // Handle success logic here
    } catch (error) {
      console.error('User login failed:', error);
      // Handle error logic here
    }
  };

  const handleGetUserProfile = async () => {
    try {
      console.log('Fetching user profile...');
      const response: UserProfileResponse = await getUserProfile();
      console.log('User profile fetched:', response);
      // Handle success logic here
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      // Handle error logic here
    }
  };

  const handleUpdateUserProfile = async (request: UserProfileUpdateRequest) => {
    try {
      console.log('Updating user profile...');
      const response: UserProfileUpdateResponse = await updateUserProfile(request);
      console.log('User profile updated:', response);
      // Handle success logic here
    } catch (error) {
      console.error('Failed to update user profile:', error);
      // Handle error logic here
    }
  };

  const handleGetAdminUserDetails = async () => {
    try {
      console.log('Fetching admin user details...');
      const response: AdminUserDetailsResponse = await getAdminUserDetails();
      console.log('Admin user details fetched:', response);
      // Handle success logic here
    } catch (error) {
      console.error('Failed to fetch admin user details:', error);
      // Handle error logic here
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        registerUser: handleRegisterUser,
        loginUser: handleLoginUser,
        getUserProfile: handleGetUserProfile,
        updateUserProfile: handleUpdateUserProfile,
        getAdminUserDetails: handleGetAdminUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};