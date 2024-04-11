import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Home from '../Home';
export default function Login({navigation}) {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cfPassword, setCfPassword] = React.useState('');
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };

  return (
    <View
      style={{
        // backgroundColor: '#181A20',
        height: '100%',
        paddingTop: 30,
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          Login to Douling app
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <View style={{marginVertical: 10}}>
          <TextInput
            label="Username"
            value={userName}
            onChangeText={text => setUserName(text)}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            secureTextEntry={true}
            style={styles.default}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Type..."
            label="Password"
          />
        </View>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 250,
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress(Home)}>
          <Text style={{color: 'white'}}> LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View>
          <Text>New account?</Text>
        </View>
        <View>
          <TouchableOpacity
            //   style={styles.button1}
            // onPress={() => handleButtonPress(Register)}
            >
            <Text style={{color: '#6949FF'}}> Register</Text>
          </TouchableOpacity>
        </View>
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
