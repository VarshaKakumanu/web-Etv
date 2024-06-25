import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

// Create the Redux store using the rootReducer
const store = configureStore({ 
  reducer: rootReducer, // Root reducer combines all slice reducers
});

console.warn(store, "store"); // Log the store for debugging purposes

export default store; // Export the store to be used in the application
