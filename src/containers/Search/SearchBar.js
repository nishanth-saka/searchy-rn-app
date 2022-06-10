import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import { BORDER_COLOR } from "../../utils/colors";
import SearchBarStyles from "./SearchBarStyles";
import { GIF_DEFAULT_QUERY } from "../../utils/constants";

const SearchBar = (props) => {
  return (
    <View style={SearchBarStyles.container}>
      <View
        style={
          !props.clicked
            ? SearchBarStyles.searchBar__unclicked
            : SearchBarStyles.searchBar__clicked
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={SearchBarStyles.input}
          placeholder={`Enter search text.. like ${props.searchPhrase}`}
          value={props.searchPhrase === GIF_DEFAULT_QUERY ? '' : props.searchPhrase}
          onChangeText={props.setSearchPhrase} 
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        
        {props.clicked && (
          <Entypo name="cross" size={20} color={BORDER_COLOR} style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )}
      </View>
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default SearchBar;
