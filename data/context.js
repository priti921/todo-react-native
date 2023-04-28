import {
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

const initialState = [
  { name: "First Todo", isChecked: false },
  { name: "second todo", isChecked: true },
];

const stateModifiers = {
  handleAdd: ()=> {},
  handleToggle: ()=> {},
  handleDelete: ()=> {}
}

const AppContext = createContext({ initialState,  
 ...stateModifiers});

const reducer = (state, action) => {

  switch(action.type){
    case 'ADD': {
      const newTodo = { name: action.payload, isChecked: false }
      return [...state, newTodo]
    }
case 'TOGGLE': {
     const toggledTodo = state.map(({ name, isChecked }) => {
    if (name === action.payload) {
      return { name, isChecked: !isChecked }
    }
    return { name, isChecked }
  })
  return toggledTodo
    }
case 'DELETE': {
    const filteredTodo = state.filter(({name})=> name !== action.payload)
    console.log(filteredTodo)
    return filteredTodo
    }
  }
};

export const AppContextProvider = ({ children }) => {
  const [todoData, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (todo)=> dispatch({type:'ADD', payload: todo})
  const handleToggle = (name)=> dispatch({type:'TOGGLE', payload: name})
  const handleDelete = (name)=> dispatch({type: 'DELETE', payload: name})

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

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
