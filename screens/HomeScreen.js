import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable } from 'react-native';
import React,{useState} from 'react';
import TodoItem from '../components/TodoItem';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HomeScreen = () => {

  const [data, setData] = useState(['Eat','Sleep', 'Code']);
  const [text, setText] = useState('');

  const handleDelete = (item)=>{
    const newData = data.filter((val) => val !== item);
    setData(newData);
    console.log(newData);
  }

  const handleAdd = ()=>{
    setData([...data, text]);
    setText('');
  }
  return (
    <View className="bg-white h-full">
    <View className="flex-row items-center justify-between mx-5 mt-5">
    <TextInput
        onChangeText={setText}
        value={text}
        placeholder="Add Todo"
        keyboardType="default"
        className="bg-gray-100 rounded-lg flex-1 mx-1 px-5 py-2"
      />
      <Pressable onPress={handleAdd} className="bg-gray-100 rounded-lg px-2 py-2">
        <MaterialIcons name="add" size={30} color="black" />
      </Pressable>

    </View>
    <ScrollView className="px-5 py-8 bg-white">
      {
        data.map((item, index) => <TodoItem key={index} children={item} handleDelete={()=>handleDelete(item)}/>)
      }
      
    </ScrollView>
      </View>
  );
};

export default HomeScreen;