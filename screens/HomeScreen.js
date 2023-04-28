import { View, ScrollView, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAppContext } from "../data/context";

/* 
TODO: Add storage system
*/

const HomeScreen = () => {
  const { todoData, handleAdd, handleDelete, handleToggle } = useAppContext();
  // console.log(todoData);

  //state for todo data and textInput value
  const [text, setText] = useState("");


  return (
    <View className="bg-white h-full">
      <View className="flex-row items-center justify-between mx-5 mt-5">
        <TextInput
          onChangeText={setText} //set state on change
          value={text} //get state value
          placeholder="Add Todo"
          keyboardType="default"
          className="bg-gray-100 rounded-lg flex-1 mx-1 px-5 py-2"
        />
        {/*add button*/}
        <Pressable
          onPress={()=>{
            handleAdd(text)
            setText("")
          }}
          className="bg-gray-100 rounded-lg px-2 py-2"
        >
          <MaterialIcons name="add" size={30} color="black" />
        </Pressable>
      </View>

      <ScrollView className="px-5 py-8 bg-white">
        {todoData.map((item, index) => (
          <TodoItem key={index} todo={item} handleDelete={handleDelete} handleToggle={handleToggle}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
