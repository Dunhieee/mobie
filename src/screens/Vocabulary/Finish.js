/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';;
import {useRoute} from '@react-navigation/native';
import Home from '../Home';
import { ProgressBar } from 'react-native-paper';

export default function Finish({navigation}) {
  const percentCompleted = 40; // 10% bài học đã học
  const wordsLearned = 2; // 1 từ đã học
  const totalWords = 5; // Tổng số từ cần học
  const time = 1;

  const languages = [
    {code: 'en', flag: '../../assets/Images/flag/vn.webp', name: 'Dễ'},
    {code: 'fr', flag: '../../assets/Images/flag/vn.webp', name: 'Trung bình'},
    {code: 'es', flag: '../../assets/Images/flag/vn.webp', name: 'Khó'},
    {code: 'de', flag: '../../assets/Images/flag/vn.webp', name: 'Rất khó'},
    // {code: 'de', flag: '../../assets/Images/flag/vn.webp', name: 'German'},
  ];
  const [value1, setValue1] = React.useState(null);
  // const {id} = navigation.params;
  // const route = useRoute();
  // const {id} = route.params;
  const handleButtonPress = page => {
    
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };

  // console.log(id);
  //   const {itemId, otherParam} = route.params;
  //   console.log(JSON.stringify(itemId));

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
      
      {/* <View style={styles.select}>
        
      </View> */}
      <View style={styles.start}>
        <Text style={{color: 'white', fontSize: 30, marginTop: 10}}> BẠN ĐÃ HOÀN THÀNH </Text>
        {/* <Text
        style={{color: 'white', fontSize: 70, marginTop: 10, fontWeight: 'bold', color:'#FF3300'}}>
          10%
        </Text> */}
        <Text
        style={{color: 'white', fontSize: 30, marginTop: 10}}>
          BÀI HỌC HÔM NAY
        </Text>
        <View style={{ 
            display: 'flex',
            // flex: 1, 
            justifyContent: 'center',
            alignItems: 'center', 
            
            // height: 300, 
          }}>
            <View style={{ marginBottom: 20, marginTop: 40, }}>
              <Text style={styles.text}>Bài học đã học: {percentCompleted}%</Text>
              <ProgressBar progress={percentCompleted / 100} width={200} />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.text}>Số từ đã học: {wordsLearned}/{totalWords}</Text>
              <ProgressBar progress={wordsLearned / totalWords} width={200} />
            </View>
            <View style={{ marginTop:0 }}>
              <Text style={styles.text}>Số giờ đã học: {time} / 2</Text>
              <ProgressBar progress={time / 2} width={200} />
            </View>
          </View>
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        </View>
      </View>
      <View
        style={{
          height: '22%',
          display: 'flex',
          justifyContent: 'flex-end',
          // marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress(Home)}>
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
    marginBottom: 10,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '400',
    fontSize: 15,

  }
});
