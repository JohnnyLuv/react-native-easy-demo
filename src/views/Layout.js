import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Assets from './Assets'
import Center from './Center'

const Tab = createBottomTabNavigator()
export default Layout = ({ navigation }) => {

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      // You can return any component that you like here!
      switch (route.name) {
        case 'Home':
          return focused
            ? <Image source={require('../assets/image/bottom-bar/home2.png')} style={{ width: size, height: size }} />
            : <Image source={require('../assets/image/bottom-bar/home1.png')} style={{ width: size, height: size }} />
        case 'Assets':
          return focused
            ? <Image source={require('../assets/image/bottom-bar/assets2.png')} style={{ width: size, height: size }} />
            : <Image source={require('../assets/image/bottom-bar/assets1.png')} style={{ width: size, height: size }} />
        case 'Center':
          return focused
            ? <Image source={require('../assets/image/bottom-bar/mine2.png')} style={{ width: size, height: size }} />
            : <Image source={require('../assets/image/bottom-bar/mine1.png')} style={{ width: size, height: size }} />
        default:
          break
      }
    },
  })
  const tabBarOptions = {
    activeTintColor: '#FD3337', // 激活的颜色
    inactiveTintColor: '#E6E6E6', // 默认的颜色
    style: { backgroundColor: '#000E28' }, // 包含安全区背景色
  }

  return (
    <>
      <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Assets" component={Assets} />
        <Tab.Screen name="Center" component={Center} />
      </Tab.Navigator>
    </>
  )
}
