import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import StatusBarPadding from '../utils/StatusBarPadding'

const Loading = () => {
  return (
    <StatusBarPadding>
    <View >
      <Text>Loading</Text>
    </View>
    </StatusBarPadding>
  )
}

export default Loading