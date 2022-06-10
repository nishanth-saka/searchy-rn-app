import React, { useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import {connect} from 'react-redux';
import _ from 'lodash';

import ListStyles from "./ListStyles";
import ListRow from "./Row";
import { GIF_DATA_LIMIT, SCREEN_HEIGHT } from "../../utils/constants";
import { setViewableIDs } from "../../store/actions/listActions";
import { debouncedUpdateGifData, updateGifData } from "../../store/actions/gifDataActions";

const List = (props) => {
  
  console.log(``);
  console.log(`List searchPhrase: `);
  console.log(props?.searchPhrase);
  console.log(``);  


  const _offSet = useRef(1);

  const _renderItem = useCallback(({item}) => {
    return (
      <ListRow item={item}/>
    )
  }, [props?.searchPhrase]);

  const _onEndReached = (param) => {
    _offSet.current = _offSet.current + 1;

    let _obj = {searchPhrase: props?.searchPhrase, offSet: _offSet.current};
    props.updateGifData(_obj)
  }

  const _onScrollBeginDrag = useRef((param) => {
  
  })

  const _onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    let _currentViews = viewableItems.map((value, index) => {
        return value?.item?.id;
    })
    props.setViewableIDs(_currentViews ?? []);
})

const _onMomentumScrollEnd = useRef((param) => {
  
})        


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
          onEndReachedThreshold={0.1}    
          onEndReached={_onEndReached}
          onScrollBeginDrag={_onScrollBeginDrag.current}
          onMomentumScrollEnd={_onMomentumScrollEnd.current}
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
    updateGifData: params =>dispatch(updateGifData(params)),
    setViewableIDs: params =>dispatch(setViewableIDs(params)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

