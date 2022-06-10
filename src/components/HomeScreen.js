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
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState(props.gifData);

  console.log(``);
  console.log(`_setGifData: `);
  console.log(props.gifData);
  console.log(``);

  // get data from the fake api
  useEffect(() => {
    props.getGifDataArray();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Programming Languages</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (
        
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
        
      )}
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    gifData: state.GifDataReducer.gifData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGifDataArray: params =>dispatch(getGifData(params))
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
