import { View, Text } from 'react-native'
import React from 'react'

const TodoItem = ({children}) => {
  return (
    <View className='bg-slate-800 p-4 rounded-md shadow-2xl my-2'>
      <Text className='text-white text-xl'>{children}</Text>
    </View>
  )
}

export default TodoItem