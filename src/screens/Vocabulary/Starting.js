/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';;
import {useRoute} from '@react-navigation/native';
import Vocab from './Vocab';

export default function Starting({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Chuyển sang màn hình khác sau 2 giây
      navigation.replace('vocabulary'); // Thay 'NextScreen' bằng tên màn hình tiếp theo
    }, 1000);

    return () => clearTimeout(timer); // Xóa timer nếu component unmounted
  }, [navigation]);

  const handleButtonPress = page => {
    
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };

 
  return (
    <View
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // paddingTop: 30,
        backgroundColor: '#181A20',
        height: '100%',
        // paddingBottom: 80,
      }}>
      <Header style={styles.header} />
      
      
      <View style={styles.start}>
        <Text style={{color: 'white', fontSize: 30, marginTop: 10}}> BẮT ĐẦU</Text>
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
      
      <View
        style={{
          // paddingTop: 30,
          
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    paddingTop: 50,
    height: '50%'
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#6949FF',
    marginBottom: 10,
    width: '90%',
    color: 'white',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    //   marginTop: 50,
    alignItems: 'center',
  },
  start:{
    // paddingHorizontal: '40%',
    // paddingVertical: '50%',
    height: '50%',
    color: 'white',
    marginBottom: 60,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
});
