import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Start({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Chuyển sang màn hình khác sau 2 giây
      navigation.replace('GetStart'); // Thay 'NextScreen' bằng tên màn hình tiếp theo
    }, 3000);

    return () => clearTimeout(timer); // Xóa timer nếu component unmounted
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={{height: 150, width: 150}}
        source={require('../../assets/Images/logo.png')}
      />
      <Text style={styles.text}>Doulingo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A20',
  },
  text: {
    fontSize: 35,
    marginTop: 15,
    color: 'white',
  },
});
