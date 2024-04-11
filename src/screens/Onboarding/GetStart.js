
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Login from './Login';

export default function GetStart({navigation}) {
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{height: 150, width: 150}}
          source={require('../../assets/Images/logo.png')}
        />
        <Text style={styles.text}>Doulingo</Text>
      </View>
      <View style={styles.next}>
        <View style={styles.next1}>
          <TouchableOpacity
            style={styles.button1}
            // onPress={() => handleButtonPress(SelectLanguageOnboarding)}
            >
            <Text style={{color: 'white'}}> GET STARTED</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => handleButtonPress(Login)}>
            <View>
              <Text style={{color: '#6949FF'}}> I ALREADY HAVE AN ACCOUNT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#181A20',
  },
  text: {
    fontSize: 35,
    marginTop: 15,
    color: 'white',
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#6949FF',
    marginBottom: 10,
    width: '90%',
    color: 'white',
    borderRadius: 30,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    width: '90%',
    borderRadius: 30,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  next: {
    height: '20%',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  next1: {
    // height: '30%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
