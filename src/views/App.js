import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import SignIn from './SignIn'
import Layout from './Layout'

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Layout' component={Layout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App