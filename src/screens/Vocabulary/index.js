import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Vocab from './Vocab';
import Vocab_2 from './Vocab_2';

export default function Vocabulary({ navigation }) {
  const [page, setPage] = useState(0);

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Vocab">
      <Stack.Screen
        name="Vocab"
        options={{ headerShown: false }}
      >
        {props => <Vocab {...props} page={page} />}
      </Stack.Screen>
      <Stack.Screen
        name="Vocab_2"
        options={{ headerShown: false }}
      >
        {props => <Vocab_2 {...props} page={page} setPage={setPage} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
