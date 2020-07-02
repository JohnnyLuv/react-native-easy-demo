import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native'

export default Center = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={style.text}>Center Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  text: {
    color: '#fff'
  }
})