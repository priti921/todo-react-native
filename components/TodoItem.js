import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

//add checkbox [done]
//add delete button

const TodoItem = ({ children, handleDelete }) => {
  //sets state for checkbox
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className="bg-black p-4 rounded-md shadow-2xl my-2 flex-row align-center items-center">
      <Checkbox
        value={isChecked}
        onValueChange={() => setIsChecked(!isChecked)}
        className="p-2 mr-5"
        color={isChecked ? "black" : "white"}
      />
      <Text
        className={`text-white text-xl tracking-widest ${
          isChecked ? "line-through italic" : ""
        }`}
      >
        {children}
      </Text>
      {/* show delete button if checkbox is checked */}
      {isChecked ? (
        <Pressable className="ml-auto">
          <MaterialIcons
            name="delete"
            size={24}
            color="white"
            onPress={handleDelete}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default TodoItem;
