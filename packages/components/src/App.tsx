
import React, {type PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, HelloWorld } from './screens';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="HelloWorld"
          component={HelloWorld}
          options={{ title: 'Hello World' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
