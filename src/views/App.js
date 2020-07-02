import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import SignIn from './SignIn'
import Layout from './Layout'

export default App = () => {
  const theme = {
    // dark: true,
    colors: {
      primary: '#E6E6E6',
      background: '#19100F',
      // card: string,
      text: '#E6E6E6',
      // border: string,
    }
  }

  return (
    <NavigationContainer theme={theme}>
      {/* Rest of your app code */}
      <StatusBar barStyle='light-content' />
      <Stack.Navigator initialRouteName='SignIn' headerMode='none'>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Layout' component={Layout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}