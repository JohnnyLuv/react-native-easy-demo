import React from 'react'
import { StyleSheet, StatusBar, ScrollView, View, Text } from 'react-native'

export default Home = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <ScrollView style={style.wrap}>
        <Text style={style.text}>Home Page</Text>
      </ScrollView>
    </>
  )
}

const style = StyleSheet.create({
  wrap: {
    backgroundColor: '#19100F',
    paddingTop: 44
  },
  text: {
    color: '#fff'
  }
})