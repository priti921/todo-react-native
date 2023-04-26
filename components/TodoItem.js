import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
//add checkbox [done]
//add delete button

const TodoItem = ({children}) => {
  const [ isChecked, setIsChecked ] = useState(false)

  return (
    <View className='bg-black p-4 rounded-md shadow-2xl my-2 flex-row align-center items-center'>
      <Checkbox value={isChecked} onValueChange={() => setIsChecked(!isChecked)} className="p-3 mr-5" color={isChecked? 'black': 'white'}/>
      <Text className={`text-white text-xl tracking-widest ${isChecked? 'line-through italic': ''}`}>{children}</Text>
    </View>
  )
}

export default TodoItem