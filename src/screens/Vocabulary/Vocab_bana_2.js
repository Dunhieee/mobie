/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';;
import {useRoute} from '@react-navigation/native';
import Finish from './Finish';
import Vocab from './Vocab';

export default function Vocab_bana_2({navigation}) {
 
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
            alignItems: 'center',
            backgroundColor: 'white',
            height: '120%',
            width: '60%',
            borderRadius: 10,
            // paddingBottom: 80,
          }}>
            <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}>
            <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>apple[ˈæpl]
             </Text>
            <View style={{ position: 'absolute', top: 20, right: 10 }}>
              <Image
                style={{ height: 30, width: 30 }}
                source={require('../../assets/Icons/sound.png')}
              />
            </View>
           
                <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                danh từ
                </Text>
                <Text
                 style={{
                  color: '#9933CC',
                  paddingTop: 5,
                }}>
                quả táo
                </Text>
                <Text
                style={styles.sentense}>
                apple of discord
                </Text>
                <Text style={styles.mean}>
                mối bất hoà
                </Text>
                <Text style={styles.sentense}>
                apple of the eye
                </Text>
                <Text style={styles.mean}>
                đồng tử, con ngươi
                </Text>
                <Text style={styles.mean}>
                vật quí báu phải giữ gìn nhất
                </Text>
                <Text style={styles.sentense}>
                the apple of Sodom ; Dead Sea apple
                </Text>
                <Text style={styles.mean}>
                quả táo trông mã ngoài thì đẹp nhưng trong đã thối
                </Text>
                <Text style={styles.mean}>
                (nghĩa bóng) thành tích bề ngoài, thành tích giả tạo
                </Text>
                <Text style={styles.sentense}>
                the rotten apple injures its neighbours
                </Text>
                <Text style={styles.mean}>
                (tục ngữ) con sâu làm rầu nồi canh
                </Text>
            </View>
           
          </View>
        </View>
      </View>
      
<View
        style={{
          height: '22%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress(Finish)}>
          <Text style={{color: 'white'}}> FINISH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style      ={styles.button1}
          onPress={() => handleButtonPress(Vocab)}>
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
    margin: 10,
    width: '40%',
    color: 'white',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'flex-end',
      marginTop: 100,
    alignItems: 'center',
  },
  mean:{
    paddingTop: 5,
  },
  sentense:{
    color: '#0099FF',
    paddingTop: 5,
  },
});
