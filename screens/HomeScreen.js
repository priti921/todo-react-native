import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import TodoItem from '../components/TodoItem';

let data = ['Eat','Sleep', 'Code']

const HomeScreen = () => {
  return (
    <ScrollView className="px-5 py-16 bg-white">
      {
        data.map((item, index) => <TodoItem key={index} children={item} />)
      }
      
    </ScrollView>
  );
};

export default HomeScreen;