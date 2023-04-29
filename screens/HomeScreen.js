import { View, ScrollView } from "react-native";
import React from "react";
import { useAppContext } from "../data/context";
import TodoItem from "../components/TodoItem";
import InputTodo from "../components/InputTodo";

/* 
TODO: Add storage system
*/

const HomeScreen = () => {
  const { todoData, handleDelete, handleToggle } = useAppContext();


  return (
    <View className="bg-cyan-500 h-full">
      
      {/* input todo */}
     <InputTodo/>

      {/* todo */}
      <ScrollView className="px-5 py-8 bg-cyan-500">
        {todoData.map((item, index) => (
          <TodoItem key={index} todo={item} handleDelete={handleDelete} handleToggle={handleToggle}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
