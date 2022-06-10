import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

import ListStyles from "./ListStyles";
import ListRow from "./Row";
import ListFooter from "./Footer";
import { GIF_DATA_LIMIT } from "../../utils/constants";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

// the filter
const List = (props) => {
  const renderItem = ({item}) => {
   
    // when no input, show all
    // if (props.searchPhrase === "") {
    //   return <Item name={item.name} details={item.details} />;
    // }
    // // filter of the name
    // if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   return <Item name={item.name} details={item.details} />;
    // }
    // // filter of the description
    // if (item.details.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   return <Item name={item.name} details={item.details} />;
    // }

    return (
      <>
        {item?.id ? <ListRow item={item}/> : <></>}
      </>
    )
  };

  return (
    <SafeAreaView style={ListStyles.container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          initialNumToRender={Number(GIF_DATA_LIMIT/3)}
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item?.id ?? `${Math.random()}`}
          ListFooterComponent={ListFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
