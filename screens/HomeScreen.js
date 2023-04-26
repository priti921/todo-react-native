import { View, Text, ScrollView } from 'react-native';
import React,{useState} from 'react';
import TodoItem from '../components/TodoItem';


const HomeScreen = () => {
  const [data, setData] = useState(['Eat','Sleep', 'Code']);

  const handleDelete = (item)=>{
    const newData = data.filter((val) => val !== item);
    setData(newData);
    console.log(newData);
  }
  return (
    <ScrollView className="px-5 py-16 bg-white">
      {
        data.map((item, index) => <TodoItem key={index} children={item} handleDelete={()=>handleDelete(item)}/>)
      }
      
    </ScrollView>
  );
};

export default HomeScreen;