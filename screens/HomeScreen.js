import {
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

/* 
TODO: Add storage system
*/



const HomeScreen = () => {
  //state for todo data and textInput value
  const [data, setData] = useState(["Eat", "Sleep", "Code"]);
  const [text, setText] = useState("");

  //deletes the item selected
  const handleDelete = (item) => {
    const newData = data.filter((val) => val !== item); //filter out the item
    setData(newData); //replacing with new data
    console.log(newData);
  };

  //Adds new todo data
  const handleAdd = () => {
    setData([...data, text]); //adding new data
    setText(""); // setting textInput value to empty
  };
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
        <Pressable
          onPress={handleAdd}
          className="bg-gray-100 rounded-lg px-2 py-2"
        >
          <MaterialIcons name="add" size={30} color="black" />
        </Pressable>
      </View>
      <ScrollView className="px-5 py-8 bg-white">
        {data.map((item, index) => (
          <TodoItem
            key={index}
            children={item}
            handleDelete={() => handleDelete(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
