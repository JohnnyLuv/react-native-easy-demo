import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native'

export default Assets = () => {
  const menuList = [
    { icon: require('../assets/image/asset/icon-cb.png'), text: '充币' },
    { icon: require('../assets/image/asset/icon-zz.png'), text: '转账' },
    { icon: require('../assets/image/asset/icon-sd.png'), text: '闪兑' },
    { icon: require('../assets/image/asset/icon-sy.png'), text: '收益' },
  ]

  return (
    <SafeAreaView>
      <ScrollView style={style.common.wrap}>
        <Text style={style.common.title}>资产</Text>

        <View style={style.total.cover}>
          <View style={style.total.labelCover}>
            <Text style={style.total.label}>总资产折合（USDT）</Text>
            <Text style={style.total.icon}>eye</Text>
          </View>
          <Text style={style.total.num}>16.08</Text>
        </View>

        <View style={style.menu.cover}>
          {menuList.map(item => (
            <View style={style.menu.item} key={item.text}>
              <Image style={style.menu.icon} source={item.icon} />
              <Text style={style.menu.text}>{item.text}</Text>
            </View>
          ))}
        </View>

        <View style={style.team.list}>
          <View style={style.team.item}>
            <Text style={style.team.label}>我的团队</Text>
            <Text style={style.team.num}>8</Text>
            <Text style={style.team.iconMore}>&gt;</Text>
          </View>
          <View style={style.team.item}>
            <Text style={style.team.label}>团队业绩</Text>
            <Text style={style.team.num}>12.08</Text>
          </View>
        </View>

        <View style={style.asset.list}>
          <View style={style.asset.head}>
            <Text style={style.asset.title}>币种</Text>
            <Text style={style.asset.title}>数量</Text>
          </View>
          <View style={style.asset.item}>
            <Image style={style.asset.icon} source={require('../assets/image/asset/icon-usdt.png')} />
            <Text style={style.asset.label}>我的团队</Text>
            <Text style={style.asset.num}>8</Text>
          </View>
          <View style={style.asset.item}>
            <Image style={style.asset.icon} source={require('../assets/image/asset/icon-coin.png')} />
            <Text style={style.asset.label}>团队业绩</Text>
            <Text style={style.asset.num}>12.08</Text>
            <Text style={style.asset.tips}>1 PB ≈ 0.1 USDT</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const style = {
  common: StyleSheet.create({
    wrap: { height: '100%', paddingLeft: 15, paddingRight: 15, },
    title: { fontSize: 25, fontWeight: '600', color: '#fff', marginTop: 40, },
  }),

  total: StyleSheet.create({
    cover: { backgroundColor: '#201E1E', borderRadius: 5, paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25, marginTop: 10, },
    labelCover: { flexDirection: 'row', justifyContent: 'space-between' },
    label: { fontSize: 12, color: '#E6E6E6' },
    icon: { fontSize: 12, color: '#E6E6E6' },
    num: { fontSize: 30, fontWeight: '600', lineHeight: 42, color: '#FD3337', marginTop: 10, },
  }),

  menu: StyleSheet.create({
    cover: { flexDirection: "row", justifyContent: 'space-around', marginTop: 30 },
    item: { alignItems: 'center' },
    icon: { width: 47, height: 47 },
    text: { fontSize: 12, color: '#E6E6E6', marginTop: 10 },
  }),

  team: StyleSheet.create({
    list: { backgroundColor: '#201E1E', borderRadius: 5, paddingTop: 15, paddingBottom: 15, marginTop: 30, },
    item: { flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, },
    label: { flex: 1, fontSize: 12, color: '#E6E6E6', },
    num: { fontSize: 18, fontWeight: '600', color: '#F8E4C2', },
    iconMore: { fontSize: 18, color: '#E6E6E6', marginLeft: 15, },
  }),

  asset: StyleSheet.create({
    list: { backgroundColor: '#201E1E', borderRadius: 5, paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15, marginTop: 15, },
    head: { flexDirection: 'row', justifyContent: 'space-between', },
    title: { fontSize: 12, color: '#E6E6E6', },
    item: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', paddingTop: 15, paddingBottom: 15, },
    icon: { width: 18, height: 18, marginRight: 5, },
    label: { flex: 1, fontSize: 12, color: '#E6E6E6', },
    num: { fontSize: 18, fontWeight: '600', color: '#F8E4C2', },
    tips: { width: '100%', fontSize: 12, color: '#E6E6E6', textAlign: 'right', marginTop: 5, },
  }),
}
