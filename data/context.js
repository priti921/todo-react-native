import {
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

//initial state
const initialState = [
  { name: "First Todo", isChecked: false },
  { name: "second todo", isChecked: true },
];

//initial placeholder functions
const stateModifiers = {
  handleAdd: ()=> {},
  handleToggle: ()=> {},
  handleDelete: ()=> {}
}

//creating context
const AppContext = createContext({ initialState,  
 ...stateModifiers});

 //reducer function for state management
const reducer = (state, action) => {

  switch(action.type){
    case 'ADD': {
      // creating new todo object and passing in state
      const newTodo = { name: action.payload, isChecked: false }
      return [...state, newTodo]
    }
    case 'TOGGLE': {
      //mapping through state and returning a new array with the toggled todo
        const toggledTodo = state.map(({ name, isChecked }) => {
          if (name === action.payload) {
            return { name, isChecked: !isChecked }
          }
          return { name, isChecked } //if name is not equal to action.payload, return the todo object as is. 
        
      })
      return toggledTodo
        }
    case 'DELETE': {
      //filtering through state and returning a new array without the todo passed as arg
        const filteredTodo = state.filter(({name})=> name !== action.payload)
        return filteredTodo
        }
      }
};

export const AppContextProvider = ({ children }) => {
  //reducer 
  const [todoData, dispatch] = useReducer(reducer, initialState);

  //functions to pass type and payload to reducer
  const handleAdd = (todo)=> dispatch({type:'ADD', payload: todo})
  const handleToggle = (name)=> dispatch({type:'TOGGLE', payload: name})
  const handleDelete = (name)=> dispatch({type: 'DELETE', payload: name})

  //pass updated value to context on dependency change
  const value = useMemo(() => {
    return {
      todoData,
      handleAdd,
      handleToggle,
      handleDelete
    }
  }, [todoData]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//custom hook to use context
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
