import React, { createContext, useContext, useReducer } from "react";
//Prepares the data layer
export const stateContext = createContext();

// Wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);
