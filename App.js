import * as React from "react";
// import { StyleSheet } from "react-native";
// import Constants from "expo-constants";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPage from "./src/pages/authPage";
import GifsPage from "./src/pages/gifsPage";
import store from "./index";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="gifs">
          <Stack.Screen name="authorization">
            {(props) => <AuthPage {...props} />}
          </Stack.Screen>
          <Stack.Screen name="gifs">
            {(props) => <GifsPage {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
