import { View, TextInput, Pressable } from 'react-native'
import React, { useState} from 'react'
import { useAppContext } from '../data/context';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const InputTodo = () => {
    const { handleAdd } = useAppContext();

      //state for todo data and textInput value
  const [text, setText] = useState("");
  return (
    <View className="flex-row items-center justify-between mx-5 mt-5">
    <TextInput
      onChangeText={setText} //set state on change
      value={text} //get state value
      placeholder="Add Todo"
      placeholderTextColor="#808080" 
      keyboardType="default"
      className="bg-gray-900 rounded-lg flex-1 mr-1 px-5 py-2 border-8 text-white placeholder:italic"
    />
    {/*add button*/}
    <Pressable
      onPress={()=>{
        handleAdd(text)
        setText("")
      }}
      className="bg-black rounded-lg px-2 py-2 border-8"
    >
      <MaterialIcons name="add" size={30} color="white" />
    </Pressable>
  </View>
  )
}

export default InputTodo