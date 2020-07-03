import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Assets from './Assets'
import Mine from './Mine'

const Tab = createBottomTabNavigator()
export default Layout = ({ navigation }) => {

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      // You can return any component that you like here!
      switch (route.name) {
        case '首页':
          return focused
            ? <Image source={require('../assets/image/bottom-bar/home2.png')} style={{ width: size, height: size }} />
            : <Image source={require('../assets/image/bottom-bar/home1.png')} style={{ width: size, height: size }} />
        case '资产':
          return focused
            ? <Image source={require('../assets/image/bottom-bar/assets2.png')} style={{ width: size, height: size }} />
            : <Image source={require('../assets/image/bottom-bar/assets1.png')} style={{ width: size, height: size }} />
        case '我的':
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
    style: { backgroundColor: '#2E2B2B' }, // 包含安全区背景色
  }

  return (
    <>
      <Tab.Navigator initialRouteName='我的' screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
        <Tab.Screen name="首页" component={Home} />
        <Tab.Screen name="资产" component={Assets} />
        <Tab.Screen name="我的" component={Mine} />
      </Tab.Navigator>
    </>
  )
}
