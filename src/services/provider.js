

import { View, Text } from 'react-native'
import React, { createContext, useReducer } from 'react'
import auth from './reducers/auth';
import authInitalState from './initalState/authInitalState';

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {

const [authState,authDispatch] = useReducer(auth,authInitalState);


  return (
    <GlobalContext.Provider
      value={{authState, authDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}