
console.log("UserContext.ts: Start");

import React, { createContext, useState } from 'react';
import { User, UserRegistrationRequest, UserRegistrationResponse, UserLoginRequest, UserLoginResponse, UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse, AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';
import { registerUser, loginUser, getUserProfile, updateUserProfile, getAdminUserDetails } from '../apis/UserApi';

interface UserContextProps {
  user: User | null;
  registerUser: (request: UserRegistrationRequest) => Promise<UserRegistrationResponse>;
  loginUser: (request: UserLoginRequest) => Promise<UserLoginResponse>;
  getUserProfile: (request: UserProfileRequest) => Promise<UserProfileResponse>;
  updateUserProfile: (request: UserProfileUpdateRequest) => Promise<UserProfileUpdateResponse>;
  getAdminUserDetails: (request: AdminUserDetailsRequest) => Promise<AdminUserDetailsResponse>;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  registerUser: () => Promise.reject(),
  loginUser: () => Promise.reject(),
  getUserProfile: () => Promise.reject(),
  updateUserProfile: () => Promise.reject(),
  getAdminUserDetails: () => Promise.reject(),
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleRegisterUser = async (request: UserRegistrationRequest) => {
    console.log("UserContext.ts: handleRegisterUser");
    try {
      const response = await registerUser(request);
      console.log("UserContext.ts: handleRegisterUser - response", response);
      return response;
    } catch (error) {
      console.error("UserContext.ts: handleRegisterUser - error", error);
      throw error;
    }
  };

  const handleLoginUser = async (request: UserLoginRequest) => {
    console.log("UserContext.ts: handleLoginUser");
    try {
      const response = await loginUser(request);
      console.log("UserContext.ts: handleLoginUser - response", response);
      return response;
    } catch (error) {
      console.error("UserContext.ts: handleLoginUser - error", error);
      throw error;
    }
  };

  const handleGetUserProfile = async (request: UserProfileRequest) => {
    console.log("UserContext.ts: handleGetUserProfile");
    try {
      const response = await getUserProfile(request);
      console.log("UserContext.ts: handleGetUserProfile - response", response);
      return response;
    } catch (error) {
      console.error("UserContext.ts: handleGetUserProfile - error", error);
      throw error;
    }
  };

  const handleUpdateUserProfile = async (request: UserProfileUpdateRequest) => {
    console.log("UserContext.ts: handleUpdateUserProfile");
    try {
      const response = await updateUserProfile(request);
      console.log("UserContext.ts: handleUpdateUserProfile - response", response);
      return response;
    } catch (error) {
      console.error("UserContext.ts: handleUpdateUserProfile - error", error);
      throw error;
    }
  };

  const handleGetAdminUserDetails = async (request: AdminUserDetailsRequest) => {
    console.log("UserContext.ts: handleGetAdminUserDetails");
    try {
      const response = await getAdminUserDetails(request);
      console.log("UserContext.ts: handleGetAdminUserDetails - response", response);
      return response;
    } catch (error) {
      console.error("UserContext.ts: handleGetAdminUserDetails - error", error);
      throw error;
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

console.log("UserContext.ts: End");