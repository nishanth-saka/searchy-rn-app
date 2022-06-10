// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import {connect} from 'react-redux';

import { GIF_DEFAULT_QUERY, SCREEN_HEIGHT } from "../utils/constants";
import List from "../containers/List";
import SearchBar from "../containers/Search/SearchBar";
import { getGifData } from "../store/actions/gifDataActions";

const Home = (props) => {
  const {getGifData} = props;
  useEffect(() => {
    getGifData();
  }, []);

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

  const [searchPhrase, setSearchPhrase] = useState(GIF_DEFAULT_QUERY);
  const debouncedSearchTerm = useDebounce(searchPhrase, 500);
  useEffect(() => {
    if(!debouncedSearchTerm || debouncedSearchTerm.length === 0){
      return;
    }

    getGifData({searchParam: debouncedSearchTerm});
  }, [debouncedSearchTerm]);

  const [clicked, setClicked] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <View style={{flex: 1}}>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          <View style={{justifyContent: 'center', flex: 1}}>
              <List
                  searchPhrase={searchPhrase}
                  data={props.gifData}
                  setClicked={setClicked}
                />
          </View>          
        </View>
      </SafeAreaView>
    // <SafeAreaView style={styles.root}>
    //   {/* {!clicked && <Text style={styles.title}>Programming Languages</Text>} */}

    //   <View style={{justifyContent: 'center', width: '100%', height: 80}}>
    //     <SearchBar
    //       searchPhrase={searchPhrase}
    //       setSearchPhrase={setSearchPhrase}
    //       clicked={clicked}
    //       setClicked={setClicked}
    //     />
    //   </View>
    //   {gifDataLoading ? (
    //     <ActivityIndicator size="large" />
    //   ) : (
    //     <View style={{justifyContent: 'center', flex: 1}}>
    //       <List
    //         searchPhrase={searchPhrase}
    //         data={props.gifData ?? []}
    //         setClicked={setClicked}
    //       />
    //     </View>
          
        
    //   )}
    // </SafeAreaView>
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
