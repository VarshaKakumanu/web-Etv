import { UserLoggedIn } from "./constant";

export const loggedIn = (isLoggedIn:any) => {
    return {
      type: UserLoggedIn,
      data: isLoggedIn,
    };
  };

// Reducer function to handle login actions
const loginReducer = (state: false, action: { type: string; data: any }) => {
  switch (action.type) {
    case UserLoggedIn:
      return action.data;

    default:
      return false;
  }
};

export default loginReducer;
