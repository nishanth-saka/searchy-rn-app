import React from 'react'
import {Text ,View , Image , StyleSheet} from 'react-native' ;
import Config from 'react-native-config';
import {connect} from 'react-redux';
import _ from 'lodash';

import ListRowGifStyles from './ListRowGifStyles';


function ListRowGif({id, previewURL = `${Config.SAMPLE_URL}`, gifURL = `${Config.SAMPLE_URL}`, viewableIDs}) {

  const _isHighlighted = _.findIndex(viewableIDs, function(o) { return o === id; }) > -1;

  // console.log(``);
  // console.log(`ListRowGif: `, id);
  // console.log(`gifURL: `, gifURL);
  // console.log(`previewURL: `, previewURL);
  // console.log(_isHighlighted);
  // console.log(``);

  return (
    <View style={ListRowGifStyles.container}>
          <Image
            style ={ListRowGifStyles.gifBlock}
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
)(ListRowGif);