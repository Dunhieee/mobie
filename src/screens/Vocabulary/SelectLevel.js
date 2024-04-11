/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';;
import {useRoute} from '@react-navigation/native';
import Starting from './Starting';

export default function SelectLevel({navigation}) {
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
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Text
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          CÁC MỨC ĐỘ
        </Text>
      </View>
      <View style={styles.select}>
        <SelectComponent
          languages={languages}
          setValue={setValue1}
          value={value1}
        />
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
          onPress={() => handleButtonPress(Starting)}>
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
