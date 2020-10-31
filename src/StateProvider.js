import React, { createContext, useReducer, useContext } from 'react';

// Data Layer
// The Context is where the data "lives" or is stored
export const StateContext = createContext();

// Higher Order Component and it takes three things
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Allows us to pull information from the Data Layer
export const useStateValue = () => useContext(StateContext);