import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'

export default Mine = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.common.wrap}>
        <View style={style.user.cover}>
          <Image style={style.user.avatar} source={require('../assets/image/Mine/avatar.png')} />
          <View style={style.user.info}>
            <Text style={style.user.account}>13788888888</Text>
            <View style={style.user.state}>
              <Image style={style.user.vipTag} source={require('../assets/image/Mine/icon-vip.png')} />
              <Text style={style.user.vipDate}>2020-05-06 到期</Text>
            </View>
          </View>
          <TouchableOpacity style={style.user.btnBuy}>
            <Text style={style.user.btnBuyText}>续费会员</Text>
          </TouchableOpacity>
        </View>

        <View style={{ ...style.menu.item, borderRadius: 5, marginTop: 45, }}>
          <Image style={style.menu.icon} source={require('../assets/image/Mine/icon-yqhy.png')} />
          <Text style={style.menu.text}>邀请好友</Text>
          <Text style={style.menu.iconEnter}>&gt;</Text>
        </View>

        <View style={{ ...style.menu.item, borderRadius: 5, marginTop: 15, marginBottom: 15, }}>
          <Image style={style.menu.icon} source={require('../assets/image/Mine/icon-zfmm.png')} />
          <Text style={style.menu.text}>支付密码</Text>
          <Text style={style.menu.subText}>未设置</Text>
          <Text style={style.menu.iconEnter}>&gt;</Text>
        </View>

        <View style={{ ...style.menu.item, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
          <Image style={style.menu.icon} source={require('../assets/image/Mine/icon-gywm.png')} />
          <Text style={style.menu.text}>关于我们</Text>
          <Text style={style.menu.iconEnter}>&gt;</Text>
        </View>
        <View style={style.menu.item}>
          <Image style={style.menu.icon} source={require('../assets/image/Mine/icon-lxwm.png')} />
          <Text style={style.menu.text}>联系我们</Text>
          <Text style={style.menu.iconEnter}>&gt;</Text>
        </View>
        <View style={{ ...style.menu.item, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
          <Image style={style.menu.icon} source={require('../assets/image/Mine/icon-jcgx.png')} />
          <Text style={style.menu.text}>检查更新</Text>
          <Text style={style.menu.subText}>当前 V1.04</Text>
          <View style={style.menu.newTag} />
          <Text style={style.menu.iconEnter}>&gt;</Text>
        </View>

        <TouchableOpacity style={style.signOut.btn}>
          <Text style={style.signOut.text}>退出登录</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

const style = {
  common: StyleSheet.create({
    wrap: { height: '100%', paddingLeft: 15, paddingRight: 15, },
  }),

  user: StyleSheet.create({
    cover: { flexDirection: 'row', alignItems: 'center', marginTop: 40, },
    avatar: { width: 60, height: 60, },
    info: { flex: 1, marginLeft: 7, },
    account: { fontSize: 20, fontWeight: '500', color: '#E6E6E6', },
    state: { flexDirection: 'row', alignItems: 'center', marginTop: 5, },
    vipTag: { width: 68, height: 14 },
    vipDate: { fontSize: 12, color: '#F1C26E' },
    btnBuy: { width: 85, height: 34, backgroundColor: '#A89265', borderRadius: 34, alignItems: 'center', justifyContent: 'center' },
    btnBuyText: { fontSize: 15, color: '#fff', },
  }),

  menu: StyleSheet.create({
    item: { height: 60, backgroundColor: '#201E1E', flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, },
    icon: { width: 25, height: 25, },
    text: { flex: 1, fontSize: 16, fontWeight: '600', color: '#F8E4C2', marginLeft: 15, },
    subText: { fontSize: 12, color: '#E6E6E6' },
    newTag: { width: 5, height: 5, backgroundColor: '#FA4137', borderRadius: 5, marginLeft: 5 },
    iconEnter: { fontSize: 20, color: '#E6E6E6', marginLeft: 17 },
  }),

  signOut: StyleSheet.create({
    btn: { height: 43, backgroundColor: '#201E1E', borderRadius: 7, alignItems: 'center', justifyContent: 'center', marginTop: 15, },
    text: { fontSize: 15, fontWeight: '600', color: '#E6E6E6' },
  }),

}
