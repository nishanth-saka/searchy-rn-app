// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import {connect} from 'react-redux';

import List from "../containers/List";
import SearchBar from "../containers/SearchBar";
import { getGifData } from "../store/actions/gifDataActions";

const Home = (props) => {
  const {gifData, getGifData, gifDataLoading} = props;
  useEffect(() => {
    getGifData();
  }, []);

  const [searchPhrase, setSearchPhrase] = useState("");
  const useDebounce = (value, delay) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
  }

  const debouncedSearchTerm = useDebounce(searchPhrase, 500);
  useEffect(() => {
    if(!debouncedSearchTerm || debouncedSearchTerm.length === 0){
      return;
    }

    getGifData(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState(gifData);

  console.log(``);
  console.log(`gifDataLoading: `);
  console.log(gifDataLoading);
  console.log(``);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Programming Languages</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {gifDataLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        
          <List
            searchPhrase={searchPhrase}
            data={props.gifData ?? []}
            setClicked={setClicked}
          />
        
      )}
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    gifData: state.GifDataReducer.gifData,
    gifDataLoading: state.GifDataReducer.gifDataLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGifData: params =>dispatch(getGifData(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
