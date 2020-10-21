import * as React from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import Form from "../components/form";

const AuthPage = ({ navigation }) => {
  return (
    <>
      <Text>Hello world</Text>
      <Form />
      <Button 
      title="redirect"
      onPress={() => navigation.navigate("Gifs")}
      />
    </>
  );
};

export default AuthPage;
