import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Study_Result = ({navigation}) => {
  const percentCompleted = 44; // 10% bài học đã học
  const wordsLearned = 200; // 1 từ đã học
  const totalWords = 1000; // Tổng số từ cần học
  const time = 56;

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
      {/* <Header style={styles.header} /> */}
      <Header style={styles.header} />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          KẾT QUẢ HỌC TẬP
        </Text>
      </View>
          <View style={{ 
            display: 'flex',
            // flex: 1, 
            justifyContent: 'center',
            alignItems: 'center', 
            height: 300, 
          }}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.text}>Bài học đã học: {percentCompleted}%</Text>
              <ProgressBar progress={percentCompleted / 100} width={200} />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.text}>Số từ đã học: {wordsLearned}/{totalWords}</Text>
              <ProgressBar progress={wordsLearned / totalWords} width={200} />
            </View>
            <View style={{ marginTop:0 }}>
              <Text style={styles.text}>Số giờ đã học: {time} / 120</Text>
              <ProgressBar progress={time / 120} width={200} />
            </View>
          </View>
          <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
            height: '22%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            

        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{color: 'white'}}> DONE</Text>
        </TouchableOpacity>
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
};
const styles = StyleSheet.create({
  select: {
    paddingTop: 50,
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
  text: {
    color: 'white',
    fontWeight: '400',
    fontSize: 15,

  }
});

export default Study_Result;
