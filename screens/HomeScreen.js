import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  return (
    <ScrollView className="px-5 py-16 bg-cyan-100">
      <TodoItem>todo</TodoItem>
      <TodoItem>todo</TodoItem>
      <TodoItem>todo</TodoItem>
    </ScrollView>
  );
};

export default HomeScreen;