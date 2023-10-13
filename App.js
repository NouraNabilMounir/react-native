/* eslint-disable prettier/prettier */
import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Sign from './src/screens/auth/Sign';
// import SignIn from './src/screens/auth/SignIn';

const Stack = createNativeStackNavigator();
function App  () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign">
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
