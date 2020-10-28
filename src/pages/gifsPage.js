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
// import Constants from "expo-constants";
import BottomSheet from "reanimated-bottom-sheet";
import * as _ from "lodash";
import axios from "axios";
import "react-native-gesture-handler";
import { setGifs } from "../actions/index";
import { setGifsToZero } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

const GifsPage = () => {
  const dispatch = useDispatch();
  const gifs = useSelector(state => state);
  const [offset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState('');

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
    console.log(gifs);
  }, [requestDebounce, inputValue]);

  const requestDebounce = useCallback(
    _.debounce((nextValue) => request(nextValue), 700),
    []
  );

  const handleInput = (input) => {

    dispatch(setGifsToZero())
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
    
    dispatch(setGifs(gifs.concat(response.data.data)));
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
  );
};

export default GifsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -2 },
    shadowRadius: 1,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  main: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 10,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingLeft: 6,
  },
  list: {
    marginTop: 5,
  },
  list__item__container: {
    width: "33%",
  },
  list__item: {
    width: "100%",
    height: 100,
  },
});
