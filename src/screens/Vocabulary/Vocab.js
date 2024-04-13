/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';;
import Vocab_2 from './Vocab_2';
import { useNavigation} from '@react-navigation/native';
import data from '../../data'
export default function Vocab({page,mucdo,goitu,chude}) {
  const navigation= useNavigation();
  const [data1,setData1]=useState()
  const handleButtonPress = () => {
    
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate("Vocab_2");
  };

  //   const {itemId, otherParam} = route.params;
  //   console.log(JSON.stringify(itemId));
//   useEffect(()=>{
    
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data[page]}`);
//         const json = await response.json();
//         console.log({res:json[0]})
//        setData1(json[0])
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData()
// },[page])
useEffect(()=>{
    
  const fetchData = async () => {
    console.log({page,mucdo,goitu,chude})
    try {
      const response = await fetch(`http://192.168.0.33:5000/api/vocabulary/getvocabulary?page=${page}&mucdo=${mucdo}&goitu=${goitu}&chude=${chude}`);
      const json = await response.json();
      console.log({res12345:json?.response})
     setData1(json?.response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData()
},[page])
console.log({data1})
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
      
      <View style={styles.select}>
        <View
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // paddingBottom: 80,
        }}>
          <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: '120%',
            width: '60%',
            borderRadius: 10,
            // paddingBottom: 80,
          }}>
            <Image
                style={{height: 200, width: 200, resizeMode: 'contain'}}
                source={require('../../assets/Images/Pic_Vocab/Apple.png')}
                />
              <View style={{ position: 'absolute', top: 20, right: 10 }}>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={{uri:data1?.image}}
                />
              </View>
            <Text
            style={{

              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 50,

            }}>
              {data1?.word}
            </Text>
          </View>
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
          onPress={() => handleButtonPress(Vocab_2)}>
          <Text style={{color: 'white'}}> NEXT</Text>
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
});
