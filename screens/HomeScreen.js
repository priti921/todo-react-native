import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  return (
    <ScrollView className="px-10 py-16 bg-white">
      <TodoItem>todo</TodoItem>
    </ScrollView>
  );
};

export default HomeScreen;