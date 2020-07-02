import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default Assets = () => {
  return (
    <>
      <View style={style.center}>
        <Text>Assets Page</Text>
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