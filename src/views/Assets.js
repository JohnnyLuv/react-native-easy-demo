import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native'

export default Assets = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={style.text}>Assets Page</Text>
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