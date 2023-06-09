import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//initial state
const initialState = [
  { name: "Task due", isChecked: false },
  { name: "Task done", isChecked: true },
];

//initial placeholder functions
const stateModifiers = {
  handleAdd: () => { },
  handleToggle: () => { },
  handleDelete: () => { },
};

//creating context
const AppContext = createContext({ initialState, ...stateModifiers });

//reducer function for state management
const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      console.log(action.payload);
      return action.payload;
    case "ADD": {
      // creating new todo object and passing in state
      if (!action.payload.trim()) {
        alert("Please enter a todo");
        return state;
      }
      const newTodo = { name: action.payload, isChecked: false };
      return [...state, newTodo];
    }
    case "TOGGLE": {
      //mapping through state and returning a new array with the toggled todo
      const toggledTodo = state.map(({ name, isChecked }) => {
        if (name === action.payload) {
          return { name, isChecked: !isChecked };
        }
        return { name, isChecked }; //if name is not equal to action.payload, return the todo object as is.
      });
      return toggledTodo;
    }
    case "DELETE": {
      //filtering through state and returning a new array without the todo passed as arg
      const filteredTodo = state.filter(({ name }) => name !== action.payload);
      return filteredTodo;
    }
  }
};

export const AppContextProvider = ({ children }) => {
  //reducer
  const [todoData, dispatch] = useReducer(reducer, initialState);

  //load on start
  useEffect(() => {
    const loadTodoData = async () => {
      try {
        const data = await AsyncStorage.getItem("todos");
        if (data) {
          dispatch({ type: "LOAD_TODOS", payload: JSON.parse(data) });
        }
      } catch (error) {
        console.log("Error loading todos:", error);
      }
    };
    loadTodoData();
  }, []);

  //save on change
  useEffect(() => {
    const saveTodoData = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todoData));
      } catch (error) {
        console.log("Error saving todos:", error);
      }
    };
    saveTodoData();
  }, [todoData]);

  //functions to pass type and payload to reducer
  const handleAdd = (todo) => dispatch({ type: "ADD", payload: todo });
  const handleToggle = (name) => dispatch({ type: "TOGGLE", payload: name });
  const handleDelete = (name) => dispatch({ type: "DELETE", payload: name });

  //pass updated value to context on dependency change
  const value = useMemo(() => {
    return {
      todoData,
      handleAdd,
      handleToggle,
      handleDelete,
    };
  }, [todoData]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//custom hook to use context
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
