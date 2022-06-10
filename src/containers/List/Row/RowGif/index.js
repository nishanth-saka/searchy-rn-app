import React from 'react'
import {Text ,View , Image , StyleSheet} from 'react-native' ;
import Config from 'react-native-config';

import ListRowGifStyles from './ListRowGifStyles';


function ListRowGif({gifURL = `${Config.SAMPLE_URL}`}) {
  return (
    <View style={ListRowGifStyles.container}>
          <Image
            style ={ListRowGifStyles.gifBlock}
            source={{ uri : gifURL}}
          />
        </View>
  )
}

export default ListRowGif;