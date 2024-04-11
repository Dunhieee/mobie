/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';;
import {useRoute} from '@react-navigation/native';
import Home from '../Home';
import Starting from '../Vocabulary/Starting';

export default function SelectDay({navigation}) {
  
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
      {/* <View style={styles.start}>
        <Text style={{color: 'white', fontSize: 30, marginTop: 10}}> BẠN ĐÃ HOÀN THÀNH</Text>
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        </View>
      </View> */}
      <View> 

      </View>
    <View style={styles.select}>
        <View
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 30,

          // paddingBottom: 80,
        }}>
          <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#555555',
            height: '150%',
            width: '100%',
            borderRadius: 10,
            // paddingBottom: 80,
          }}>
            {/* <Image
                style={{height: 200, width: 200, resizeMode: 'contain'}}
                source={require('../../assets/Images/Pic_Vocab/Apple.png')}
                />
              <View style={{ position: 'absolute', top: 20, right: 10 }}>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require('../../assets/Icons/yellow_star.png')}
                />
              </View> */}
                <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 10, 
                    left: 10,
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                }}
                  onPress={() => handleButtonPress(Home)}>
                  <Image
                    style={{height: 30, width: 30, resizeMode: 'contain', transform: [{ scaleX: -1 }] }}
                    source={require('../../assets/Icons/arrow_right.png')}
                  />
                  <Text
                  style={{
                      fontSize : 15,
                      fontWeight: 'bold',
                      color: '#483D8B'
                  }}>
                      Quay lại
                  </Text>
                </TouchableOpacity>
                
           
            
            <View
                style = {{
                    position: 'absolute',
                    top : 10,
                
                }}>
                <Text
                    style={{
                        fontSize : 20,
                        fontWeight: 'bold',
                        color: 'white',
                      
                    }}
                >
                    Thông báo
                </Text>
            </View>
                
                
                  <View style={{ 
                      // position: 'absolute', 
                      left: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems:'center',
                      borderBottomColor: '#737373',
                      borderBottomWidth: 1.5,
                      marginTop: -200,
                      }}>
                    <Image
                      style={{ height: 30, width: 30}}
                      
                      source={require('../../assets/Icons/calendar.png')}
                    />
                    <Text
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      fontSize: 18,
                      color: '#483D8B',
                      marginVertical: 20,
                      
                    }}>
                      Bạn có lịch học vào lúc 19h00
                    </Text>
                    <Text
                    style={{ marginLeft: 10, marginRight: 10, color: 'white'}}>
                      18 : 45
                    </Text>
                  </View>

                  <View style={{ 
                      // position: 'absolute', 
                      left: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems:'center',
                      borderBottomColor: '#737373',
                      borderBottomWidth: 1.5,
                      
                      }}>
                    <Image
                      style={{ height: 30, width: 30}}
                      
                      source={require('../../assets/Icons/calendar.png')}
                    />
                    <Text
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      fontSize: 18,
                      color: '#483D8B',
                      marginVertical: 20,
                      
                    }}>
                      Bạn có lịch học vào lúc 19h00
                    </Text>
                    <Text
                    style={{ marginLeft: 10, marginRight: 10, color: 'white'}}>
                      18 : 45
                    </Text>
                  </View>  

                  <View style={{ 
                      // position: 'absolute', 
                      left: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems:'center',
                      borderBottomColor: '#737373',
                      borderBottomWidth: 1.5,
                      
                      }}>
                    <Image
                      style={{ height: 30, width: 30}}
                      
                      source={require('../../assets/Icons/calendar.png')}
                    />
                    <Text
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      fontSize: 18,
                      color: '#483D8B',
                      marginVertical: 20,
                      
                    }}>
                      Bạn có lịch học vào lúc 19h00
                    </Text>
                    <Text
                    style={{ marginLeft: 10, marginRight: 10, color: 'white'}}>
                      18 : 45
                    </Text>
                  </View> 
                    
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
});
