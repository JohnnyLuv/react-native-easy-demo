import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TextInput } from 'react-native'
import { JoButtom } from '../components/jo-ui'

export default SignIn = ({ navigation }) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  function submitHandle() {
    console.log(account, password)
    navigation.navigate('Layout')
  }

  useEffect(() => {
    console.log('enter')
  }, [])

  return (
    <>
      <SafeAreaView>
        <View style={style.headerBar}>
          <Text style={style.headerBarRightText}>注册</Text>
        </View>
        <View style={style.container}>
          <Text style={style.title}>登录</Text>
          <View style={style.form}>
            <View style={style.formItem}>
              <TextInput style={style.ipt} onChangeText={value => setAccount(value)} placeholder='请输入手机/邮箱' placeholderTextColor='#E6E6E6' />
            </View>
            <View style={{ ...style.formItem, marginTop: 30 }}>
              <TextInput style={style.ipt} onChangeText={value => setPassword(value)} secureTextEntry={true} placeholder='密码' placeholderTextColor='#E6E6E6' />
            </View>
          </View>
          <JoButtom disabled={!account || !password} onPress={submitHandle} style={{ marginTop: 40 }} />
        </View>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  headerBar: { height: 44, flexDirection: 'row', justifyContent: 'flex-end' },
  headerBarRightText: { fontSize: 14, color: '#F8E4C2', padding: 16 },
  container: { paddingLeft: 30, paddingRight: 30 },
  title: { fontSize: 25, fontWeight: '600', color: '#F8E4C2', marginTop: 30 },
  form: { paddingTop: 100 },
  formItem: { borderBottomWidth: 1, borderBottomColor: '#808080' },
  ipt: { height: 50, fontSize: 14, color: '#E6E6E6' },
})