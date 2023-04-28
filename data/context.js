import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

const state = [
  { name: "First Todo", isChecked: false },
  { name: "second todo", isChecked: true },
];

const AppContext = createContext(state);

export const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
