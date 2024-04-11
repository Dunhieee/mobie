import React from 'react'
import Header from '../components/Header'
import FunctionApp from '../components/FunctionApp'
import Menu from '../components/Menu'
import { ScrollView, StyleSheet, View } from 'react-native'
export default function Home({navigation }) {
  return (
    <View style ={styles.container} >
       <ScrollView>
          <Header style={styles.header}></Header>
          <View style= {styles.function}>
          <FunctionApp
          navigation={navigation}></FunctionApp>
          </View>
          <View style={styles.menu}>
          <Menu navigation={navigation}></Menu>
          </View>
          
       </ScrollView>
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181A20',
    // flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%'
  },
  header: {
    paddingTop: 30,
  },
  function: {
    paddingTop: 50,
  },
  menu:{
    // position:'relative',
    paddingTop: 150,
    flex: 1,

  }
})