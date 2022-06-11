import React, { useRef, useCallback, useState, useEffect, memo } from "react";
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
import ShowLoder from "../../containers/Loader/ShowLoder";

import { GIF_DATA_LIMIT, GIF_DEFAULT_QUERY } from "../../utils/constants";
import { setViewableIDs } from "../../store/actions/listActions";
import { updateGifData } from "../../store/actions/gifDataActions";

const propsAreEqual = (preItem, nextItem) => {
  return preItem?.data?.[preItem?.data.length - 1]?.id ===  nextItem?.data?.[nextItem?.data.length - 1]?.id;
  // return true;
}

const List = (props) => {
  
  const _offSet = useRef(0);
  const _listView = useRef();
  const _gifDataLoading = useRef(false);

  const _searchPhrase = useRef(GIF_DEFAULT_QUERY);
  const [isScrolling, setIsScrolling] = useState(false);
  const [gifDataLoading, setGifDataLoading] = useState(false);
  let _flatListData = props.gifData;

  const _renderItem = useCallback(({item}) => {
    return (
      <ListRow item={item}/>
    )
  }, []);
  
  useEffect(() => {
    _gifDataLoading.current = false;
    _offSet.current = 0;
    props.setViewableIDs([]);

    if(_flatListData.length > 0){
      _searchPhrase.current = props?.searchPhrase;
      _listView.current.scrollToIndex({index: 0, animated: true});
    }
    
  }, [props?.searchPhrase])
  

  const _onEndReached = useRef(({distanceFromEnd}) => {
    if (distanceFromEnd < 0) return;
    _gifDataLoading.current = true;
  } )

  const _loadNext = (param) => {
    _gifDataLoading.current = false;
    _offSet.current = _offSet.current + 1;
    let _obj = {searchPhrase: _searchPhrase.current, offSet: _offSet.current}; 
    props.updateGifData(_obj);   
  }

  const _onScrollBeginDrag = (param) => {
    if(!isScrolling){
      setIsScrolling(true);      
    }
  }

  const _onMomentumScrollEnd = (param) => {
    if(isScrolling){
      setIsScrolling(false);
    }
  } 

  const _onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
      let _currentViews = viewableItems.map((value, index) => {
          return value?.item?.id;
      })
      
      if(!isScrolling){
        props.setViewableIDs(_currentViews ?? []);
      }
  })

  

  return (
    <SafeAreaView style={ListStyles.container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          ref={(listView) => {
            _listView.current = listView;
          }}
          removeClippedSubviews={true}
          onViewableItemsChanged={_onViewableItemsChanged.current}
          initialNumToRender={GIF_DATA_LIMIT}
          data={_flatListData}
          renderItem={_renderItem}
          keyExtractor={(item) => `${item?.id}}`}      
          onEndReachedThreshold={0.4}    
          onEndReached={_onEndReached.current}
          onMomentumScrollBegin={_onScrollBeginDrag}
          onMomentumScrollEnd={_onMomentumScrollEnd}
          extraData={props?.searchPhrase}
        />
      </View>
      <ShowLoder gifDataLoading={_gifDataLoading.current} loadNext={_loadNext} />
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
)(memo(List, propsAreEqual));

