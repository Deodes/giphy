import * as React from "react";
import { Text, Button } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/94ca399f3860628a300c',
};

const AuthPage = ({ navigation }) => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '94ca399f3860628a300c',
      scopes: ['identity'],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'http://localhost:19006/',
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      }
  }, [response]);
  return (
    <>
      <Text>Hello world</Text>
      <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        navigation.navigate("Gifs");
        }}
    />
    </>
  );
};

export default AuthPage;
