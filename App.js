import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStart from './src/screens/Onboarding/GetStart';
import Start from './src/screens/Onboarding/Start';
import Login from './src/screens/Onboarding/Login';
import SelectLevel from './src/screens/Vocabulary/SelectLevel';
import SelectTheme from './src/screens/Vocabulary/SelectTheme';
import SelectSubject from './src/screens/Vocabulary/SelectSubject';
import Starting from './src/screens/Vocabulary/Starting';
import Vocab from './src/screens/Vocabulary/Vocab';
import Vocab_2 from './src/screens/Vocabulary/Vocab_2';
import Finish from './src/screens/Vocabulary/Finish';
import Notice from './src/screens/Notice/Notice';
import SelectPlan from './src/screens/Plan/SelectPlan';
import SelectTarget from './src/screens/Plan/SelectTarget';
import TimeLine from './src/screens/Plan/TimeLine';
import SelectDay from './src/screens/Plan/SelectDay';
import Plan from './src/screens/Plan/CalendarPage';
import PlanSche from './src/screens/Plan/CalendarPage';
import CalendarPage from './src/screens/Plan/CalendarPage';
import Study_Result from './src/screens/Processing/Study_Result';
import Vocab_bana_2 from './src/screens/Vocabulary/Vocab_bana_2';
import Vocab_bana from './src/screens/Vocabulary/Vocab_bana';
import Vocabulary from './src/screens/Vocabulary';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStart"
          component={GetStart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectLevel"
          component={SelectLevel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectTheme"
          component={SelectTheme}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectSubject"
          component={SelectSubject}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Starting"
          component={Starting}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Vocab"
          component={Vocab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vocab_2"
          component={Vocab_2}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Finish"
          component={Finish}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectPlan"
          component={SelectPlan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectTarget"
          component={SelectTarget}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TimeLine"
          component={TimeLine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDay"
          component={SelectDay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CalendarPage"
          component={CalendarPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Study_Result"
          component={Study_Result}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Vocab_bana_2"
          component={Vocab_bana_2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vocab_bana"
          component={Vocab_bana}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="vocabulary"
          component={Vocabulary}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
