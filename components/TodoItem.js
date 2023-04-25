import { View, Text } from 'react-native'
import React from 'react'

const TodoItem = ({children}) => {
  return (
    <View className='bg-slate-800 p-4 rounded-lg shadow-md my-2'>
      <Text className='text-white'>{children}</Text>
    </View>
  )
}

export default TodoItem