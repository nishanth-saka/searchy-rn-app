import React, {useState, useEffect, useRef} from 'react'
import {Text ,View , Image , TouchableOpacity} from 'react-native' ;
import Config from 'react-native-config';
import {connect} from 'react-redux';
import Video from 'react-native-video';
import _ from 'lodash';

import ListRowGifStyles from './ListRowGifStyles';
import GifImage from '@lowkey/react-native-gif';


const propsAreEqual = (preItem, nextItem) => {
 
  // const _isHighlightedPre = _.findIndex(preItem.viewableIDs, function(o) { return o === preItem?.id; }) > -1;
  // const _isHighlightedNxt = _.findIndex(nextItem.viewableIDs, function(o) { return o === nextItem?.id; }) > -1;

  // console.log(`ListRow`);
  // console.log(`preItem?.id`, preItem?.id);
  // console.log(`nextItem?.id`, nextItem?.id);
  // console.log(`_isHighlightedPre `, _isHighlightedPre );
  // console.log(`_isHighlightedNxt`, _isHighlightedNxt);
  // console.log(``);

    // return _isHighlightedPre === _isHighlightedNxt;  
    return false;  
  }

function ListRowGif({id, previewURL = `${Config.SAMPLE_URL}`, gifURL = `${Config.SAMPLE_URL}`, gifURLStill = `${Config.SAMPLE_URL}`, viewableIDs}) {

  const _isHighlighted = _.findIndex(viewableIDs, function(o) { return o === id; }) > -1;

  return (
    <View style={ListRowGifStyles.container}>          
        
    <Video source={{uri: gifURL}} 
          repeat={true}
          resizeMode={'cover'}
          poster={gifURLStill}
          posterResizeMode={'cover'}
          paused={!_isHighlighted}
          style={[ListRowGifStyles.backgroundVideo]} />

        {/* <Image
            style ={[ListRowGifStyles.gifBlock, {display: onPreviewLoaded ? 'none' : 'flex'}]}
            source={{ uri : previewURL}}                       
          /> */}


          <Image
            style ={[ListRowGifStyles.profileImage]}
            source={{ uri : previewURL}}           
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
) (ListRowGif);