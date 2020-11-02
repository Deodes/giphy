import * as React from "react";
import { useEffect } from "react";
// import { StyleSheet } from "react-native";
// import Constants from "expo-constants";
import "react-native-gesture-handler";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthPage from "./src/screens/authScreen";
import GifsPage from "./src/screens/gifsScreen";
import ProfilePage from "./src/screens/profileScreen";
import * as Linking from "expo-linking";
import store from "./index";
import { Provider } from "react-redux";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

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
        <Tab.Navigator initialRouteName="Auth">
          <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="door" color={color} size={size} />
            ),
          }}
          name="Auth">
            {(props) => <AuthPage {...props} />}
          </Tab.Screen>
          <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file-image" color={color} size={size} />
            ),
          }}
          name="Gifs">
            {(props) => <GifsPage {...props} />}
          </Tab.Screen>
          <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={size} />
            ),
          }}
          name="Profile">
            {(props) => <ProfilePage {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
