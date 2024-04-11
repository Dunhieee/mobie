import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Notice from '../screens/Notice/Notice';
import Study_Result from '../screens/Processing/Study_Result';
import Home from '../screens/Home';

export default function Menu({navigation}) {
  const handleButtonPress = (page) => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(Notice)}
        >
         <Image
      style={{height: 40, width: 40}}
      source={require('../assets/Icons/chat.png')}
      />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(Notice)}
        >
         <Image
      style={{height: 40, width: 40}}
      source={require('../assets/Icons/noti.png')}
      />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(Home)}
        >
         <Image
      style={{height: 40, width: 40}}
      source={require('../assets/Icons/home.png')}
      />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(Notice)}
        >
         <Image
      style={{height: 40, width: 40}}
      source={require('../assets/Icons/setting.png')}
      />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(Study_Result)}
        >
         <Image
      style={{height: 40, width: 40}}
      source={require('../assets/Icons/profile.png')}
      />
        </TouchableOpacity>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6949FF',
    position: 'absolute',
    bottom: 0,
    // flex: 1, 
    flexDirection: 'row', 
    justifyContent :'center',  
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    // color:'',
    width: '100%',
    // paddingLeft: 10,
  },
  button: {
    paddingHorizontal: 15
  }

})