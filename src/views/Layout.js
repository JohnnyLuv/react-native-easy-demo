import React from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Assets from './Assets'
import Center from './Center'

const Tab = createBottomTabNavigator()
const Layout = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Assets" component={Assets} />
        <Tab.Screen name="Center" component={Center} />
      </Tab.Navigator>
    </>
  )
}

export default Layout