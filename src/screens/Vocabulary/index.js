import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Vocab from './Vocab';
import Vocab_2 from './Vocab_2';
import { useRoute } from '@react-navigation/native';

export default function Vocabulary({ navigation }) {
  const [page, setPage] = useState(1);

  const Stack = createStackNavigator();
  const {chude,goitu, mucdo}=useRoute().params
  console.log("index",{chude,goitu,mucdo})
  return (
    <Stack.Navigator initialRouteName="Vocab">
      <Stack.Screen
        name="Vocab"
        options={{ headerShown: false }}
      >
        {props => <Vocab {...props} page={page}  goitu={goitu} chude={chude} mucdo={mucdo}/>}
      </Stack.Screen>
      <Stack.Screen
        name="Vocab_2"
        options={{ headerShown: false }}
      >
        {props => <Vocab_2 {...props} page={page} setPage={setPage} goitu={goitu} chude={chude} mucdo={mucdo} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
