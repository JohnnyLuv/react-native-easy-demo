import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native'

export default Home = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView style={style.wrap}>

          <Text style={style.text}>Home Page</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  text: {
    color: '#fff'
  }
})