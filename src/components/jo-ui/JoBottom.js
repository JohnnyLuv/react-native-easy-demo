import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

export default Mybottom = ({ text = '确 定', disabled = false, onPress }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={disabled ? style.btnSubmitDisabled : style.btnSubmit}>
        <Text style={disabled ? style.innerTextDisabled : style.innerText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  btnSubmit: { height: 45, backgroundColor: '#FD3337', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  btnSubmitDisabled: { height: 45, backgroundColor: '#3D3835', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  innerText: { fontSize: 15, color: '#fff' },
  innerTextDisabled: { fontSize: 15, color: '#8A939E' },
})