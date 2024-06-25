import { combineReducers } from "@reduxjs/toolkit";
import { articelsData } from "./article";
import loginReducer from "./login";

// Combine multiple reducers into a single root reducer
export const rootReducer = combineReducers({
    articelsData: articelsData, // Handles state related to articles
    loggedIn: loginReducer, // Handles state related to user login
})

// Define a type for the entire state tree
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; // Export the combined reducer for use in the store
