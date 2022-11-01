import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Orders = ({navigation}) => {
  return (
    <View>
      <Text>Orders</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("checkout")}><Text>but</Text></TouchableOpacity>
    </View>
  )
}

export default Orders