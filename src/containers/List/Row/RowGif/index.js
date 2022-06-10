import React from 'react'
import {Text ,View , Image , LayoutAnimation} from 'react-native' ;
import Config from 'react-native-config';
import {connect} from 'react-redux';
import _ from 'lodash';

import ListRowGifStyles from './ListRowGifStyles';

const propsAreEqual = (preItem, nextItem) => {
  console.log(``);
  console.log(`preItem?.id: ${preItem?.id}`, preItem);
  console.log(`nextItem?.id: ${nextItem?.id}`, nextItem);
  console.log(``);

  return preItem?.id === nextItem?.id;
  // return true;
}

function ListRowGif({id, previewURL = `${Config.SAMPLE_URL}`, gifURL = `${Config.SAMPLE_URL}`, viewableIDs}) {

  const _isHighlighted = _.findIndex(viewableIDs, function(o) { return o === id; }) > -1;

  
  
  return (
    <View style={ListRowGifStyles.container}>
          <Image
            style ={[ListRowGifStyles.gifBlock]}
            source={{ uri : _isHighlighted ? gifURL : previewURL}}
          />
        </View>
  )
}

function mapStateToProps(state) {
  return {
    viewableIDs: state.ListReducer.viewableIDs,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // getGifData: params =>dispatch(getGifData(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListRowGif, propsAreEqual);