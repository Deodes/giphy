import * as React from "react";
import { useEffect } from "react";
// import { StyleSheet } from "react-native";
// import Constants from "expo-constants";
import "react-native-gesture-handler";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPage from "./src/pages/authPage";
import GifsPage from "./src/pages/gifsPage";
import LinkPage from "./src/pages/linkPage";
import * as Linking from "expo-linking";
import store from "./index";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export default function App() {
  const link = Linking.makeUrl("link");

  const handleDeepLink = (obj) => {
    const { path } = Linking.parse(obj.url);
    if(path === 'auth') {
      navigate('auth');
    }
    else if (path === 'gifs') {
      navigate('gifs');
    } 
    else {
      navigate('link');
    }
  };

  Linking.addEventListener("url", handleDeepLink);

  useEffect(() => {
    Linking.getInitialURL().then(obj => console.log(obj))
  })

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="authorization">
          <Stack.Screen name="authorization">
            {(props) => <AuthPage {...props} />}
          </Stack.Screen>
          <Stack.Screen name="gifs">
            {(props) => <GifsPage {...props} />}
          </Stack.Screen>
          <Stack.Screen name="link">
            {(props) => <LinkPage {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
