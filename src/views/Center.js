import React from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'

export default Center = () => {
  return (
    <>
      <View style={style.center}>
        <Text>Center Page</Text>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})