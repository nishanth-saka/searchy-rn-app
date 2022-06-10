import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import {connect} from 'react-redux';

import ListStyles from "./ListStyles";
import ListRow from "./Row";
import { GIF_DATA_LIMIT, SCREEN_HEIGHT } from "../../utils/constants";
import { setViewableIDs } from "../../store/actions/listActions";
import { updateGifData } from "../../store/actions/gifDataActions";

const List = (props) => {
  const _renderItem = ({item}) => {
    return (
      <>
        {item?.id ? <ListRow item={item}/> : <></>}
      </>
    )
  };

  const _onEndReached = (param) => {
    console.log(``);
    console.log(`_onEndReached index: `);
    console.log(param);
    console.log(``);    
  }

  const _onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    let _currentViews = viewableItems.map((value, index) => {
        return value?.item?.id;
    })

    setTimeout(() => {
      props.setViewableIDs(_currentViews)
    }, 1000);
})

// console.log(``);
// console.log(`LIST props.gifData: `);
// console.log(props.gifData?.length);
// console.log(props.gifData?.[0]?.user);
// console.log(``);        


  return (
    <SafeAreaView style={ListStyles.container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          removeClippedSubviews={true}
          onViewableItemsChanged={_onViewableItemsChanged.current}
          initialNumToRender={GIF_DATA_LIMIT}
          data={props.gifData ?? []}
          renderItem={_renderItem}
          keyExtractor={(item) => `${item?.id}}`}      
          onEndReachedThreshold={0.3}    
          onEndReached={_onEndReached}
        />
      </View>
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    gifData: state.GifDataReducer.gifData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateGifData: params =>dispatch(updateGifData(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

