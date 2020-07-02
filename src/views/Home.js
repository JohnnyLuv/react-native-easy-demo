import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Image, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'
import { JoBottom } from '../components/jo-ui'

export default Home = () => {
  const swiperConfig = {
    autoplay: true,
    dot: <View style={{ backgroundColor: '#616160', width: 4, height: 3, borderRadius: 4, margin: 3 }} />,
    activeDot: <View style={{ backgroundColor: '#FD3337', width: 11, height: 3, borderRadius: 4, margin: 3 }} />,
    paginationStyle: { bottom: 10 },
  }

  const menuList = [
    { icon: require('../assets/image/home/icon-yq.png'), text: '邀请好友' },
    { icon: require('../assets/image/home/icon-cb.png'), text: '充币' },
    { icon: require('../assets/image/home/icon-sd.png'), text: '闪兑' },
    { icon: require('../assets/image/home/icon-sy.png'), text: '收益' },
  ]


  return (
    <SafeAreaView>
      <ScrollView style={style.common.wrap}>
        <Text style={style.common.title}>首页</Text>

        <Swiper style={style.swiper.cover}  {...swiperConfig}>
          <Image style={style.swiper.item} source={require('../assets/image/banner/banner1.jpg')} />
          <Image style={style.swiper.item} source={require('../assets/image/banner/banner2.jpeg')} />
          <Image style={style.swiper.item} source={require('../assets/image/banner/banner1.jpg')} />
        </Swiper>


        <View style={style.menu.cover}>
          {menuList.map(item => (
            <View style={style.menu.item} key={item.text}>
              <Image style={style.menu.icon} source={item.icon} />
              <Text style={style.menu.text}>{item.text}</Text>
            </View>
          ))}
        </View>

        <View style={style.price.cover}>
          <LinearGradient style={style.price.border} colors={['#FFF4D7', '#322929']}>
            <View style={style.price.inner}>
              <Image style={style.price.logo} source={require('../assets/image/home/icon-logo.png')} />
              <View style={style.price.text}>
                <Text style={style.price.before}>最新价</Text>
                <Text style={style.price.num}>0.86</Text>
                <Text style={style.price.after}>USDT</Text>
              </View>
              <View style={{ width: 145, marginTop: 20, }}><JoBottom text='发圈领PB' /></View>
            </View>
          </LinearGradient>
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

  swiper: StyleSheet.create({
    cover: { height: 120, marginTop: 10, },
    item: { width: '100%', height: 120, borderRadius: 10 },
  }),

  menu: StyleSheet.create({
    cover: { flexDirection: "row", justifyContent: 'space-around', marginTop: 30 },
    item: { alignItems: 'center' },
    icon: { width: 47, height: 47 },
    text: { fontSize: 12, color: '#E6E6E6', marginTop: 10 },
  }),

  price: StyleSheet.create({
    cover: { marginTop: 30, justifyContent: 'center', alignItems: 'center', },
    border: { width: 320, height: 320, backgroundColor: '#151515', borderRadius: 320, justifyContent: 'center', alignItems: 'center', },
    inner: { width: 300, height: 300, backgroundColor: '#151515', borderRadius: 300, justifyContent: 'center', alignItems: 'center', },
    logo: { width: 57, height: 20, },
    text: { flexDirection: 'row', alignItems: 'baseline', marginTop: 20, },
    before: { fontSize: 14, color: '#E6E6E6' },
    num: { fontSize: 40, color: '#FD3337', marginLeft: 5, marginRight: 5, },
    after: { fontSize: 18, color: '#FD3337' },
  }),
}
