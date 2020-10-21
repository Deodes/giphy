import * as React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPage from './src/pages/authPage'
import GifsPage from './src/pages/gifsPage'

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authorization'>
        <Stack.Screen name='Authorization'>
          {
            props => <AuthPage {...props}/>
          }
        </Stack.Screen>
        <Stack.Screen name='Gifs'>
          {
            props => <GifsPage {...props}/>
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



