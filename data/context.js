import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

const initialState = [
  { name: "First Todo", isChecked: false },
  { name: "second todo", isChecked: true },
];

const AppContext = createContext(initialState);

const reducer = () => {};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return {
      todoData: state,
    };
  }, [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
