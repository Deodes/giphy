import React from "react";
import { useEffect, useState } from "react";
import { Text, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

const LinkPage = () => {
  // const link = Linking.makeUrl();
  // Linking.getInitialURL().then(console.log)
  // console.log(link)

  

  // const handleDeepLink = (url) => {
  //   setLinkRedirectUrl(url);
  //   let {path, query} = Linking.parse(url);
  //   console.log(path, JSON.parse(query), linkRedirectUrl);
  // }

  // useEffect(() => {
  //   // let baseURL = Linking.makeUrl();
  //   // Linking.addEventListener('url', handleDeepLink);
  //   // let initialLink = Linking.getInitialURL();
  //   // let linkURL = Linking.makeUrl('linkPage', {hello: 'world', goodbye: 'now'})
  //   // console.log(linkURL)
  //   // console.log(initialLink);
  //   getLink();
  // })

  // const getLink = async () => {
  //   let initialLink = await Linking.getInitialURL();
  //   console.log(initialLink, 'link');
  // }

  return (
    <Text>Deep Linking</Text>
  )
}

export default LinkPage;