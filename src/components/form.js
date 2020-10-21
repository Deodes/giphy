import * as React from "react";
import {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import axios from "axios";
import { authorize } from 'react-native-app-auth';

const Form = () => {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  async function auth(){
    const config = {
      redirectUrl: 'com.my.auth.app://oauthredirect',
      clientId: '94ca399f3860628a300c',
      clientSecret: '<client-secret>',
      scopes: ['identity'],
      serviceConfiguration: {
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        tokenEndpoint: 'https://github.com/login/oauth/access_token',
        revocationEndpoint:
          'https://github.com/settings/connections/applications/94ca399f3860628a300c'
      }
    };
    const result = await authorize(config);
    console.log(result)
  }
  return(
    <>
      <Button 
      title="Login with GitHub"
      onPress={auth}
      />
    </>
  )
}

export default Form;