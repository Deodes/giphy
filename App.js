import * as React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './src/pages/auth'
import Gifs from './src/pages/gifs'

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen 
        name='Authorization' 
        component={Auth}
        
        />
        <Stack.Screen name='Gifs' component={Gifs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -2 },
    shadowRadius: 1,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  main: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 10,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingLeft: 6,
  },
  list: {
    marginTop: 5,
  },
  list__item__container: {
    width: "33%",
  },
  list__item: {
    width: "100%",
    height: 100,
  },
});

