import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import BottomSheet from "reanimated-bottom-sheet";
import * as _ from "lodash";
import axios from "axios";
import "react-native-gesture-handler";

const Gifs = () => {
  const [gifs, setGifs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [offset, setOffset] = useState(0);

  const sheetRef = useRef(null);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const renderContent = () => (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        placeholder="Write the name of GIF here"
        onChangeText={handleInput}
        value={inputValue}
      />
      <FlatList
        style={styles.list}
        onEndReached={handleScroll}
        onEndReachedThreshold={0}
        numColumns={3}
        data={gifs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.list__item__container}>
            <Image
              resizeMode="cover"
              style={styles.list__item}
              source={{ uri: item.images.original.url }}
            />
          </View>
        )}
      />
    </View>
  );

  useEffect(() => {
    requestDebounce(inputValue);
    setOffset((prev) => prev + 15);
  }, [requestDebounce, inputValue]);

  const requestDebounce = useCallback(
    _.debounce((nextValue) => request(nextValue), 700),
    []
  );

  const handleInput = (input) => {
    setGifs([]);
    setOffset(0);
    setInputValue(input);
  };

  const handleScroll = () => {
    request(inputValue);
    setOffset((prev) => prev + 15);
  };

  async function request(term) {
    const API_KEY = "D45mHo1TONKy9j48y3q2YIX6E2Gx5t6B";
    const BASE_URL = "https://api.giphy.com/v1/gifs/search";
    const response = await axios.get(
      `${BASE_URL}?api_key=${API_KEY}&q=${term}&limit=15&offset=${offset}&rating=g&lang=en`
    );
    setGifs(gifs.concat(response.data.data));
  }

  return (
    <SafeAreaView style={styles.container}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          renderHeader={renderHeader}
          renderContent={renderContent}
        />
      </SafeAreaView>
  )
}

export default Gifs;