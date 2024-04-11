/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';;
import {useRoute} from '@react-navigation/native';
import Vocab_2 from './Vocab_2';
import Vocab_bana_2 from './Vocab_bana_2';

export default function Vocab_bana({navigation}) {
 
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
                source={require('../../assets/Images/Pic_Vocab/banana.png')}
                />
              <View style={{ position: 'absolute', top: 20, right: 10 }}>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require('../../assets/Icons/yellow_star.png')}
                />
              </View>
            <Text
            style={{

              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 50,

            }}>Apple
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
          onPress={() => handleButtonPress(Vocab_bana_2)}>
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
