import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  Button,
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
      console.log(result.uri)
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
          //take a photo from camera
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
      style={{width: 100, height:100,}}
      source={image} 
      />
      <Button title="Change avatar" onPress={handleButton} />
    </SafeAreaView>
  );
};

export default ProfilePage;
