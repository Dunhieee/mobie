import React from 'react'
import { Image, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent :'center',  paddingTop: 30,}}>
      <View style={{width: '80%', paddingLeft: 10}}>
         <Text style={{fontSize:24, color: 'white'}}>Hello Dung Nhi!!!</Text>
         <Text style={{fontSize:12, color: 'white'}}>Hôm nay bạn bạn muốn học gì?</Text>
      </View>
      <View style={{width: '20%'}}>
      <Image
        style={{height: 60, width: 60}}
        source={require('../assets/Icons/ava.png')}
        />
      </View>
    </View>
  )
}
