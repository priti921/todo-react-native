import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TodoItem = ({ todo, handleDelete, handleToggle }) => {
  const { name, isChecked } = todo;

  return (
    <View className="bg-black p-4 rounded-md shadow-2xl my-2 flex-row align-center items-center">
      <Checkbox
        value={isChecked}
        onValueChange={() => handleToggle(name)}
        className="p-2 mr-5"
        color={isChecked ? "black" : "white"}
      />
      <Text
        className={`text-white text-xl tracking-widest ${
          isChecked ? "line-through italic" : ""
        }`}
      >
        {name}
      </Text>
      {/* show delete button if checkbox is checked */}
      {isChecked ? (
        <Pressable className="ml-auto">
          <MaterialIcons
            name="delete"
            size={24}
            color="white"
            onPress={() => handleDelete(name)}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default TodoItem;
