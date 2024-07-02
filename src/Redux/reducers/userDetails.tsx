import { UserDetailsUpdated } from "./constant";

// Action creator for updating user details
export const updateUserDetails = (userDetails: any[]) => {
  return {
    type: UserDetailsUpdated,
    data: userDetails,
  };
};

// Reducer function to handle user details actions
const userDetailsReducer = (state: any[] = [], action: { type: string; data: any[] }) => {
  switch (action.type) {
    case UserDetailsUpdated:
      return action.data;

    default:
      return state;
  }
};

export default userDetailsReducer;