import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Todo = ()=>{
    return(
        <View style={styles.container}>
            <BouncyCheckbox
  size={30}
  fillColor="red"
  unfillColor="#FFFFFF"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular", color: "white" }}
//   onPress={(isChecked: boolean) => {}}
/>

        </View>
    )
}

export default Todo;


const styles = StyleSheet.create({
    container: {
        // height: 30,
        // backgroundColor: '#222831',
        // padding:20,
        // marginBottom:20,
    }
})