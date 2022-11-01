import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("smth")}><Text>ggfgg</Text></TouchableOpacity>
    </View>
  )
}

export default Home