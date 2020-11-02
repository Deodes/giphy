import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  Button,
  Text,
  ActionSheetIOS,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfilePage = () => {
  const [image, setImage] = useState(null);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();

    
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  const handleButton = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Take a photo", "Upload", "Cancel"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          //take a photo
        } else if (buttonIndex === 1) {
          pickImage();
        } else if (buttonIndex === 2) {
          //cancel
        }
      }
    );

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <Image 
      style={{width: 200, height: 200,}}
      source={image ? image : {uri: 'https://www.purina.ua/dog/dog-chow/sites/g/files/mcldtz2191/files/2017-09/realdogs-mobile.jpg'}} 
      />
      <Button title="Change avatar" onPress={handleButton} />
      <Text style={{marginTop: 20, fontSize: 20}}>Vladimir Penchev</Text>
      <Text style={{marginTop: 10, fontSize: 10}}>21.02.2000</Text>
    </SafeAreaView>
  );
};

export default ProfilePage;
