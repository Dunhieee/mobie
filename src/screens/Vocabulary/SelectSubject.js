/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
// import SelectLevel from './SelectLevel';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelectSubject({navigation}) {
  const languages = [
    {code: 'fr',  name: 'Trường Học'},
    {code: 'es',  name: 'Nhà Cửa'},
    {code: 'is',  name: 'Động Vật'},
    {code: 'de',  name: 'Trái Cây'},
  ];
  const [value, setValue] = React.useState('nguPhap');
  const propsToSend = 'Hello from HomeScreen';
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page, {id: value });
  };
  console.log(value);
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // paddingHorizontal: 10,
        backgroundColor: '#181A20',
        height: '100%',
        // paddingBottom: 80,
      }}>
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
          CÁC CHỦ ĐỀ
        </Text>
      </View>
      <View style={styles.select}>
        <SelectComponent
          languages={languages}
          setValue={setValue}
          value={value}
        />
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: '22%',
          display: 'flex',
          justifyContent: 'flex-end',
          // marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('SelectLevel', {id: value});
          }}>
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
