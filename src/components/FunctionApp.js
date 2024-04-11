import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Exam from '../screens/Exam/Exam';
import SelectLevel from '../screens/Vocabulary/SelectLevel';
import SelectTheme from '../screens/Vocabulary/SelectTheme';
import SelectPlan from '../screens/Plan/SelectPlan';
export default function FunctionApp({navigation }) {
    
    const handleButtonPress = (page) => {
        // Thực hiện chuyển sang trang mới tương ứng với page
        navigation.navigate(page);
      };
  return (
    <View style={styles.container}>
      {/* Hàng trên */}
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(SelectTheme)}
        >
          <View>
          <Text style={styles.buttonText}>Học từ vựng</Text>
          {/* <LocalLibraryIcon></LocalLibraryIcon> */}
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Page2')}
        >
          <Text style={styles.buttonText}>Làm bài tập</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng dưới */}
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[styles.button, ]}
          onPress={() => handleButtonPress('Page3')}
        >
          <Text style={styles.buttonText}>Kiểm tra</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(SelectPlan)}
          >
            <Text style={styles.buttonText}>Lên kế hoạch</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#6949FF',
      justifyContent: 'center',
      width: "40%",
      height: 200,
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    singleButton: {
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });